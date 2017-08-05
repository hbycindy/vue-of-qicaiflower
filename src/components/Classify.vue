<template>
  <div class="classify">
  	<headertwo></headertwo>	
    <searchbar></searchbar>
    <div class="more">
      <ul v-for="item in detail">
        <li>
          <router-link v-bind:to=item.class><div><img :src="item.icon" alt=""><p>{{item.sort}}</p></div></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import headertwo from './Headertwo'
import searchbar from './line'
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'classify',
  data () {
    return {
      msg: '',
      ids:[],
      paths:[],
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
        that.content.push(that.detail[i].details);
        that.one=that.content[i];
      }
    })
  },
  components:{
    headertwo,
    searchbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .more{
    width: 95%;
    margin-left: 2.5%;
    padding-top: 30px;
  }
  .more li{
    width: 33.33%;
    height: 120px;
    float: left;
  }
  .more img{
    width: 60%;
  }

</style>
