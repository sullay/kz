<template>
  <div class="tip">
    <el-dialog
      :visible.sync="dialogInfo.isShow"
      width="299px"
      :show-close="false"
      center>
      <template v-slot:title>
        <div class="dialog-title">口罩购买须知</div>
      </template>
      <div class="dialog-content">
        <p>本人承诺：购买口罩只自用，不得抬价转卖；用完后按照卫生部门有关指引进行处理，不造成二次污染。如违反承诺，将接受被全链公告。</p>
        <p>本承诺及交易记录，由畅物链和蚁米卓启云链，进行分布式存证和全链追踪。</p>
        <div class="dialog-read" @click="isRead=!isRead">
          <img v-if="isRead" src="../assets/img/select_ed.png">
          <img v-else src="../assets/img/select.png">
          我已阅读口罩购买说明
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <button @click="dialogInfo.isShow=false">返回</button>
        <button @click="toShop">我承诺</button>
      </span>
    </el-dialog>
    <div class="back" />
    <div class="shopList" :class="{'isPackUp':isPackUp}">
      <img src="../assets/img/img_title.png" class="img-title">
      <div class="title">
        <div class="title_icon"/>
        <span>防护用品</span>
      </div>
      <div class="category">口罩品类</div>
      <div class="shopList-box">
        <div class="shop" v-for="(shop,index) in shopList" :key="index" @click="showDialog(shop.url)">
          <img :src='shop.img'>
          <p>{{shop.name}}</p>
        </div>
      </div>
      <div class="bottom" @click="isPackUp=!isPackUp">
        <template v-if="isPackUp" >
          <img src="../assets/img/icon_bottom.png">
          展开
        </template>
        <template v-else>
          <img src="../assets/img/icon_top.png">
          收起
        </template>
      </div>
    </div>
    <div class="chainInfo">
      <img src="../assets/img/img_title.png" class="img-title">
      <div class="title">
        <div class="title_icon"/>
        <span>上链信息</span>
        <span>卓启云链提供技术支持</span>
      </div>
      <div class="scroll-title">
        <div>已承诺用户</div>
        <div>上链哈希</div>
      </div>
      <scroll :data="list" class="scroll" :class-option="option">
        <div class="list">
          <div v-for="(item,index) in list" :key="index" class="item">
            <p>{{item.userName}}</p>
            <p>{{item.hash}}</p>
          </div>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import scroll from 'vue-seamless-scroll'
import { mapActions } from 'vuex'
export default {
  components: {
    scroll
  },
  data () {
    return {
      isPackUp: true,
      isRead: false,
      dialogInfo: {
        isShow: false,
        url: ''
      },
      option: {
        hoverStop: false
      },
      list: [],
      shopList: [{
        img: require('../assets/img/shop-01.png'),
        name: '日本摩尔斯系列N99口罩',
        url: 'https://www.qioku.com/mobile/index.php?m=goods&id=4446&u=284'
      }, {
        img: require('../assets/img/shop-02.png'),
        name: '日本大创小脸型三层防护口罩',
        url: 'https://www.qioku.com/mobile/index.php?m=goods&id=4452&u=284'
      }, {
        img: require('../assets/img/shop-03.png'),
        name: '日本大创防护立体口罩',
        url: 'https://www.qioku.com/mobile/index.php?m=goods&id=4459&u=284'
      }, {
        img: require('../assets/img/shop-04.png'),
        name: 'Honeywell H8001 N95标准口罩',
        url: 'https://www.qioku.com/mobile/index.php?m=goods&id=4447&u=284'
      }, {
        img: require('../assets/img/shop-05.png'),
        name: '日本大创防护立体口罩(20个)',
        url: 'https://www.qioku.com/mobile/index.php?m=goods&id=4458&u=284'
      }, {
        img: require('../assets/img/shop-06.png'),
        name: '日本大创防护口罩（7个）',
        url: 'https://www.qioku.com/mobile/index.php?m=goods&id=4453&u=284'
      }, {
        img: require('../assets/img/shop-07.png'),
        name: '日本skater4-10岁儿童口罩（30个）',
        url: 'https://www.qioku.com/mobile/index.php?m=goods&id=4454&u=284'
      }, {
        img: require('../assets/img/shop-08.png'),
        name: '日本skater4-10岁儿童口罩(10个)装',
        url: 'https://www.qioku.com/mobile/index.php?m=goods&id=4456&u=284'
      }, {
        img: require('../assets/img/shop-09.png'),
        name: '韩国KF94口罩',
        url: 'https://www.qioku.com/mobile/index.php?m=goods&id=4450&u=284'
      }, {
        img: require('../assets/img/shop-10.png'),
        name: '韩国KF94口罩(单)',
        url: 'https://www.qioku.com/mobile/index.php?m=goods&id=4449&u=284'
      }, {
        img: require('../assets/img/shop-11.png'),
        name: '韩国3M(8812K)口罩',
        url: 'https://www.qioku.com/mobile/index.php?m=goods&id=4448&u=284'
      }, {
        img: require('../assets/img/shop-12.png'),
        name: 'sanrio1-3岁儿童口罩',
        url: 'https://www.qioku.com/mobile/index.php?m=goods&id=4451&u=284'
      }, {
        img: require('../assets/img/shop-13.png'),
        name: '日本skater1-3岁儿童口罩（20个）',
        url: 'https://www.qioku.com/mobile/index.php?m=goods&id=4455&u=284'
      }, {
        img: require('../assets/img/shop-14.png'),
        name: '日本skater1-3岁儿童口罩',
        url: 'https://www.qioku.com/mobile/index.php?m=goods&id=4457&u=284'
      }]
    }
  },
  created () {
    this.getHashList({}).then(res => {
      if (res.data.code === 200) {
        this.list = res.data.data.list
      }
    })
  },
  methods: {
    ...mapActions(['getHashList']),
    showDialog (url) {
      this.isRead = false
      this.dialogInfo.url = url
      this.dialogInfo.isShow = true
    },
    toShop () {
      if (!this.isRead) {
        return
      }
      this.dialogInfo.isShow = false
      window.location.href = this.dialogInfo.url
    }
  }
}
</script>

<style lang="less">
.tip {
  min-height: 100vh;
  .back {
    width: 100%;
    height: 217px;
    z-index: -1;
    background-image: url("../assets/img/tip_back.png");
    background-size: cover;
  }
  .shopList{
    width: 355px;
    height: auto;
    background:rgba(255,255,255,1);
    border-radius:12px;
    position: relative;
    margin: 15px auto 0;
    padding: 18px 16px 35px;
    &.isPackUp{
      height:322px;
      overflow: hidden;
    }
    .img-title{
      position: absolute;
      top: -15px;
      left: 0;
      width: 100%;
      height: 90px;
    }
    .title{
      height: 17px;
      display: flex;
      align-items: flex-end;
      .title_icon{
        width:3px;
        height:17px;
        background:rgba(234,77,73,1);
        border-radius:2px;
      }
      span{
        margin-left: 9px;
        font-size:17px;
        font-weight:bold;
        color:rgba(50,50,50,1);
      }
    }
    .category{
      margin: 19px 0 10px;
      font-size:14px;
      color:rgba(50,50,50,1);
    }
    .shopList-box{
      width: 100%;
      height: auto;
      display: grid;
      grid-template-columns: repeat(3,1fr);
      grid-auto-rows: 101px;
      gap: 16px 21px;
      .shop{
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
          height: 68px;
          width: 68px;
        }
        p{
          font-size:12px;
          color:rgba(50,50,50,1);
          text-align: center;
          word-break: break-all;
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      }
    }
    .bottom{
      position: absolute;
      left: 0px;
      bottom: 0px;
      width:355px;
      height:19px;
      background:rgba(200,195,195,1);
      border-radius:0px 0px 12px 12px;
      font-size:10px;
      color:rgba(254,254,254,1);
      text-align: center;
      line-height: 19px;
      img{
        width: 10px;
        height: 8px;
        margin-right: 1px;
      }
    }
  }
  .chainInfo{
    width:355px;
    height:269px;
    background:rgba(255,255,255,1);
    border-radius:10px 12px 12px 12px;
    position: relative;
    margin:  20px auto 18px;
    padding: 20px 17px 16px;
    .img-title{
      position: absolute;
      top: -15px;
      left: 0;
      width: 100%;
      height: 90px;
    }
    .title{
      height: 17px;
      display: flex;
      align-items: flex-end;
      .title_icon{
        width:3px;
        height:17px;
        background:rgba(234,77,73,1);
        border-radius:2px;
      }
      span{
        margin-left: 9px;
        font-size:12px;
        font-weight:400;
        color:rgba(153,153,153,1);
        &:first-of-type{
          font-size:17px;
          font-weight:bold;
          color:rgba(50,50,50,1);
        }
      }
    }
    .scroll-title{
      display: grid;
      grid-template-columns: 3fr 5fr;
      gap: 0 10px;
      grid-auto-rows: 38px;
      align-items: center;
      padding: 0 16px 0 14px;
      div{
        font-size:14px;
        color:rgba(51,51,51,1);
      }
    }
    .scroll{
      width:322px;
      height:176px;
      background:rgba(255,244,244,1);
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
          grid-gap: 0 10px;
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
  .el-dialog{
    border-radius:12px;
    .dialog-title{
      width: 145px;
      height: 17px;
      font-size:17px;
      font-weight:bold;
      color:rgba(50,50,50,1);
      line-height: 17px;
      text-align: center;
      margin: 0 auto;
      background-image: url('../assets/img/title_back.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
    .el-dialog__body{
      padding-top: 0px;
      padding-bottom: 10px;
    }
    .dialog-content{
      p{
        margin-top: 15px;
        font-size:14px;
        color:rgba(102,102,102,1);
        line-height:21px;
      }
      .dialog-read{
        font-size:11px;
        color:rgba(153,153,153,1);
        line-height:14px;
        margin-top: 10px;
        img{
          width: 12px;
          height: 12px;
          margin-right: 5px;
        }
      }
    }
    .dialog-footer{
      button{
        width:95px;
        height:34px;
        text-align: center;
        line-height: 34px;
        border:1px solid rgba(234,77,73,1);
        border-radius:4px;
        font-size:18px;
        font-weight:500;
        color:rgba(234,77,73,1);
        background-color: white;
        &:last-of-type{
          margin-left: 19px;
          background-color: rgba(234,77,73,1);
          color: white;
        }
      }
    }
  }
}
</style>
