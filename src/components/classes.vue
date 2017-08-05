<template>
	<div class="classes">
		<headertwo></headertwo>
    	<div>
	    	<div class="searchbar" >
	      		<div><input type="text" placeholder="红玫瑰"  v-model='title' ><img src="static/home/search.png" alt=""></div>
	      		<button>在线咨询</button>
	    	</div>
			<div v-for="list in filterBy(one, title)" class="flowerslist">
				<router-link v-bind:to=list.path><img :src="list.img1" alt=""></router-link>
				<p>{{list.name}}</p>
				<p>{{list.title}}</p>
				<div><span>￥{{list.price}}</span><img src="static/home/cartico0.png" alt=""><button>购买</button></div>
			</div>
		</div>
	</div>
</template>

<script>
import headertwo from './Headertwo'
import axios from 'axios'
import qs from 'qs'
	export default{
	name: 'classes',
	data(){
		return {
			title:"",	
      index:"",		
      ids:[],
      detail:{},
      content:[],
      one:{}			
		}
	},
	created(){
		var id=this.$route.params.id;
		var that=this;
      axios.get('static/class.json').then(function(res){
      that.detail=res.data;
      for(var i=0;i<that.detail.length;i++){
        that.ids.push(that.detail[i].id);
      }
       that.index=that.ids.indexOf(id);
       that.content=that.detail[that.index];
       that.one=that.content.details
    })
	},
	components:{
	headertwo,
	}
}
</script>
<style scoped>
.flowerslist{
    width: 45%;
    height: 170px;
    margin-left: 2.5%;
    text-align: left;
    float: left;
    background: white;
    margin-top: 10px;
    margin-right: 2%;
  }
  .flowerslist img:nth-child(1){
  	width: 50%;
  }
  .flowerslist img:nth-child(2){
  	width: 15%;
  	height: 15%;
  }
   .flowerslist div{
   	display: flex;
   	justify-content: space-between;
   	align-items: center;
   }
   .flowerslist button{
   	border: 1px solid green;
    color: green;
    width: 40px;
    height: 25px;
    background: none;
    border-radius: 4px;
   }
   .searchbar{
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #eee;
  z-index: 1000;
}
.searchbar div{
  width: 65%;
  height: 28px;
  margin-left: 2%;
  display: flex;
  background: white;
  border-radius: 5px;
}
.searchbar input{
  height: 25px;
  width: 90%;
  border: none;
  outline: none;
  text-indent: 0.5em;
  font-size: 14px;
}
.searchbar img{
  width: 10%;
  height: 90%;
}
.searchbar button{
  width: 28%;
  height: 28px;
  margin-right: 2%;
  background: #66CC66;
  border: none;
  outline: none;
  color: white;
  font-size: 14px;
  border-radius: 5px;
}
.searchlist{
  width: 60%;
  margin-left: 2.5%;
  text-align: left;
  background: white;
  margin-top: -5px;
  position: fixed;
  top: 80px;
  z-index: 100;
}
.searchlist li{
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid #eee;
  padding-left: 5px;
  font-size: 14px;
}
</style>