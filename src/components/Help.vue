<template>
  <div class="help">
    <headerfive></headerfive>
    <searchbar></searchbar>
    <div class="details">
      <h4>购物指南</h4>
      <ul>
        <li>购物流程</li>
        <li>会员介绍</li>
        <li>联系客服</li>
      </ul>
      <h4>配送方式</h4>
      <ul>
        <li>送货上门</li>
        <li>门店自取</li>
        <li>配送范围</li>
      </ul>
      <h4>支付方式</h4>
      <ul>
        <li>在线支付</li>
        <li>银行汇款</li>
        <li>货到付款</li>
      </ul>
      <h4>服务支持</h4>
      <ul>
        <li>售后服务</li>
        <li>退款说明</li>
        <li>取消订单</li>
      </ul>
      <h4>关注我们</h4>
      <ul>
        <li>微信公众号</li>
        <li>七彩鲜花APP</li>
        <li>节日特别提醒</li>
      </ul>
      <h4>联系我们</h4>
      <ul>
        <li>联系我们</li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <button class="server">服务热线：400-658-1777</button><br>
    <button class="qq">客服QQ：139 010 778</button>
    <div class="white"></div>
  </div>
</template>

<script>
import headerfive from './Headerfive'
import searchbar from './line'
export default {
  name: 'help',
  data () {
    return {
      msg: ''
    }
  },
  components:{
    headerfive,
    searchbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .help{
    width: 100%;
    background: white;
  }
  .details{
    width: 95%;
    margin-left: 2.5%;
    margin-top: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .details h4{
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    border-bottom: 1px solid #ccc;
    text-align: left;
  }
  .details ul{
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
  }
  .details li{
    width: 33.33%;
    border-right: 1px solid #ccc;
  }
  .help button{
    width: 95%;
    height: 40px;
    margin-top: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    color: white;
  }
  .server{
    background: #FD4B4B;
  }
  .qq{
    background: #6CB248;
  }
  .white{
    width: 100%;
    height: 100px;
    background: white;
  }
</style>
