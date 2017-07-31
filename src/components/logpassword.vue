<template>
  <div class="logpassword">
    <div><button>手机号+密码登录</button><button>手机号+验证码登录</button></div>
    <div><input type="text" placeholder="请输入手机号"></div>
    <div><input type="password" placeholder="请输入密码"></div>
    <div><input type="text" placeholder="请输入验证码">|<button type="button">123</button></div>
    <div><span></span><span>一个月内免登录</span></div>
    <button class="logone">登录</button>
    <div><a href="">找回密码</a><a href="">免费注册</a></div>
  </div>
</template>

<script>
export default {
  name: 'logpassword',
  data () {
    return {
      msg: ''
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
