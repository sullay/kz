<template>
  <div class="tip">
    <div class="back" />
    <div class="notice">
      <div class="title">
        <div class="icon"></div>口罩购买须知
      </div>
      <p>本人承诺：购买口罩只自用，不得抬价转卖；用完后按照卫生部门有关指引进行处理，不造成二次污染。如违反承诺，将接受被全链公告。</p>
      <p>本承诺及交易记录，由畅物链和蚁米卓启云链，进行分布式存证和全链追踪。</p>
      <div class="read" @click="isRead=!isRead">
        <img v-if="isRead" src="../assets/img/select_ed.png" class="icon">
        <img v-else src="../assets/img/select.png" class="icon">
        我已阅读口罩购买说明
      </div>
      <img v-if="isRead" src="../assets/img/btn_confirm_ed.png" alt="确认" class="btn_confirm">
      <img v-else src="../assets/img/btn_confirm.png" alt="确认"  class="btn_confirm">
    </div>
    <div class="chainInfo">
      <div class="title">上链信息</div>
      <div class="chainList">
        <div class="scroll-title">
          <div>已承诺用户</div>
          <div>上链哈希</div>
        </div>
        <scroll :data="list" class="scroll" :class-option="option">
          <div class="list">
            <div v-for="(item,index) in list" :key="index" class="item">
              <p>{{item.name|filterName}}</p>
              <p>{{item.hash}}</p>
            </div>
          </div>
        </scroll>
      </div>
    </div>
  </div>
</template>

<script>
import scroll from 'vue-seamless-scroll'
export default {
  components: {
    scroll
  },
  data () {
    return {
      isRead: false,
      option: {
        hoverStop: false
      },
      list: [{
        name: '杨金伟',
        hash: '32838dngnks0439484ieitueiowfuiai32838dngnks0439484ieitueiowfuiai'
      }, {
        name: '杨金伟',
        hash: '32838dngnks0439484ieitueiowfuiai32838dngnks0439484ieitueiowfuiai'
      }, {
        name: '杨金伟',
        hash: '32838dngnks0439484ieitueiowfuiai32838dngnks0439484ieitueiowfuiai'
      }, {
        name: '杨金伟',
        hash: '32838dngnks0439484ieitueiowfuiai32838dngnks0439484ieitueiowfuiai'
      }, {
        name: '杨金伟',
        hash: '32838dngnks0439484ieitueiowfuiai32838dngnks0439484ieitueiowfuiai'
      }, {
        name: '杨金伟',
        hash: '32838dngnks0439484ieitueiowfuiai32838dngnks0439484ieitueiowfuiai'
      }, {
        name: '杨金伟',
        hash: '32838dngnks0439484ieitueiowfuiai32838dngnks0439484ieitueiowfuiai'
      }, {
        name: '杨金伟',
        hash: '32838dngnks0439484ieitueiowfuiai32838dngnks0439484ieitueiowfuiai'
      } ]
    }
  },
  created () {}
}
</script>

<style lang="less">
.tip {
  .back {
    width: 100%;
    height: 217px;
    z-index: -1;
    background-image: url("../assets/img/tip_back.png");
    background-size: cover;
  }
  .notice {
    display: flex;
    flex-direction: column;
    width: 355px;
    height: 260px;
    margin: -110px auto 0;
    z-index: 1;
    background: rgba(255, 255, 255, 1);
    border-radius: 5px;
    padding: 20px 19px 18px 16px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    .title {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 17px;
      font-weight: bold;
      color: rgba(50, 50, 50, 1);
      .icon {
        width: 3px;
        height: 17px;
        background: rgba(234, 77, 73, 1);
        margin-right: 9px;
      }
    }
    p {
      font-size: 14px;
      color: rgba(102, 102, 102, 1);
      margin-top: 16px;
      &:first-of-type {
        margin-top: 21px;
      }
    }
    .read{
      margin-top: 15px;
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size:10px;
      color:rgba(153,153,153,1);
      .icon{
        width: 12px;
        height: 12px;
        margin-right: 5px;
        cursor: pointer;
        -webkit-tap-highlight-color:transparent;
      }
    }
    .btn_confirm{
      width: 95px;
      height: 41px;
      align-self: flex-end;
      cursor: pointer;
      -webkit-tap-highlight-color:transparent;
    }
  }
  .chainInfo{
    margin: 14px auto 17px;
    width: 355px;
    .title{
      font-size:17px;
      font-weight:bold;
      color:rgba(50,50,50,1);
    }
    .chainList{
      width:100%;
      height:229px;
      margin-top: 15px;
      background:rgba(255,244,244,1);
      border-radius:5px;
      padding: 0 10px 16px;
    }
    .scroll-title{
      display: grid;
      grid-template-columns: 3fr 5fr;
      grid-auto-rows: 38px;
      align-items: center;
      padding: 0 16px 0 14px;
      div{
        font-size:14px;
        color:rgba(51,51,51,1);
      }
    }
    .scroll{
      width:335px;
      height:176px;
      background:rgba(255,255,255,1);
      border-radius:5px;
      overflow: hidden;
      pointer-events:none;
      .list{
        height:176px;
        overflow: hidden;
        padding: 0 16px 0 14px;
        .item{
          overflow: hidden;
          display: grid;
          grid-template-columns: 3fr 5fr;
          grid-auto-rows: 30px;
          align-items: center;
          p{
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            font-size:12px;
            color:rgba(102,102,102,1);
          }
        }
      }
    }
  }
}
</style>
