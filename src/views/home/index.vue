<template>
  <div id="module">
    <el-container>
      <!-- 左侧导航 -->
      <Nav />
      <el-container>
        <!-- 头部 -->
        <el-header >
          <!-- 面包屑 -->
          <Breadcrumb />
        </el-header>
        <!-- 主体 -->
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Nav from './Nav.vue'
import Breadcrumb from './Breadcrumb.vue'

 export default{
  data(){
    return{
    }
  },
  components:{
    Nav,
    Breadcrumb
  },
  methods:{
    goBack(){
      sessionStorage.removeItem('username'),
      this.$router.push('/login')
    }
  }
 }
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 1000px;
    height: 750px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 900px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .btns{
    text-align: right;
  }

  .breadcrumb{
    text-align: center;
  }
</style>
