<template>
  <div id="footer">
    <router-view></router-view>
    <div id="tabBar">
      <ul >
      <li><router-link to="/home"><img src="./assets/app/footer01.png" alt=""></router-link></li>
      <li><router-link to="/classify"><img src="./assets/app/footer10.png" alt=""></router-link></li>
      <li><router-link to="/shopping"><img src="./assets/app/footer20.png" alt=""></router-link></li>
      <li><router-link to="/mine"><img src="./assets/app/footer30.png" alt=""></router-link></li>
      <li><router-link to="/help"><img src="./assets/app/footer40.png" alt=""></router-link></li>
    </ul>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'footer',
  data(){
    return {
      mesg:"分类"
    }

  }
}
</script>

<style>
/* #footer {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
*{
  padding: 0;margin: 0;
}
html,body{
    background: #eee;
  }
ul,a{
  list-style: none;
  text-decoration: none;
}
#tabBar{
  width: 100%;
  height: 50px;
  background: rgba(0, 0, 0, 0.05);
  position: fixed;
  bottom: 0;
}
#tabBar ul{
  width: 90%;
  margin-left: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}
#tabBar ul img{
  width: 65%;
}

</style>
