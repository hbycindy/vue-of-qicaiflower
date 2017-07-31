<template>
  <div class="mine">
    <headerfour></headerfour>
    <logpassword></logpassword>
  </div>
</template>

<script>
import headerfour from './Headerfour'
import logpassword from './logpassword'
export default {
  name: 'mine',
  data () {
    return {
      msg: ''
    }
  },
  components:{
    headerfour,
    logpassword
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
