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
      num:"0",
      index:""
    }
  },
  created(){
    var id=this.$route.params.id;
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
      for(var i=0;i<that.singleitems.length;i++){
        that.ids.push(that.singleitems[i].id);
      }
      // console.log(id)
       that.index=that.ids.indexOf(id);
       that.contents=that.singleitems[that.index];
       // console.log(that.contents)
    }).catch(function (err) {
      console.log(err);
    });
  },
  methods:{
    btnCar(){
      this.hide=true;
      this.count++;
      //声明数据等于获取到的本地数据，再传送到后台
      let data = {'name':this.contents.name,'price':this.contents.price,'img':this.contents.img1,"num":this.num}
      this.num++;
       console.log(data.num)
      axios.post('http://localhost:6500/product',data).then((res)=>{
        this.items=res.data;
        // console.log(this.items)
        this.itemid=this.items.id
      })
    },
    toCar(){
      var that=this;
      //点击获取后台数据，并通过路由跳转到购物车列表页面
      let data = {'name':this.contents.name,'price':this.contents.price,'img':this.contents.img1}
       axios.get('http://localhost:6500/product/',data).then((res)=>{
        //从后台取回来的数据
            that.items=res.data;
            console.log(that.items)
          })
       this.$router.push('/shoppingcar/:id');
    },
    // remove(index){
    //   var that=this;
    //   let data = {'name':this.contents.name,'price':this.contents.price,'img':this.contents.img1}
    //   var url='http://localhost:6500/product/'+this.itemid
    //   axios.delete(url,data).then((res)=>{
    //           that.items.splice(index, 1);
    //       })
    // }
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
