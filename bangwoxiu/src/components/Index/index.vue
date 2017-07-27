<template>
  <div class='contains'>
    <span class="imgPic" v-on:click="showReg()">
      <img src="./Category.png" alt="折叠按钮">
    </span>
    <transition name="slide-fade" >
      <div class="loginUserName" v-show="showRegion">
        <h3>欢迎 {{name}}</h3>
        <span class="btnClose" v-on:click="closeShow()">
        <img src="./close.png" alt="关闭">
      </span>
        <a href="#" @click="quit">注销登录</a>
      </div>
    </transition>
    <div class="ctnRegion">
      <div class="regionFirst">
        <img src="./contentLOGO.png" alt="维修页面头部视图">
      </div>
      <div class="linkage-wrap">
        <div class="address-wrap">
          <span class="site">地址:</span>
          <input class="input" :value="address" disabled type="text" placeholder="请选择所在地区">
          <span class="btn" @click="address_flag = !address_flag">
            <img src="./more.png" alt="选择省市区">
          </span>
        </div>
        <div class="pick-mark" v-show="address_flag">
          <div class="btn-wrap">
            <a class="btn-cancel" @click="address_flag = !address_flag">取消</a>
            <a class="btn-sure" @click="fillAddress">确定</a>
          </div>
          <mt-picker class="select" :slots="slots" value-key="aname" @change="onValuesChange"></mt-picker>
        </div>
      </div>
      <div class="detaileSite">
        <span>详细地址:</span>
        <input type="text" class="site" placeholder="请填写详细地址">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {delCookie, getCookie} from '../../assets/js/cookie.js'
  import {address, slots} from '../../assets/js/address'
  export default {
    name: 'contains',
    data () {
      return {
        showRegion: false,
        name: '',
        address_flag: false,
        slots: slots,
        address: '',
        temp_addr: ''
      }
    },
    mounted () {
      this.initAddress()
      let uname = getCookie('username')
      this.name = uname
      if (uname === '') {
        this.$router.push('/foo/login')
      }
    },
    methods: {
      quit () {
        delCookie('username')
      },
      showReg () {
        this.showRegion = true
      },
      closeShow () {
        this.showRegion = false
      },
      fillAddress () {
        // 填入省市区
        this.address = this.temp_addr
        this.address_flag = !this.address_flag
      },
      initAddress () {
        this.slots[0].values = address.filter((item, index) => {
          if (item.apid === 0) {
            return item
          }
        })
      },
      onValuesChange (picker, values) {
        // 防止没有省份时报错
        if (values[0]) {
          this.slots[1].values = address.filter((item, index) => {
            if (item.apid === values[0].aid) {
              return item
            }
          })
        }
        // 防止没有市时报错
        if (values[1]) {
          this.slots[2].values = address.filter((item, index) => {
            if (item.apid === values[1].aid) {
              return item
            }
          })
        }
        // 防止没有区时报错
        if (values[2]) {
          // 这里可以指定地址符，此处以空格进行连接
          this.temp_addr = values[0].aname + ' ' + values[1].aname + ' ' + values[2].aname
        }
      }
    }
  }
</script>

<style lang='scss' scoped="">
  @import "../../../static/style/sass/common/reset.scss";
  @import "../../../static/style/sass/common/register.scss";
  .linkage-wrap {
    position: relative;
    border-bottom: 1px solid #6e6e6e;
    .address-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 30px;
      padding: 10px;
      font-size: 14px;
      color: #333;
      background: #fff;
      .site {
        margin-right: 5px;
      }
      .input {
        display: flex;
        align-items: center;
        flex: 1;
        height: 100%;
        padding: 0;
        box-sizing: border-box;
        border: none;
        background: #ffffff;
      }
      .btn {
        flex: 0 0 80px;
        width: 15px;
        height: 15px;
        line-height: 15px;
        text-align: right;
        border-left: 0 none;
        box-sizing: border-box;
        img {
          width: 15px;
          height: 15px;
        }
      }
    }
    .pick-mark {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      background: rgba(236, 240, 243, .8);
      .btn-wrap {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 180px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        padding: 0 20px;
        font-size: 14px;
        background: #fff;
        .btn-cancel {
          color: #55f;
        }
        .btn-sure {
          color: #e5004d;
        }
      }
      .select {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
      }
      .picker-items {
        background: #eee;
        .picker-slot {
          font-size: 14px;
        }
        .picker-item {
          &.picker-selected {
            color: #535353;
          }
        }
        .picker-center-highlight {
          &:after, &:before {
            background: #fff;
          }
        }
      }
    }
  }
  .detaileSite {
    display: flex;
    width: 100%;
    height: 50px;
    font-size: 14px;
    background-color: #ffffff;
    align-items:center;
    span{
      margin: 0 9px;
      display: inline-block;
    }
    input{
      box-sizing: border-box;
      flex: 0 0 70%;
      height: 25px;
      border: none;
      outline: none;
    }
  }
</style>
