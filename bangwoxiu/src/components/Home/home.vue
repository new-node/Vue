<template>
    <div class="home">
      <div class="head">
        <img src="./LOGO.png" alt="背景图">
      </div>
      <div class="content">
        <div class="content-head">
          <h3>{{msg}}</h3>
        </div>
        <div class="ctn">
            <ul>
              <li v-for="btnName in nameLists">
                <router-link :to="btnName.route">{{btnName.text}}</router-link>
              </li>
            </ul>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
      name: 'home',
      data () {
        return {
          msg: '85服务',
          nameLists: [
            {text: '家电维修', route: '/foo/repair'},
            {text: '家电清洗', route: '/foo/clearn'},
            {text: '移机服务', route: '/foo/move'}
          ]
        }
      }
    }
</script>

<style lang='scss'>
  @import "../../../static/style/sass/common/reset.scss";
  @import "../../../static/style/sass/common/basic.scss";
</style>
