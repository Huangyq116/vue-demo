<template>
 
  <div class="breadcrumb">
    <!-- <el-button type="primary" class="btns" @click="goBack" >退出</el-button> -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="v.path" v-for="(v,i) in list" :key="i">
      {{ v.meta.title}}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
 export default{
  data(){
    return{
      list:[]
    }
  },
  created(){
    console.log(this.$route.matched);
    this.list = this.$route.matched;
  },
  watch:{
    $route(to,from){
      console.log(to);
      let matched = to.matched;
      this.list = matched;
    }
  }
 }
</script>

<style>
  
</style>
