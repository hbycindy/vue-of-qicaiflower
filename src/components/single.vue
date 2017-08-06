<template>
  <div class="single" >
    <headertwo></headertwo>
    <searchbar></searchbar>
  <div>  
    <div class="top">
      <div class="detail-img"><img :src="contents.img1" alt="" ></div>
      <hr>
      <ul>
        <li><p>名称：<span>{{contents.name}}</span></p><p>编号：111111</p></li>
        <li><p>价格：<s>{{contents.s}}</s></p><p><img src="static/class/zhe.png" alt=""><span class="red">{{contents.price}}</span></p></li>
      </ul>
      <hr>
      <div class="detail-btn"><button>加入购物车</button><button>立即购买</button></div>
      <div class="big-img">
        <img :src="contents.b1" alt="">
      </div>
      <div class="intro-product">
        <h3>产品简介</h3>
        <div><p>名称：<span>{{contents.name}}</span></p><p>编号：111111</p></div>
        <p><span>材料：</span>{{contents.cailiao}}</p>
        <p><span>配材：</span>{{contents.peicai}}</p>
        <p><span>物语：</span>{{contents.wuyu}}</p>
        <p><span>说明：</span>{{contents.shuo}}</p>
      </div>
      <div class="intro-product">
        <h3>产品特点</h3>
        <img :src="contents.b2" alt="">
      </div>
      <div class="intro-product">
        <h3>产品实拍</h3>
        <img :src="contents.b3" alt="">
      </div>
    </div>
    <div class="footer">
      <ul>
        <li><img src="static/class/f1.png" alt=""><p>客服</p></li>
        <li @click="toCar"><!-- <router-link :to="contents.pa"> --><img src="static/class/f2.png" alt=""><span class="count" v-show="hide">{{count}}</span><p>购物车</p><!-- </router-link> --></li>
        <li><img src="static/class/f3.png" alt=""><p>电话咨询</p></li>
        <li><button @click="btnCar">加入购物车</button><button>立即购买</button></li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>
import headertwo from './Headertwo'
import searchbar from './line'
import {setCookie,getCookie} from '../assets/js/cookie.js'
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'single',
  data () {
    return {
      singleitems:{},
      ids:[],
      contents:{},
      count:'0',
      hide:false,
      list:[],
      items:[],
      itemid:{},
      total:"",
      num:1,
      index:"",
      obj:{},
      obj1:{},
      arr:[],
      obj2:{},
      uid:"",
      uidd:"",
      arrdataStr:"",
      ttt:{}

    }
  },
  created(){
    var id=this.$route.params.id;
    this.uidd=id;
    // console.log(this.$route.params.id-1)
    axios.interceptors.request.use((config) => {
        config.data = qs.stringify(config.data);
        return config;
    }, function(error) {
        return Promise.reject(error);
    });
    var that=this;
    //获取本地数据
    axios.get('static/singlelist.json').then(function(res){
      that.singleitems=res.data;
      that.obj1=that.singleitems[id-1]
      console.log( that.obj1)
      for(var i=0;i<that.singleitems.length;i++){
        that.ids.push(that.singleitems[i].id);
      }
       that.index=that.ids.indexOf(id);
       
       //获取单个商品信息
       that.contents=that.singleitems[that.index];
       console.log(that.contents)
    }).catch(function (err) {
      console.log(err);
    });
  },
  methods:{
    btnCar(){
      console.log(this.contents)
      this.hide=true;
      this.count++;
    },
    toCar(){
      console.log(this.obj2)
      console.log(getCookie("username"))
       if(getCookie("username")==""){
        alert("请先登录");
        //没有登录让页面跳转到登录页面
        this.$router.push("/mine")
      }else{
        this.uid =getCookie("uid");

      console.log(this.uid)
      console.log(this.uidd)
       axios.get('http://localhost:6500/uselogin/'+this.uid).then((res)=>{
        //取回后台登录数据
       console.log(res.data.product);
       if(res.data.product==""||!res.data.product){
              this.addArr()
              // 将接收的值转成字符串
              this.arrdataStr=JSON.stringify(this.obj2);
              
              // console.log(this.arrdataStr)
       }else{
            // 将json字符串转换为对象
            this.obj2=JSON.parse(res.data.product);
            console.log(this.obj2);
            this.addArr()
             // 将接收的值转成字符串
            this.arrdataStr=JSON.stringify(this.obj2)   //obj2==arrdata
      }
      //修改  如果内容修改了将内容重新传到后台
          axios.put("http://localhost:6500/uselogin/"+this.uid,{product:this.arrdataStr}).then((res)=>{   
            // 页面跳转到购物车页面
            // console.log(res.data.product)
            this.$router.push("/shoppingcar/:id")
          });
      
          }).catch(function (err) {
          console.log(err);
          })
      }
    },
//获取json文件，选出购物车列表需要的存入obj2
    addArr(){
      return this.obj2["id"+this.uidd] = { //商品id做key,下面为传值
          "id": this.uidd,
          "num": this.num,
          "price":this.obj1.price,
          "name":this.obj1.name,
          "img":this.obj1.img1

        };
    }


  },
  components:{
    headertwo,
    searchbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top{
  width: 100%;
  background: white;
}
.detail-img{
  width: 100%;
  height: 200px;
}
.detail-img img{
  width: 100%;
  height: 200px;
}
.top ul{
  width: 95%;
  margin-left: 2.5%;
  margin-top: 10px;
}
.top ul li{
  height: 30px;
  display: flex;
  justify-content: space-between;
}
.red{
  color: red;
  margin-right: 20px;
}
hr{
  margin-top: 10px;
}
.detail-btn{
  margin-top: 5px;
}
.detail-btn button{
  width: 45%;
  outline: none;
  border: none;
  height: 35px;
  color: white;
}
.detail-btn button:nth-child(1){
  background: #FF9500;
  margin-left: 1%
}
.detail-btn button:nth-child(2){
  background: #F15352;
   margin-left: 3%
}
.big-img{
  width: 100%;
  height: 150px;
  margin-top: 20px;
}
.big-img img{
  width: 100%;
}
.intro-product{
  width: 95%;
  margin-left: 2.5%;
  margin-top: 30px;
  border: 1px solid #ccc;
  text-align:left;
}
.intro-product div:nth-child(1){
  display: flex;
  justify-content: space-between;
}
.intro-product p{
  line-height: 30px;
}
.intro-product h3{
  line-height: 40px;
  color: green;
  font-weight: normal;
}
.intro-product img{
  width: 100%;
}
.footer{
  width: 100%;
  height: 55px;
  background: white;
  position: fixed;
  bottom: -5px;
  z-index: 1000;
}
.footer ul{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer button{
  width: 80px;
  height: 50px;
  border: none;
  outline: none;
  color: white;
}
.footer button:nth-child(1){
  background: #FF9500;
}
.footer button:nth-child(2){
  background: #F15352;
}
.count{
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  border-radius: 100%;
  background: red;
  color: white;
  position: fixed;
  bottom: 30px;
}
.onething{
  width: 100%;
  text-align: left;
  background: white;
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
  .money{
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: right;
    margin-right: 30px;
    background: #eee;
    margin-bottom: 30px;
    background: white;
  }
  .go{
    background: white;
    height: 200px;
  }
  .go button{
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
