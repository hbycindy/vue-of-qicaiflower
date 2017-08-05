<template>
  <div class="shoppingcar">
  	<headerthree></headerthree>
    <searchbar></searchbar>
    <div class="onething" >
      <ul v-for="(item,index) in itemid">
        <li >
          <div class="imgred"><img :src="item.img" alt=""></div>
          <div class="introp">
            <p>名称：{{item.name}}</p>
            <p>数量：<button class="minus" @click="minus">-</button><span>{{num}}</span><button class="plus" @click="plus">+</button></p>
            <p>附加：</p>
            <p>价格：{{item.price}}</p>
          </div>
          <button class="cancel" @click="remove">删除商品</button>
        </li>
      </ul>
      <div>
        <p class="money">应付总额：<span>{{total}}</span></p>
        <p class="go"><button>继续购物</button><button>下一步</button></p>
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
      msg: '',
      num:"1",
      singleitems:{},
      ids:[],
      contents:{},
      total:"",
      items:{},
      itemid:{},
      index:''
    }
  },
  created(){
    var id=this.$route.params.id;
    var that=this;
      axios.get('static/singlelist.json').then(function(res){
      that.singleitems=res.data;
      console.log(that.singleitems)
      for(var i=0;i<that.singleitems.length;i++){
        that.ids.push(that.singleitems[i].id);
      }
      console.log(id)
       that.index=that.ids.indexOf(id);
       that.contents=that.singleitems[that.index];
       console.log(that.contents)
    }).catch(function (err) {
      console.log(err);
    });


    axios.get('http://localhost:6500/product').then((res)=>{
          that.itemid=res.data;
          console.log(that.itemid)
      })
  },
  methods:{
    minus(index){
      if(this.num>1){
        this.num--;  
      }else{
        this.num=1;
      }
     this.total=this.contents.price*this.num;
    },
    plus(){
      this.num++;
      this.total=this.contents.price*this.num;
    },
    remove(index){
      console.log(this.itemid)
    

      var that=this;
      let data = {'name':this.contents.name,'price':this.contents.price,'img':this.contents.img1,"num":this.contents.id}
      console.log(data.num)
      // var url='http://localhost:6500/product/'+this.itemid
      // axios.delete(url,data).then((res)=>{
      //         that.items.splice(index, 1);
      //     })
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