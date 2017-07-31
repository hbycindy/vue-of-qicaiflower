<template>
  <div class="classify">
  	<headertwo></headertwo>	
    <searchbar></searchbar>
    <div class="more">
      <ul>
        <li>
          <div><img src="static/class/class_xh.png" alt=""><p>鲜花</p></div>
          <div><img src="static/class/class_dg.png" alt=""><p>蛋糕</p></div>
          <div><img src="static/class/class_lmzh.png" alt=""><p>浪漫组合</p></div>
        </li>
        <li>
          <div><img src="static/class/class_hongjiu.png" alt=""><p>红酒</p></div>
          <div><img src="static/class/class_qkl.png" alt=""><p>巧克力</p></div>
          <div><img src="static/class/class_kt.png" alt=""><p>卡通花束</p></div>
        </li>
        <li>
          <div><img src="static/class/class_mrwj.png" alt=""><p>毛绒玩具</p></div>
          <div><img src="static/class/class_syhl.png" alt=""><p>商业花篮</p></div>
          <div><img src="static/class/class_gl.png" alt=""><p>果篮</p></div>
        </li>
      </ul>
    </div>
    <div class="blank"></div>
  </div>
</template>

<script>
import headertwo from './Headertwo'
import searchbar from './line'
export default {
  name: 'classify',
  data () {
    return {
      msg: ''
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
  .more{
    width: 95%;
    margin-left: 2.5%;
    padding-top: 30px;
    background: white;
  }
  .more li{
    width: 100%;
    height: 130px;
    display: flex;
  }
  .more li div{
    width: 33.33%;
  }
  .more img{
    width: 50%;
  }
  .blank{
    width: 100%;
    height: 150px;
    background: white;
  }
</style>
