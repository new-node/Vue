<template>
    <div class="loginPage">
      <div class="divImg">
        <img src="./LOGO.png" alt="头部图片">
      </div>
      <div class="ctnImg">
        <img src="./customerico.png" alt="内容图片">
      </div>
      <div class="ctnLogin" v-show="showLogin">
        <p v-show="showTishi">{{tishi}}</p>
        <input type="text" v-model="username" placeholder="请输入用户名" class="userName">
        <input type="password" v-model="password" placeholder="密码" class="password">
        <input type="button" class="btnMsg" v-model="btnMsg" v-on:click="login" >
        <span v-on:click = "ToRegister" class="register">没有账号?马上注册</span>
        <!--<router-link :to="{path: '/foo/register'}" class="register">{{register}}</router-link>-->
      </div>

      <!--注册页面-->
      <div class="register-wrap" v-show="showRegister">
        <h3>注册</h3>
        <p v-show="showTishi" >{{tishi}}</p>
        <input type="text" class="userName" v-model="newUsername" placeholder="请输入用户名">
        <input type="password" class="password" v-model="newPassword" placeholder="请输入密码" >
       <!-- <input type="password" v-model="userules.newPassword" class="password" placeholder="请输入密码" v-validate:key="{required:true, minlength:1, maxlength:6, pattern:/^(?!\d)[a-zA-Z0-9_]+$/}">-->
        <button v-on:click="regist" class="btnMsg">注册</button>
        <span v-on:click="ToLogin">已有账号?马上登录</span>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import {setCookie, getCookie} from '../../assets/js/cookie.js'
  import Store from '../../assets/js/userstore.js'
  export default {
    name: 'loginPage',
    data () {
      return {
        showLogin: true,
        showTishi: false,
        showRegister: false,
        tishi: '',
        username: '',
        password: '',
        userlist: [],
        newPassword: '',
        newUsername: '',
        btnMsg: '立即登录',
        register: '立即注册'
      }
    },
    mounted () {
      /*  页面挂在获取cookie，如果存在username的cookie，则跳转到主页，不需登录  */
      if (getCookie('username')) {
        this.$router.push('/foo/index')
      }
      let _self = this
      let admin = {
        username: 'vue',
        password: '123456'
      }
      _self.userlist.push(admin)
      _self.username = admin.username
      _self.password = admin.password
    },
    watch: {
      userlist: {
        handler: function (items) {
          Store.save(items)
        },
        deep: true
      }
    },
    methods: {
      login () {
        let _self = this
        let users = Store.fetch()
        users.forEach(function (i) {
          if (_self.username === i.username && _self.password === i.password) {
            _self.$router.push({
              path: '/foo/index'
            })
            setCookie('username', _self.username, 1000 * 60)
          } else {
            alert('用户名与密码不匹配！')
          }
        })
        /* 连上数据库时存的数据 */
        if (this.username === '' || this.password === '') {
          alert('请输入用户名或密码')
        } else {
          let data = {'username': this.username, 'password': this.password}
          this.$http.post('', data).then((res) => {
            if (res.data === -1) {
              this.tishi = '该用户不存在'
              this.showTishi = true
            } else if (res.data === 0) {
              this.tishi = '密码错误'
              this.showTishi = true
            } else if (res.data === 'admin') {
              this.$router.push('/foo/main')
            } else {
              this.tishi = '登录成功'
              this.showTishi = true
              setCookie('username', this.uername, 1000 * 60)
              setTimeout(function () {
                this.$router.push('/foo/index')
              }.bind(this), 1000)
            }
          })
        }
      },
      ToRegister () {
        this.showRegister = true
        this.showLogin = false
      },
      ToLogin () {
        this.showRegister = false
        this.showLogin = true
      },
      regist () {
        // 注册用户，如果已经被注册
        let _self = this
        _self.haduser()
        if (_self.isNhad && _self.newUsername && _self.newPassword) {
          _self.userlist.push({
            username: _self.newUsername,
            password: _self.newPassword
          })
          this.newUsername = ''
          this.newPassword = ''
          this.showRegister = false
          this.showLogin = true
        }
        /* 在数据库中注册用到的 */
        /* if (this.newUsername === '' || this.newPassword === '') {
          alert('请输入用户名或密码')
        } else {
          let data = {'username': this.newUsername, 'password': this.newPassword}
          this.$http.post('', data).then((res) => {
            if (res.data === 'ok') {
              this.tishi = '注册成功'
              this.showTishi = true
              this.username = ''
              this.password = ''
              setTimeout(function () {
                this.showRegister = false
                this.showLogin = true
                this.showTishi = false
              }.bind(this), 1000)
            }
          })
        } */
      },
      haduser () {
        let _self = this
        let items = Store.fetch()
        items.forEach(function (i) {
          if (_self.newUsername !== i.newUsername) {
            _self.isNhad = true
          } else {
            _self.isNhad = false
          }
        })
      }
    }
  }
</script>

<style lang='scss'>
  @import "../../../static/style/sass/common/reset.scss";
  @import "../../../static/style/sass/common/basic.scss";
  span{
    cursor: pointer;
  }
  span:hover{
    color: #41b883;
  }
</style>
