<template>
  <div class="logpassword">
    <div><button>手机号+密码登录</button><button>手机号+验证码登录</button></div>
    <div><input type="text" placeholder="请输入手机号" v-model="username"></div>
    <div><input type="password" placeholder="请输入密码"  v-model="password"></div>
    <div><input type="text" placeholder="请输入验证码">|<button type="button">123</button></div>
    <div><span></span><span>一个月内免登录</span></div>
    <button class="logone">登录</button>
    <div>
      <router-link to=""><a href="">找回密码</a></router-link>
      <router-link to="/register"><a href="">免费注册</a></router-link>
    </div>
  </div>
</template>

<script>
import {setCookie,getCookie} from '../assets/js/cookie.js'
export default {
  name: 'logpassword',
  data () {
    return {
      msg: '',
      username: '',
      password: ''
    }
  },
   mounted(){
  /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
    if(getCookie('username')){
        this.$router.push('/home')
    }
  },
  methods:{
      register(){
    if(this.newUsername == "" || this.newPassword == ""){
        alert("请输入用户名或密码")
    }else{
        let data = {'username':this.newUsername,'password':this.newPassword}
        this.axios.post('http://localhost:6500/uselogin/login',data).then((res)=>{
            console.log(res)
            if(res.data == "ok"){
                this.tishi = "注册成功"
                this.showTishi = true
                this.username = ''
                this.password = ''
                 /*注册成功之后再跳回登录页*/
                setTimeout(function(){
                    this.showRegister = false
                    this.showLogin = true
                    this.showTishi = false
                }.bind(this),1000)
            }
        })
      }
    }
  },
  
  components:{
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .logpassword {
    width: 95%;
    margin-left: 2.5%;
    margin-top: 10px;
  }
  .logpassword div{
    width: 100%;
    text-align: left;
  }
  .logpassword div:nth-child(1){
    border: 1px solid #FE6C6C;
    border-radius: 5px;
  }
  .logpassword div:nth-child(1) button{
    width: 50%;
    height: 30px;
    border: none;
  }
  .logpassword button:nth-child(1){
    background: #FE6C6C;
    color: white;
  }
  .logpassword button:nth-child(2){
    background: none;

  }
  .logpassword div:nth-child(2){
    border: 1px solid #ccc;
    height: 40px;
    margin-top: 10px;
    background: white;
  }
  .logpassword input{
    width: 75%;
    height: 40px;
    border: none;
    text-indent: 0.5em;
    outline: none;
  }
  .logpassword div:nth-child(3){
    border: 1px solid #ccc;
    height: 40px;
    margin-top: 10px;
    background: white;
  }
  .logpassword div:nth-child(4){
    border: 1px solid #ccc;
    height: 40px;
    margin-top: 10px;
    background: white;
  }
  .logpassword div:nth-child(4) button{
    margin-left: 20px;
    width: 17%;
    height: 30px;
    border: 1px solid #ccc;
    outline: none;
  }
  .logpassword div:nth-child(5){
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .logpassword span:nth-child(1){
    width: 15px;
    height: 15px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 100%;
    margin-right: 5px;
  }
  .logone{
    width: 100%;
    height: 35px;
    outline: none;
    border: none;
    border-radius: 5px;
    color: gray;
    font-size: 16px;
  }
  .logpassword div:last-child{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }
  .logpassword a{
    color: gray;
  }
</style>
