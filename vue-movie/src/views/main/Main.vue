<template>
  <div class="main-main">
    <!-- <h1>这是main</h1>
    <v-icon style="color:red;height:30px;" name="sync" spin></v-icon>-->
    <div class="user">
      <div class="user-content">
        <router-link :to="{name: user}">
          <img src="@/assets/imgs/my/avater.png" alt class="avater">
        </router-link>
        <div class="text">
          <p class="name">yujia1130</p>
          <p class="info">V1青铜会员</p>
        </div>
        <div class="arr">></div>
      </div>
      <div class="icon-group">
        <router-link :to="{name: 'set'}"><img src="@/assets/imgs/my/set.png" class="icon-set" alt></router-link>
        <img src="@/assets/imgs/my/chat.png" class="icon-chat" alt>
      </div>
    </div>
    <router-link :to="{name: 'vip'}">
      <div class="vip">
        <span class="center">会员中心</span>
        <span class="money">
          <p>会员中心</p>
          <p>50元通兑券天天送</p>
        </span>
        <img src="@/assets/imgs/my/money.png" alt class="icon-money">
      </div>
    </router-link>
    <div class="my-dingdan">
      <div class="dingdan-head">
        <span class="tex1">我的订单</span>
        <span class="tex2"><router-link :to="{name: 'dingDan'}">全部 ></router-link></span> 
      </div>
      <ul class="icons clearfix">
        <router-link :to="{name: 'all'}">
          <li class="icon">
            <img src="@/assets/imgs/my/icon4.png" alt>
            <p>未消费</p>
          </li>
        </router-link>
        <router-link :to="{name: 'waitPay'}">
          <li class="icon">
            <img src="@/assets/imgs/my/icon1.png" alt>
            <p>代付款</p>
          </li>
        </router-link>
        <router-link :to="{name: 'waitComment'}">
          <li class="icon">
            <img src="@/assets/imgs/my/icon2.png" alt>
           <p>待评价</p> 
          </li>
        </router-link>
        <router-link :to="{name: 'refund'}">
          <li class="icon" >
            <img src="@/assets/imgs/my/icon3.png" alt>
            <p>退款</p> 
          </li>
        </router-link>
      </ul>
    </div>
    <ul class="discount clearfix">
       <router-link :to="{name: ''}"><li class="item">影城会员卡 <span>></span></li> </router-link>
       <router-link :to="{name: ''}"><li class="item">优惠券 <span>></span></li></router-link>
       <router-link :to="{name: ''}"><li class="item">我的收藏 <span>></span></li></router-link>
       <router-link :to="{name: ''}"><li class="item">帮助与反馈 <span>></span></li></router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Main",
  components: {}
};
</script>
<style lang="scss" scoped>
body {
  height: 1000px;
  background-color: #fff;
}
.main-main {
  .user {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 180px;
    background: linear-gradient(
      123deg,
      rgba(242, 94, 133, 1) 0%,
      rgba(241, 166, 97, 1) 100%
    );
    border-radius: 29px;
    opacity: 0.9029;
    .user-content {
      overflow: hidden;
      margin-top: 65px;
      .text {
        float: left;
        margin-left: 10px;
        margin-top: 10px;
        .name {
          font-size: 18px;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          line-height: 25px;
          margin-bottom: 3px;
        }
        .info {
          margin-left: 6px;
          width: 99px;
          height: 23px;
          background: rgba(51, 54, 61, 1);
          border-radius: 5px;
          opacity: 0.7293999999999999;
          font-size: 14px;
          font-weight: 400;
          color: #f5f3f3;
          line-height: 23px;
        }
      }
      .avater {
        float: left;
        margin-left: 15px;
      }
      .arr {
        margin-top: 25px;
        margin-right: 15px;
        float: right;
        font-size: 20px;
        color: #fff;
      }
    }
    .icon-group {
      position: absolute;
      right: 15px;
      top: 30px;
      .icon-set {
        margin-right: 5px;
        margin-bottom: 2px;
      }
    }
  }
  .vip {
    position: absolute;
    text-align: left;
    box-sizing: border-box;
    padding-top: 13px;
    top: 150px;
    left: 20px;
    width: 336px;
    height: 68px;
    background: rgba(51, 54, 61, 1);
    box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.1);
    border-radius: 17px;
    .center {
      display: inline-block;
      margin-left: 30px;
      width: 85px;
      height: 30px;
      font-size: 18px;
      vertical-align: 5px;
      line-height: 20px;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
    }
    .money {
      padding-top: 5px;
      box-sizing: border-box;
      display: inline-block;
      height: 40px;
      border-left: 1px solid rgba(255, 255, 255, 1);
      p {
        margin-left: 15px;
        margin-bottom: 4px;
        width: 100px;
        font-size: 12px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #bfc0c2;
      }
    }
    img {
      margin-left: 50px;
    }
  }
  .my-dingdan {
    margin-top: 60px;
    margin-bottom: 25px;
    overflow: hidden;
    float: left;
    width: 375px;
    height: 137px;
    background: #33363D;
    .dingdan-head {
        overflow: hidden;
         padding: 0 20px;
        margin-top: 20px;
      .tex1 {
          float: left;
        font-size: 18px;
        color: rgba(255, 255, 255, 1);
      }

      .tex2 {
          float: right;
        font-size: 14px;
        a {
            color: rgba(255, 255, 255, 1);
        }
        
      }
    }
    .icons {
        .icon {
            width: 45px;
            
            float: left;

            margin: 25px 1px;
            p {
                font-size: 14px;
                margin-top: 13px;
                color: #bfc0c2;
            }
        &:first-child {
            margin-left: 40px;
        }
        }
    }
  }
  .discount {
      box-sizing: border-box;
      background-color: #33363D;
     
      padding: 0 20px;
      width: 100%;
      height: 216px;
      text-align: left;
      .item {
          width: 100%;
          height: 54px;
          line-height: 54px;
          color:rgba(255,255,255,1);
          font-size: 16px;
          span {
              float: right;
          }
      }
  }
}
</style>

