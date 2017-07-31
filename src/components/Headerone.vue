<template>
	<div class="headerone" @click="outhide">
    <div class="headertop">
      <p @click="go">分类</p>
      <h3>七彩鲜花</h3>
      <p @click="outshow"><span>菜单</span><img src="static/home/mlogo_r.png" alt=""></p>
    </div>
    <menushow v-show="hide"></menushow>
  </div>
  
</template>
<script>
import menushow from './menu'
export default {
  name: 'headerone',
  data () {
    return {
      hide:false
    }
  },
  components:{
    menushow
  },
  methods:{
    go(){
      this.$router.push("classify");
    },
    outshow(e){
      e.stopPropagation();
      this.hide=!this.hide;
    },
    outhide(e){
      e.stopPropagation();
      this.hide=false;
    }
  }
  
}
</script>
<style scoped>
.block{
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 40px;
  z-index: 1000;
}
.headertop{
    top: 0;
    width: 100%;
    height: 40px;
    background: #DC1431;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
  }
  .headertop p:nth-child(1){
    margin-left: 3%;
  }
  .headertop p:nth-child(3){
    width: 20%;
    display: flex;
    align-items: center;
  }
  .headertop h3{
    font-weight: normal;
  }
  .headertop img{
    width: 50%;
  }
</style>