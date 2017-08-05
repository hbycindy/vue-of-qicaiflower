<template>
  <div class="shopping">
  	<headerthree></headerthree>
    <searchbar></searchbar>
    <div class="beforeshop">
      <img src="static/shopping/cart_kong.png" alt="">
      <h4>购物车还是空的，去挑几件中意的商品吧</h4>
     <button @click="newPage">开始购物</button>
    </div>
  </div>
</template>
<script>
import headerthree from './Headerthree'
import searchbar from './line'
export default {
  name: 'shopping',
  methods:{
    newPage(){
      this.show=false;
      this.hide=true;
      this.$router.push('/home')
    }
  },
  components:{
    headerthree,
    searchbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shopping{
  background: white;
}
  .beforeshop{
    width: 100%;
    height: 580px;
    background: white;
  }
  .beforeshop img{
    padding-top: 50px;
  }
  .beforeshop h4{
    padding-top: 40px;
  }
  .beforeshop button{
    width: 90%;
    height: 35px;
    background: #FD4B4B;
    margin-top: 40px;
    border: none;
    outline: none;
    color: white;
    font-size: 14px;
  }
  .page-thing{

  }
</style>
