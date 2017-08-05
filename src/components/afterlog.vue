<template>
<div class="afterlog" @click="outhide">
   <div class="headertop">
    <img src="static/home/mlogo.png" alt="" @click='back'>
    <h3>我的七彩</h3>
    <p @click="outshow"><span>菜单</span><img src="static/home/mlogo_r.png" alt=""></p> 
  </div> 
  <linebar></linebar>
  <div class="a-header">
  	<ul >
  		<li v-for="item in users"><img src="static/class/usertouxiang.png" alt=""><p>{{item}}</p><img src="static/class/edituser.png" alt=""></li>
  		<li><button>当前积分：<span>100</span></button><button>虚拟货币：<span>0</span></button></li>
  	</ul>
  </div>

</div>
</template>
<script>
import {setCookie,getCookie} from '../assets/js/cookie.js'
import linebar from './line'
export default{
	name: 'afterlog',
	data () {
    return {
       hide:false,
       username: '',
       users:[]
    }
  },
   mounted(){
  /*页面挂载获取cookie，如果存在username的cookie，将cookie推入数组，进行渲染页面*/
    if(getCookie('username')){
        // this.$router.push('/home')
        this.users.push(getCookie('username'));
        console.log(this.users.join());
        console.log(this.users);
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
  	linebar
  }
}
</script>
<style>
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
  .a-header{
  	width: 100%;
  	background: #BDC6A9;
  	text-align: left;
  	padding-top: 15px;
  }
  .a-header ul{
  	width: 90%;
  	margin-left: 5%;
  	text-align: left;
  }
  .a-header ul li{
  	text-align: left;
  }
  .a-header ul li:nth-child(1){
  	display: flex;
  	align-items: center;
  }
  .a-header ul li:nth-child(2){
  	display: flex;
  	justify-content: space-between;
  	margin-top: 20px;
  }
  .a-header img:nth-child(1){
  	width: 25%;
  	height: 25%;
  }
  .a-header img:nth-child(3){
  	width: 8%;
  	height: 8%;
  	margin-left: 5px;
  }
  .a-header p{
  	margin-left: 15px;
  }
  .a-header button{
  	outline: none;
  	border: none;
  	width: 45%;
  	height: 30px;
  	color: white;
  	border-radius: 35px;
  }
  .a-header button:nth-child(1){
  	background: #F5BE01;
  }
  .a-header button:nth-child(2){
  	background: #FF8448;
  }
</style>