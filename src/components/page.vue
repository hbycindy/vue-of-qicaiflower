<template>
  <div class="pager">
   <!--  <button class="btn btn-pager">上一页</button>
    <span v-if="pageNo !== 1" class="page-index " @click="goPage(1)">1</span>
    <span class="page-index"  @click="goPage">2</span>
    <span class="page-index">...</span>
    <span class="page-index">6</span>
    <button class="btn btn-pager" :disabled="this.current == pageNo" >下一页</button> -->

<ul class="pagination pagination-md pull-right ">
    <li v-if="this.cur>1" ><a v-on:click="this.cur-- ,pageClick()">上一页</a></li>
    <li v-else class="disabled"><a>上一页</a></li>
    <li v-for="index in indexs"  v-bind:class="{'active': this.cur === index }">
      <a v-on:click="btnClick(index)">{{ index }}</a>
    </li>
    <li v-if="this.cur != this.all" ><a v-on:click="this.cur++,pageClick()">下一页</a></li>
    <li v-else class="disabled"><a>下一页</a></li>
    <li class="disabled"><a>共<i>{{ this.all }}</i>页</a></li>
  </ul>
    <p>共61个产品。本页1-12个</p>
    <div class="bl"></div>

  </div>
  
</template>

<script>
export default {
  name:"pager",
   props:['all','cur'],
    computed: {
      indexs: function(){
        var left = 1;
        var right = this.all;
        var ar = [];
       
        if(this.all>= 7){
          if(this.cur > 5 && this.cur < this.all-4){
            left = this.cur - 3;
            right = this.cur + 3;
          }else{
            if(this.cur<=5){
              left = 1;
              right = 7;
            }else{
              right = this.all;
              left = this.all - 6;
            }
          }
        }
         while (left <= right){
          ar.push(left);
          left ++;
        }
        return ar;
      },
    },
  methods: {
      btnClick: function (value) {
        if(value != this.cur){
          this.cur = value;
        }
        // this.$http.get('/'+this.type+'/page'+this.cur, function (data) {
        //   this = data;
        //});
        console.log('现在在'+this.cur+'页');
      },
      pageClick: function () {
        console.log('现在在'+'页');
        // this.$http.get('/'+this.type+'/page'+this.cur, function (data) {
        //   this = data;
        //});
      },
    }


}
</script>

<style scoped>
.bl{
	height: 500px;
	width: 100%;
}
 .pagination{
    margin-bottom: 5px;
  }
</style>

