<template>
  <div class="line">
    <div class="searchbar">
      <div><input type="text" placeholder="红玫瑰" @click="listshow"><img src="static/home/search.png" alt=""></div>
      <button>在线咨询</button>
    </div>
    <div class="searchlist" v-show="hide">
      <ul>
        <li>粉玫瑰</li>
        <li>19枝</li>
        <li>百合</li>
        <li>玫瑰</li>
        <li>关闭</li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'line',
  data () {
    return {
      hide:false
    }
  },
  methods:{
    listshow(){
      this.hide=true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    padding: 0;margin: 0;
  }
  .searchbar{
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #eee;
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
}
.searchlist li{
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid #eee;
  padding-left: 5px;
  font-size: 14px;
}
</style>