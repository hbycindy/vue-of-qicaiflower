<template>
  <div class="productlist">
   <div class="listp">
   		<div v-for="item in lists">
            <img :src="item.imgs" alt="" class="listimg">
            <p>{{item.intro}}</p>
            <p>{{item.p1}}</p>
            <p><span>{{item.price}}</span><img src="static/home/cartico0.png" alt=""><button>购买</button></p>
        </div>
   </div>
   <pager></pager>


  </div>
</template>

<script>
import axios from 'axios'
import pager from './page'
export default {
  name: 'productlist',
  data () {
    return {
    	lists:{},
    	// all: 8, //总页数
     //    cur: 1//当前页码
    }
  },
  created(){
  	var that=this
    axios.get('static/lists.json').then(function(res){
      that.lists=res.data;
    }).catch(function (err) {
      console.log(err);
    });
  },
  components:{
  	pager
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.listp{
	width: 100%;
	text-align: center;
	background: white;
}
.listp div{
	width: 45%;
	float: left;
	text-align: center;
	margin-left: 4%;
	margin-top: 10px;
	background: white;
}
.listimg{
	width: 100%;
}
.listp div p:nth-child(2){
    text-align: left;
  }
  .listp div p:nth-child(3){
    text-align: left;
  }
.listp div p:nth-child(4){
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .listp div p:nth-child(4) img{
    width: 18%;
  }
  .listp div p:nth-child(4) button{
    border: 1px solid green;
    color: green;
    width: 40px;
    height: 25px;
    background: none;
    border-radius: 4px;
  }
</style>
