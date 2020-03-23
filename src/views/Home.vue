<template>
  <div class="home">
    <router-link to='/deploy'>123</router-link>
    <h2>演示演示样式</h2>
    <div class="example-3d">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="item in list" :key="item"><span>{{item}}</span></swiper-slide>
        <div class=" swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
     </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8],
      swiperOptions: {
        effect: 'coverflow',
        // grabCursor: true,
        // centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: -30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted () {
    console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>
<style lang="less">
.home {
  width: 100%;
  height: 100%;
  background-image: url(../assets/bg.png);
  h2 {
    font-size: 81px;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    padding-top: 60px;
  }
  .swiper-button-next{
    background: url(../assets/next.png);
    background-size:auto;
    background-repeat:no-repeat;
    background-position: center;
    width:50px;
    height:97px;
    margin-left: 50px;
    background-color:rgba(0,255,255,0.1);
  }
 .swiper-button-next:after{
   content: '';
 }
 .swiper-button-prev:after{
   content: '';
 }
 .swiper-button-prev{
    background-size:auto;
    background-repeat:no-repeat;
    background-position: center;
    width:50px;
    height:97px;
    background-color:rgba(0,255,255,0.1);
    background-image: url(../assets/prve.png);
 }
  .swiper-container {
    height: 388px;
    width: 1100px;
    margin-top: 158px;
    overflow: hidden;
    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 322px;
      height: 388px;
      text-align: center;
      font-weight: bold;
      background-position: center;
      background-size: cover;
      background-image: url(../assets/bg1.png);
      background-size:auto;
      background-repeat: no-repeat;
      margin-left: 25px;
      margin-right: 25px;
      span{
        font-size:81px;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(255,255,255,1);
        background:linear-gradient(0deg,rgba(32,253,250,1) 0%, rgba(255,255,255,1) 100%);
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
      }
    }
  }
}
</style>
