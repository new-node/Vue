<template>
    <div class="repairElement">
      <div class="repairHead">
        <img src="./topicon.png" alt="维修页面头部">
      </div>
      <div class="elementType">
          <ul class="border-bottom-1px">
            <li v-for="(element,$index) in elementLists" v-bind:class="{active: $index == num}" @mouseover="toggle($index,element)">{{element.elObj}}</li>
          </ul>
      </div>
      <div class="repairCtn border-bottom-1px border-top-1px border-left-1px border-right-1px">
          <table class="ctnHead border-bottom-1px">
            <thead>
                <tr>
                  <td colspan="2">{{msg}}</td>
                </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan="2">
                  <p class="ctnTS">温馨提示</p>
                  <div class="ctn">
                    <span>1</span>同一种电器同级别多项维修，没增加一项累计计算费用，同一级别维修费用累计最高不超过两项；不同级别的维修，进行累计收费。
                  </div>
                  <div class="ctn">
                    <span>2</span>在使用原有配件基础上，按照标准收费；如需更换新配件，则按实际情况另行加收费用配件费用!
                  </div>
                  <div class="ctn">
                    <span>3</span>此价格仅供参考，具体以工程师实际上门为准。
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
      </div>
      <div class="btn-login">
        <router-link :to="{path: '/foo/login' }">{{loginMsg}}</router-link>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
      name: 'repairElement',
      data () {
        return {
          num: 0,
          msg: '电视',
          loginMsg: '立即登录',
          elementLists: [
            {elObj: '电视', view: 'child1'},
            {elObj: '电脑', view: 'child2'},
            {elObj: '空调', view: 'child3'},
            {elObj: '洗衣机', view: 'child4'},
            {elObj: '电冰箱', view: 'child5'},
            {elObj: '电磁炉', view: 'child6'},
            {elObj: '热水器', view: 'child7'},
            {elObj: '电烤箱', view: 'child8'},
            {elObj: '饮水机', view: 'child9'}
          ]
        }
      },
      methods: {
        toggle: function ($index, element) {
          this.num = $index
          this.msg = element.elObj
        }
      }
    }
</script>

<style lang='scss'>
  @import "../../../static/style/sass/common/reset.scss";
  @import "../../../static/style/sass/common/basic.scss";
  ::-webkit-scrollbar {display:none; width:0; height: 0;}
  .active {
    color: #FFFFFF !important;
    border-bottom: pxTorem(1px) solid red;
  }
  p.ctnTS{
    text-align: left;
    margin: pxTorem(10px) 0;
  }
  tbody {
  background: #FFFFFF;
  }
  .ctn{
    text-align: left;
  }
</style>
