<template>
	<div class="headerfive" @click="outhide">
	    <div class="headertop">
        <img src="static/home/mlogo.png" alt="" @click='back'>
        <h3>帮助中心</h3>
        <p @click="outshow"><span>菜单</span><img src="static/home/mlogo_r.png" alt=""></p> 
      </div>
      <menushow v-show="hide"></menushow>
  </div>
</template>
<script>
import menushow from './menu'
export default {
  name: 'headerfive',
  data () {
    return {
      hide:false
    }
  },
  methods:{
    back(){
      this.$router.back(-1);
    },
    outshow(e){
      e.stopPropagation();
      this.hide=!this.hide;
    },
    outhide(e){
      e.stopPropagation();
      this.hide=false;
    }
  },
  components:{
    menushow
  }
}
</script>
<style scoped>
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
  .headertop img:nth-child(1){
    width: 10%;
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
  .headertop p img{
    width: 50%;
  }
</style>