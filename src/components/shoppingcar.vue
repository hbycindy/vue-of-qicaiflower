<template>
  <div class="shoppingcar">
  	<headerthree></headerthree>
    <searchbar></searchbar>
    <div class="onething" >
      <ul v-for="(item,index) in arr">
        <li >
          <div class="imgred"><img :src="item.img" alt=""></div>
          <div class="introp">
            <p>名称：{{item.name}}</p>
            <p>数量：<button class="minus" @click="item.num<2 ?item.num=1:item.num--,plus()">-</button><span v-model="num">{{item.num}}</span><button class="plus" @click="item.num++,plus()">+</button></p>
            <p>附加：</p>
            <p>价格：{{item.price}}</p>
          </div>
          <button class="cancel" @click="remove(index)">删除商品</button>
        </li>
      </ul>
      <div>
        <p class="money">应付总额：<span v-model="total">{{total}}</span></p>
        <p class="go" @click=goOn><button>继续购物</button><button>下一步</button></p>
      </div>
    </div>
  </div>
</template>
<script>
import headerthree from './Headerthree'
import searchbar from './line'
import {setCookie,getCookie} from '../assets/js/cookie.js'
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'shoppingcar',
  data () {
    return {
      num:"1",
      total:"0",
      uid:"",
      arr:"",
      gai0:"",
      obj:[]
    }
  },
  created(){
    this.uid=getCookie("uid") 
    axios.get("http://localhost:6500/uselogin/"+this.uid).then((res)=>{
      console.log(res.data)
          //将获取的ID值输给数组
          this.arr=JSON.parse(res.data.product);
          // 调用计算总价格的方法，计算价格
          this.plus()
          // 如果报错打印
       }).catch(function(err){
        console.log(err)
       });
  },
  methods:{
     remove(index){
       //拼接字符串将要删除的产品的ID找到
      delete this.arr[index];
      //调用this.gai的方法将新数组传过去
      this.gai(this.arr);
      //从新计算价格
      this.plus() 
     
      
    } ,
    plus(index){
     // 设置一个变量
        var  a = 0;
        // for in 遍历数组
        for (var i in this.arr) { 
          // 将数组中的数量*单价得出总价
          a += this.arr[i].num * this.arr[i].price;
        }
        // 给总价保留两位小数
        this.total =a.toFixed(2);
        // 调用gai 的方法将新数据上传
        this.gai(this.arr);
    },
    // 改变后的方法
    gai(tt) {
        //  JSON.stringify(）是从一个对象解析出JSON字符串
        this.gai0 = JSON.stringify(tt);
        //修改 后将值传到对应ID 第一个参数是路径  第二个参数是要传的对象
        axios.put("http://localhost:6500/uselogin/" + this.uid, {
          product: this.gai0
        }).then((res) => {
          console.log("成功");
          this.aa()
        }, function (err) {
          console.log("错误" + err)
        });
      },
      aa() {
        axios.get("http://localhost:6500/uselogin/" + this.uid).then((res) => {
          //从json对象中解析出json字符串
          this.arr = JSON.parse(res.data.product);
        })

      },
      //下一页
      goOn(){
        this.$router.push('/home');
      }

  },
  components:{
    headerthree,
    searchbar
  }
}
</script>
<style scope>
.shoppingcar{
  width: 100%;
  height: 665px;
  background: white;
}
.onething{
  width: 100%;
  text-align: left;
}
  .onething ul{
    width: 95%;
    margin-left: 2.5%;
    text-align: left;
  }
  .onething li{
    text-align: left;
  }
  .onething li:nth-child(1){
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
    margin-bottom: 10px;
    padding-bottom: 10px;
  }
  .imgred{
    width: 80px;
    height: 80px;
    border: 1px solid red;
  }
  .imgred img{
    width: 100%;
  }
  .introp{
    margin-left: 10px;
  }
  .cancel{
    width: 70px;
    height: 30px;
    background: red;
    color: white;
    margin-left: 20%;
    border: none;
    outline: none;
  }
  .onething li:nth-child(2){
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: right;
    margin-right: 30px;
    background: #eee;
    margin-bottom: 30px;
  }
  .onething li:nth-child(3) button{
    outline: none;
    border: none;
    width: 45%;
    height: 35px;
    margin-left: 3%;
  }
  .plus{
    width: 28px;
    height: 25px;
  }
  .minus{
    width: 28px;
    height: 25px;
  }
</style>