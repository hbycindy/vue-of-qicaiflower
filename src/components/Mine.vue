<template>
  <div class="mine">
    <headerfour></headerfour>
    <div class="logpassword">
    <div><button>手机号+密码登录</button><button>手机号+验证码登录</button></div>
    <div><input type="text" placeholder="请输入手机号" v-model="username"></div>
    <div><input type="password" placeholder="请输入密码"  v-model="password"></div>
    <div><input type="text" placeholder="请输入验证码" v-model="testword">|<button type="button" @click="test">{{str}}</button></div>
    <div><span></span><span>一个月内免登录</span></div>
    <button class="logone" @click="login">登录</button>
    <div>
      <router-link to=""><a href="">找回密码</a></router-link>
      <router-link to="/register"><a href="">免费注册</a></router-link>
    </div>
  </div>
  <div class="showboard" v-show="board"><p>{{msg}}</p><button @click="closeBoard">关闭</button></div>
  </div>
  
</template>

<script>
import headerfour from './Headerfour'
import {setCookie,getCookie} from '../assets/js/cookie.js'
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'mine',
  data () {
    return {
      msg: '',
      board:false,
      username: '',
      password: '',
      testword:'',
      newUsername: '',
      newPassword: '',
      userlist:{},
      str:"1c3y"
    }
  },
  methods:{
    closeBoard(){
      this.board=false;
    },
    login(){
      var that=this;
      var reg=/^1[3|5|8|7][0-9]{9}$/;
      //密码正则不能为纯数字或字母
      var regExp = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
      if(this.username == ""){
        this.msg="请输入手机号";
        this.board = true;
      }else
      if(!reg.test(this.username)){
        this.msg="手机号格式错误";
        this.board = true;
      }else
      if(this.password == ""){
        this.msg="请输入密码"
        this.board = true
      }else
      if(!regExp.test(this.password)){
        this.msg="密码格式错误"
        this.board = true
      }else
      if(this.testword == ""){
        this.msg="请输入验证码"
        this.board = true;
      }else
      if(this.username == "" || this.password == ""){
        alert("请输入用户名或密码")
      }else{
            let data = {'username':this.username,'password':this.password}
            /*接口请求*/
            console.log(data.username)
            var _that=that;
            axios.post('http://localhost:6500/uselogin/login',data).then((res)=>{
               console.log(data.username)
              _that.userlist=res.data;
                  setCookie('username',this.username,1000*60)
                  setTimeout(function(){
                      _that.$router.push('/afterlog')
                  }.bind(_that),1000)
              // }
          }).catch(function (err) {
            _that.msg = "该用户或密码不存在";
            _that.board = true
      console.log(err);
    })
      }
    },
//获取验证码
    test(){
      var codeStr ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      var that=this;
      function getRandom(n, m) {
        n = Number(n);       //转换n,m，结果不是数字就是NaN
        m = Number(m);
        if (isNaN(n) || isNaN(m)) {     //判断n,m,是不是有效数字，如果n或m其中一个传入的不是数字
          return Math.random();      //返回 【0-1）之间的随机小数
        }
        if (n > m) {             //如果n大于m，则交换位置
          var temp = n;
          n = m;
          m = temp;
        }
        return Math.round(Math.random() * (m - n) + n);          //返回，取m,n之间的随机整数。
    }
    function getCode() {     
        that.str = "";　　　　　　　　//定义一个空字符串备用
        for (var i = 0; i < 4; i++) {    //遍历4个索引
          var ran = getRandom(0, 61);      //调用getRandom方法，随机获取一个索引0-61里的随机索引
         that.str +=codeStr.charAt(ran);      //把codeStr字符串里，我们指定获取ran（这个4个索引）；
        }
    }
    getCode();
    }
  },
  components:{
    headerfour,
    // logpassword
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
  .showboard{
    width: 70%;
    height: 150px;
    line-height: 80px;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 30%;
    left: 15%;
    color: white;
  }
  .showboard button{
    width: 70px;
    height: 30px;
    background: gray;
    color: white;
    border: none;
    outline: none;
  }
</style>
