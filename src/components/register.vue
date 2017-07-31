<template>
  <div class="register">
    <div><input type="text" placeholder="请输入图片验证码">|<button>1234</button></div> 
    <div><input type="text" placeholder="请输入手机号"><button>获取短信验证码</button></div>
    <div><input type="text" placeholder="请输入短信验证码"></div>
    <div><input type="text" placeholder="请输入姓名"></div>
    <div><input type="password" placeholder="请设置6-20位登录密码"></div>
    <p>注册即视为同意<a href="">《七彩用户注册协议》</a></p>
    <button class="logbtn">注册</button>
  </div>
</template>
<script>
export default {
  name: 'register',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .register{
    width: 95%;
    margin-left: 2.5%;
    margin-top: 5px;
  }
  .register div{
    width: 100%;
    height: 45px;
    border: 1px solid #ccc;
    background: white;
  }
  .register input{
    text-indent: 0.5em;
    outline: none;
    border: none;
  }
  .logbtn{
    width: 100%;
    height: 45px;
    background: #ccc;
    border: none;
  }
</style>
