<template>
  <div class="register">
    <div class="headertop" >
      <img src="static/home/mlogo.png" alt="" @click='back'>
      <h3>用户登录</h3>
      <p @click="outshow"><span>菜单</span><img src="static/home/mlogo_r.png" alt=""></p> 
    </div>
    <div class="detail-log">
      <div><input type="text" placeholder="请输入验证码" v-model="testword">|<button class="test" @click="test">{{str}}</button></div> 
      <div><input type="text" placeholder="请输入手机号" v-model="newUsername"></div>
      <div><input type="password" placeholder="请设置6-20位登录密码" v-model="newPassword"></div>
      <p>注册即视为同意<a href="">《七彩用户注册协议》</a></p>
      <button class="logbtn" @click="register">注册</button>
    </div>
    <div class="showboard" v-show="board"><p>{{msg}}</p><button @click="closeBoard">关闭</button></div>
  </div>
  
</template>
<script>
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'register',
  data () {
    return {
      hide:false,
      msg: '1',
      board:false,
      newUsername:'',
      newPassword:'',
      list:{},
      testword:"",
      str:"12ft"
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
      },
      closeBoard(){
        this.board=false;
      },
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
    },
    register(){
      var reg=/^1[3|5|8|7][0-9]{9}$/;
      //密码正则不能为纯数字或字母
      var regExp = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
      if(this.testword == ""){
        console.log(21)
        this.msg="请输入验证码"
        this.board = true;
      }else 
      if(this.testword!=this.str){
        this.msg="验证码错误"
        this.board = true
      }else
      if(this.newUsername == ""){
        this.msg="请输入手机号";
        this.board = true;
      }else
      if(!reg.test(this.newUsername)){
        this.msg="手机号格式错误";
        this.board = true;
      }else
      if(this.newPassword == ""){
        this.msg="请输入密码"
        this.board = true
      }else
      if(!regExp.test(this.newPassword)){
        this.msg="密码格式错误"
        this.board = true
      }
      else{
            let data = {'username':this.newUsername,'password':this.newPassword}
            axios.post('http://localhost:6500/uselogin',data).then((res)=>{
                console.log(data.username)
                this.msg = "注册成功,5秒之后跳转登录页面"
                this.board = true
                this.username = ''
                this.password = ''
                 /*注册成功之后再跳回登录页*/
                setTimeout(function(){
                   this.$router.push('/mine')
                }.bind(this),5000)
            })
          }
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  .detail-log{
    width: 95%;
    margin-left: 2.5%;
    margin-top: 5px;
  }
  .detail-log div{
    width: 100%;
    height: 45px;
    line-height: 45px;
    border: 1px solid #ccc;
    background: white;
    text-align: left;
  }
  .detail-log input{
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
  .test{
    width: 80px;
    height: 30px;
    margin-left: 50px;
    border: none;
    outline: none;
  }
</style>
