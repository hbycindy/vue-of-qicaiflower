<template>
  <div class="home">
    <headerone></headerone>
    <searchbar></searchbar>
    <navbar></navbar>
    <div class="guide">
      <ul>
        <li><img src="static/home/flower.png" alt="">
            <p>鲜花</p>
          </img></li>
        <li><img src="static/home/cake.png" alt="">
            <p>蛋糕</p>
          </img></li>
        <li><img src="static/home/lm11.png" alt="">
            <p>浪漫组合</p>
          </img></li>
        <li><img src="static/home/more.png" alt="">
            <p>更多</p>
          </img></li>
      </ul>
    </div>
    <div class="contact">
      <button><img src="static/home/home_pay.png" alt=""><span>订单去哪了</span></button>
      <button><img src="static/home/home_phone.png" alt=""><span>400-658-1777</span></button>
      <button><img src="static/home/home_zx.png" alt=""><span>在线咨询</span></button>
      <button><img src="static/home/home_qq.png" alt=""><span>QQ:139010778</span></button>
    </div>
    <div class="hot" >
      <div v-for="item in seller">
        <ul class="title">
          <li><div>{{item.letter}}</div><p>{{item.intro}}</p></li>
          <li>{{item.more}}</li>
        </ul>

        <div v-for="list in lists">
          <ul class="flowerslist" >
            <li>
              <div>
                <router-link v-bind:to=list.path>{{list.id}}<img :src="item.img1" alt=""></router-link>
                <p>{{item.p1}}</p>
                <p>{{item.span1}}</p>
                <p><span>{{item.price1}}</span><img src="static/home/cartico0.png" alt=""><button>购买</button></p>
              </div>
              <div>
                <router-link v-bind:to=list.path>{{list.id}}<img :src="item.img2" alt=""></router-link>
                <p>{{item.p2}}</p>
                <p>{{item.span2}}</p>
                <p><span>{{item.price2}}</span><img src="static/home/cartico0.png" alt=""><button>购买</button></p>
              </div>
            </li>
           <li>
              <div>
                <router-link v-bind:to=list.path><img :src="item.img3" alt=""></router-link>
                <p>{{item.p3}}</p>
                <p>{{item.span3}}</p>
                <p><span>{{item.price3}}</span><img src="static/home/cartico0.png" alt=""><button>购买</button></p>
              </div>
              <div>
                <router-link v-bind:to=list.path><img :src="item.img4" alt=""></router-link>
                <p>{{item.p4}}</p>
                <p>{{item.span4}}</p>
                <p><span>{{item.price4}}</span><img src="static/home/cartico0.png" alt=""><button>购买</button></p>
              </div>
            </li>
            <li>
              <div>
                <router-link v-bind:to=list.path><img :src="item.img5" alt=""></router-link>
                <p>{{item.p5}}</p>
                <p>{{item.span5}}</p>
                <p><span>{{item.price5}}</span><img src="static/home/cartico0.png" alt=""><button>购买</button></p>
              </div>
              <div>
                <router-link v-bind:to=list.path><img :src="item.img6" alt=""></router-link>
                <p>{{item.p6}}</p>
                <p>{{item.span6}}</p>
                <p><span>{{item.price6}}</span><img src="static/home/cartico0.png" alt=""><button>购买</button></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="kong"></div>
    </div>
  </div>
</template>

<script>
import headerone from './Headerone'
import searchbar from './line'
import navbar from './nav'
// import footer from './footer'
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'home',
  data () {
    return {
      seller: {},
      lists:{}
    }
  },
  created(){
    // axios.interceptors.request.use((config) => {
    //     config.data = qs.stringify(config.data);
    //     return config;
    // }, function(error) {
    //     return Promise.reject(error);
    // });
    var that=this
    axios.get('static/home.json').then(function(res){
      that.seller=res.data;
    }).catch(function (err) {
      console.log(err);
    });
    axios.get('static/singlelist.json').then(function(res){
      that.lists=res.data;
      console.log(that.lists)
    }).catch(function (err) {
      console.log(err);
    });
  },
  components:{
    headerone,
    searchbar,
    navbar,
    // footer

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    padding: 0;margin: 0;
  }
  .guide{
    width: 95%;
    height: 90px;
    margin-left: 2.5%;
    background: white;
    margin-top: 5px;
  }
  .guide ul{
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .guide li{
    width: 20%;
    font-size: 13px;
  }
  .guide li:last-child p{
    color: red;
  }
  .guide img{
    width: 70%;
  }
  .contact{
    width: 95%;
    height: 90px;
    margin-left: 2.5%;
    margin-top: 5px;
  }
  .contact button{
    width: 49%;
    height: 40px;
    border: none;
    outline: none;
    margin-top:5px;
    color: white;
    font-size: 14px;
    border-radius: 5px;
  }
  .contact img{
    width: 15%;
  }
  .contact button:nth-child(1){
    background: #66CC66;
  }
  .contact button:nth-child(2){
    background: #DC4F45;
  }
  .contact button:nth-child(3){
    background: #FF6666;
  }
  .contact button:nth-child(4){
    background: #01A0E9;
  }
  .hot{
    width: 95%;
    margin-left: 2.5%;
    margin-top: 10px;
  }
  .title{
    width: 100%;
    height: 40px; 
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }
  .title li:nth-child(1){
    width:110px ;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title li:nth-child(1) div{
    width: 30px;
    height: 30px;
    line-height: 30px;
    background: #DC1431;
    color: white;
    border-radius: 5px;
  }
  .title p{
    margin-left: 2%;
    font-size: 18px;
    font-weight: 600;
    color: red;
  }
  .title li:nth-child(2){
    width: 80px;
    height: 30px;
    line-height: 30px;
    border-radius: 5px;
    background: #DC1431;
    color: white;
  }
  .flowerslist{
    width: 95%;
    margin-left: 2.5%;
   
  }
  .flowerslist li{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  .flowerslist li div{
     width: 48%;
     background: white;
  }
  .flowerslist div img:nth-child(1){
    width: 100%;
  }
  .flowerslist div p:nth-child(2){
    text-align: left;
  }
  .flowerslist div p:nth-child(3){
    text-align: left;
  }
  .flowerslist div p:nth-child(4){
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .flowerslist div p:nth-child(4) img{
    width: 18%;
  }
  .flowerslist div p:nth-child(4) span{
    color: red;
  }
  .flowerslist div p:nth-child(4) button{
    border: 1px solid green;
    color: green;
    width: 40px;
    height: 25px;
    background: none;
    border-radius: 4px;
  }
  .kong{
    width: 100%;
    height: 100px;
  }
  
</style>