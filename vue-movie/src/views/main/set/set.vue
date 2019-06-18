<template>
  <div class="set-main">
    <div class="set-top">
        <span class="back">&lt;</span>
        <span class="title">设置</span>
    </div>
    <div class="avater">
        <img src="@/assets/imgs/my/avater.png" alt="">
        <p class="name">yujia1130</p>
    </div>
    
        <div class="safe clearfix"><span class="tex-l">账号与安全</span><span class="tex-r">手机绑定与更换 ></span></div>
        <ul class="set-content">
            <li class="item"><div class="text">被赞提醒</div><div class="btn" @click="changeRad($event,count)"><span class="rad"></span></div></li>
            <li class="item"><div class="text">影评/话题提醒</div><div class="btn" @click="changeRad($event,count)"><span class="rad"></span></div></li>
            <li class="item"><div class="text">系统通知</div><div class="btn" @click="changeRad($event,count)"><span class="rad"></span></div></li>
            <li class="item"><div class="text">系统通知</div><div class="btn" @click="changeRad($event,count)"><span class="rad"></span></div></li>
        </ul>
        <p class="about">关于 <span> ></span></p>
        <button class="leave">退出登录</button>
    </div>
  
</template>

<script>
export default {
  name: 'set',

  data () {
    return {
        count: false
    }
  },

  methods: {
      changeRad(e,count){
          if(e.currentTarget.classList.contains('active')){
              e.currentTarget.classList.remove('active');
          }else {
               e.currentTarget.classList.add('active');
          }        
    //    var items = e.currentTarget.parentNode.parentNode.children;
        //  for(var i = 0; i < items.length; i ++){
            
        //     items[i].children[1].classList.remove('active')
        //  }
            
      }
  }
}
</script>

<style lang='scss' scoped>
    .set-main {
        .set-top {
            padding: 0 20px;
        box-sizing: border-box;
           height: 80px;
           line-height: 80px;
            color: #fff;
            .title {
                margin-right: 10px;
                font-size: 16px;
                
            }
            .back {
                font-size: 20px;
                float: left;
                
            }
        }
        .avater {
            margin-top: 10px;
            .name {
                margin: 20px 0 50px;
            }
        }
        .safe {
            padding: 0 20px;
            box-sizing: border-box;
            font-size: 14px;
            margin-bottom: 20px;
            overflow: hidden;
            .tex-l {
                float: left;
                color: #fff;
            }
            .tex-r {
                color: #AAACAF;
                float: right;
            }
        }
        .set-content {
            padding: 10px 20px 0;
        box-sizing: border-box;
            border-top: 6px solid rgba(51,54,61,1);
            border-bottom: 6px solid rgba(51,54,61,1);
            .item {
                height: 50px;
                &:last-child {
                    height: 40px;
                }
                .text {
                    float: left;
                    margin-top: 10px;
                }
                .btn {
                    float: right;
                    position: relative;
                    width: 43px;
                    height: 26px;
                    border-radius: 26px;
                    background-color: #F27679;
                    transition: all .6s ease-in;
                    &.active .rad{
                        transform: translate(-20px)
                    }
                    .rad {
                        position: absolute;
                        background-color: #fff;
                        right: 0;
                        top: 0;
                        width: 26px;
                        height: 26px;
                        border-radius: 50%;
                    }
                }

            }
        }
        .about {
            text-align: left;
            padding: 0 20px;
            box-sizing: border-box;
            margin: 20px 0 40px;
            color: #fff;
            font-size:14px;
            span {
                float: right;
                font-size: 16px;
            }
        }
        .leave {
            color: #fff;
            width:335px;
            font-size: 18px;
            height:40px;
            background:linear-gradient(150deg,rgba(242,91,134,1) 0%,rgba(241,172,94,1) 100%);
            box-shadow:0px 0px 4px 1px rgba(242,109,125,0.18);
            border-radius:6px;
        }


        
    }
</style>
