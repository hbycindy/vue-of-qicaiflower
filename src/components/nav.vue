<template>
  <div class="nav">
    <swiper :options="swiperOption"  ref="mySwiper">  
        <!-- 这部分放你要渲染的那些内容 -->  
        <swiper-slide v-for="item in items"> 
          <img :src="item.src"> 
        </swiper-slide>  
        <!-- 这是轮播的小圆点 -->  
        <div class="swiper-pagination" slot="pagination"></div>  
    </swiper>  
  </div>
</template>

<script>
export default {
  name: 'nav',
  data () {
    return {
       swiperOption: {  
      //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true  
      notNextTick: true,  
      pagination: '.swiper-pagination',  
      slidesPerView: 'auto',  
      centeredSlides: true,  
      paginationClickable: true,  
      autoplay: 2000,
      spaceBetween: 30,  
          onSlideChangeEnd: swiper => {  
              //这个位置放swiper的回调方法  
              this.page = swiper.realIndex+1;  
              this.index = swiper.realIndex;  
          }  
      },
      items:[
        {src:"static/home/m_banner1.jpg"},
        {src:"static/home/m_banner5.jpg"},
        {src:"static/home/m_banner6.jpg"},
        {src:"static/home/m_banner10.jpg"}
      ] 
    }
  },
  computed: {  
            swiper() {  
              return this.$refs.mySwiper.swiper;  
            }  
        },  
        mounted () {  
            //这边就可以使用swiper这个对象去使用swiper官网中的那些方法  
            // this.swiper.slideTo(0, 0, false);  
        }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    padding: 0;margin: 0;
  }
  .nav{
    width: 100%;
  }
  .nav img{
    width: 100%;
  }
</style>