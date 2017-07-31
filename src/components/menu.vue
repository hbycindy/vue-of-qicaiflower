<template>
  <div class="menu">
    <div class="block" @click="outblock">
        <div><button>登录</button><p>登录后享受更多优惠</p></div>
        <ul>
          <li><img src="static/class/1.png" alt="">商品分类</li>
          <li><img src="static/class/2.png" alt="">订单查询</li>
          <li><img src="static/class/3.png" alt="">订单付款</li>
          <li><img src="static/class/4.png" alt="">常见问题</li>
          <li><img src="static/class/5.png" alt="">最新优惠</li>
          <li><img src="static/class/6.png" alt="">我的七彩</li>
          <li><img src="static/class/7.png" alt="">回到首页</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menu',
  data () {
    return {
      // hide:false
    }
  },
  methods:{
    outblock(e){
      e.stopPropagation();
      e.preventDefault();

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu{
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 40px;
  z-index: 1000;
}
.block{
  width: 49%;
  margin-left: 50%;
}
.block div{
  background: #D7D7D7;
  padding-top: 5px;
}
.block div button{
  background: #F0282D;
  width: 80%;
  height: 30px;
  border: none;
  outline: none;
  color: white;
  font-size: 16px;
}
.block div p{
  font-size: 12px;
}
.block ul{
  background: #F7F7F7;
}
.block ul li{
  height: 35px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.block ul img{
  width: 10%;
  height: 50%;
  margin-left: 20px;
  margin-right: 10px;
}
</style>
