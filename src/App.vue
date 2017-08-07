<template>
  <div id="app">
    <router-view></router-view>
    <div id="tabBar">
      <ul >
      <li><router-link to="/home"><img src="./assets/app/footer01.png" alt=""></router-link></li>
      <li><router-link to="/classify"><img src="./assets/app/footer10.png" alt=""></router-link></li>
      <li @click="shopCar"><router-link to=""><img src="./assets/app/footer20.png" alt=""></router-link></li>
      <li><router-link to="/mine"><img src="./assets/app/footer30.png" alt=""></router-link></li>
      <li><router-link to="/help"><img src="./assets/app/footer40.png" alt=""></router-link></li>
    </ul>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
import {setCookie,getCookie} from './assets/js/cookie.js'
export default {
  name: 'app',
  data(){
    return {
      mesg:"分类",
      lists:[],
      ids:[],
      index:"",
      pa:"",
      itemid:{},
      names:[],
      arr:[]
    }
  },
  created(){
     this.uid=getCookie("uid") 
     axios.get("http://localhost:6500/uselogin/"+this.uid).then((res)=>{
      console.log(res.data)
          //将获取的产品信息值输给数组
          this.arr=JSON.parse(res.data.product);    
          console.log(this.arr)   
          // 如果报错打印
       }).catch(function(err){
        console.log(err)
       });
  },
  methods:{
    shopCar(index){
       console.log(this.arr)
          console.log(this.arr)
          if(this.arr==""){
              this.$router.push('/shopping');
            }else if(this.arr!=""){
              console.log(111111)
              this.$router.push('/shoppingcar/:id');
          }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  padding: 0;margin: 0;
}
html,body{
    background: #eee;
  }
ul,a{
  list-style: none;
  text-decoration: none;
}
#tabBar{
  width: 100%;
  height: 50px;
  background: #ccc;
  position: fixed;
  bottom: 0;
}
#tabBar ul{
  width: 90%;
  margin-left: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}
#tabBar ul img{
  width: 65%;
}

</style>
