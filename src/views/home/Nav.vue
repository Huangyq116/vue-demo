<template>
      <!-- 左侧导航 -->
      <el-aside width="200px">
         <el-menu
          :default-active="$route.path" exact
          class="el-menu-vertical-demo" router
          >
          <NavItem v-for="v in items" :key="v.url" :item="v" :path="v.url"/>
         </el-menu>
      </el-aside>

</template>

<script>
 import NavItem from './NavItem.vue'
 export default{
  data(){
    return{
      items:[]
    }
  },
  components:{
    NavItem
  },
  mounted(){
    this.getNav()
  },
  methods:{
    getNav(){
      this.$http.get('/get_nav').then(res=>{
        console.log(res)
        let {code,result} = res.data;
        if(code==200){
          this.items=result
        }
      })
    }
  }
 }
</script>

<style>
</style>
