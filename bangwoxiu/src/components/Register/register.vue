<template>
    <div class="register">
      <div class="head">
        <img src="./LOGO.png" alt="注册页面">
      </div>
      <div class="registerRegion" >
        <input type="text" placeholder="手机号" class="tel">
        <input type="text" placeholder="请输入密码" class="psd">
        <input type="text" placeholder="请再次输入密码" class="againPsd">
        <input type="text" placeholder="请输入用户名" class="uerName">
      </div>
      <div class="btnRegister">
        <input type="button" class="btn" value="马上注册">
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {

      }
    }
  }
</script>

<style lang='scss'>
  @import "../../../static/style/sass/common/reset.scss";
  @import "../../../static/style/sass/common/register.scss";
</style>
