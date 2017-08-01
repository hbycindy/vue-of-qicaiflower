<template>
  <div class="single">
    <div v-for="item in singleitems">
      {{item.id}}
    </div>
   <!-- <div><img :src="" alt="a.img1"></div> -->
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'single',
  data () {
    return {
      singleitems:{}
    }
  },
  created(){
    axios.interceptors.request.use((config) => {
        config.data = qs.stringify(config.data);
        return config;
    }, function(error) {
        return Promise.reject(error);
    });
    var that=this;
    axios.get('static/singlelist.json').then(function(res){
      that.singleitems=res.data;
      console.log(that.singleitems)
    }).catch(function (err) {
      console.log(err);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
