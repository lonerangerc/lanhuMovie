<template>
  <div class="waitPay-main">
    <ul class="movies">
      <li v-for="movie in movieList" :key="movie.id">
        <p class="movie-top clearfix">
          <span class="cinema">万达国际影城 ></span>
          <span class="finish">待评价</span>
        </p>
        <div class="movie-main clearfix">
          <img :src="'https://images.weserv.nl/?url='+movie.images.small" alt>
          <div class="text">
            <div class="movie-title">
              {{movie.title}}
              <span class="num">2张</span>
            </div>
            <div class="time">05月16日 17:00</div>
            <div class="place">5号厅 5排14座</div>
          </div>
        </div>
        <p class="totalPrice">总价: 70元</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'waitPay.vue',

  data () {
    return {
        movieList: []
    }
  },
  created() {
      axios
      .get("http://59.110.138.169/api/douban/movie/in_theaters")
      .then(res => {

        this.movieList = res.data.data.slice(0, 3);
      });
  },

  methods: {}
}
</script>

<style lang='scss' scoped>
    .waitPay-main {
   margin-top: 20px;
  .movies {
    li {
      width: 335px;
      margin-left: 20px;
      padding: 0 15px;
      box-sizing: border-box;
      overflow: hidden;
      height: 161px;
      background: rgba(51, 54, 61, 1);
      border-radius: 6px;
      margin-bottom: 20px;
      text-align: left;
      .movie-top {
        color: #fff;
        height: 14px;
        margin: 15px 0;
        font-size: 14px;
        .cinema {
          float: left;
        }
        .finish {
          float: right;
        }
      }
      .movie-main {
        width: 100%;
        height: 80px;
        font-size: 14px;
        color: #fff;
        img {
            float: left;
          width: 70px;
          height: 80px;
        }
        .text {
            float: left;
            width: 190px;
            margin-left: 15px;
          .movie-title {
              margin-top: 15px;
            .num {
               float: right;
              margin-right: 40px;
            }
          }
          
          .time,
          .place {
            font-size: 12px;
            color: #696b70;
          }
          .time {
              margin: 8px 0;
          }
        }
       
      }
       .totalPrice {
             font-size: 12px;
            color: #696b70;
            margin-top: 10px;
        }
    }
  }
}
</style>
