<template>
  <div>
<!-- 无子集 -->
    <el-menu-item :index="path" v-if="!item.child">
      <i class="el-icon-menu"></i>
      <span slot="title">{{item.name}}</span>
    </el-menu-item>

    <!-- 有子集 -->
    <el-submenu :index="item.url" v-else>
    <template slot="title">
      <i class="el-icon-location"></i>
      <span>{{item.name}}</span>
    </template>
      <el-menu-item-group>
        <NavItem v-for="child in item.child" :key="child.url" :item="child" :path="child.url"/>
      </el-menu-item-group>
    </el-submenu>

  </div>
    

</template>

<script>
 export default{
  name:'NavItem',
  data(){
    return{
      items:[]
    }
  },
  props:['item','path'],  //父传子参数
  
  methods:{
  }
 }
</script>

<style>
</style>
