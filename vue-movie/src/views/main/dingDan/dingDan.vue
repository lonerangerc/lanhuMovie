<template>
  <div class="dingDan-main">
    <div class="header-bar">
      <div class="header-top">
        <router-link to="/main"><span class="back">&lt;</span></router-link>
        <span class="title">我的订单</span>
        <span class="edit">编辑</span>
      </div>
      <ul class="nav clearfix">
        <li class="item">
          <router-link :to="{name: 'all'}">全部<span class="line"></span> </router-link>
        </li>
        <li class="item">
          <router-link :to="{name: 'waitPay'}">待付款<span class="line"></span> </router-link>
        </li>
        <li class="item">
          <router-link :to="{name: 'waitComment'}">待评价<span class="line"></span> </router-link>
        </li>
        <li class="item">
          <router-link :to="{name: 'refund'}">退款<span class="line"></span> </router-link>
        </li>
      </ul>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "dingDan",

  data() {
    return {
        movieList: []
    };
  },
  created() {
      console.log('aaa');
      
      axios.get('http://59.110.138.169/api/douban/movie/coming_soon')
      .then(res=>{
          this.movieList = res.data.data.slice(0,8)
          
      })
  },

  methods: {}
};
</script>

<style lang='scss' scoped>
.dingDan-main {
  .header-bar {
    .header-top {
      padding: 10px 20px 0;
      height: 60px;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 16px;
      color: rgba(255, 255, 255, 1);
      .back {
          font-size: 20px;
           color: rgba(255, 255, 255, 1);
      }
      .title {
        margin-left: 30px;
      }
      .edit {
        width: 42px;
        color: rgba(249, 195, 74, 1);
        height: 20px;
        line-height: 20px;
        border-radius: 2px;
        border: 1px solid rgba(249, 195, 74, 1);
      }
    }
    .nav {
      display: flex;
      margin-bottom: 10px;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      padding: 0 20px;
      
      .item {
        float: left;
        position: relative;
         .router-link-exact-active {
         
               color:  #F9C34A;
      }
        a {
            color: rgba(255, 255, 255, 1);
        }
         .line {
             position: absolute;
             display: none;
             width: 60%;
             height: 2px;
             background-color: #F9C34A;
             bottom: -10px;
             left: 50%;
             margin-left: -30%;
         }
         .router-link-exact-active .line {
             display: block;
         }
      }
     
    }
  }
}
</style>
