<template>
  <div class="login">
    <p1>管理系统</p1>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
      
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
    
      <el-form-item label="密码" prop="password">
        <el-input type='password' v-model="ruleForm.password"></el-input>
      </el-form-item>

      <el-form-item class="btns">
        <el-button type="primary"  @click="login('ruleForm')">登录</el-button>
        <el-button>取消</el-button>
      </el-form-item>

    </el-form>

  </div>
</template>

<script>
  export default {
    name:'login',
    data(){
      return {
        ruleForm: {
          name: '',
          password:''
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
          ],
        }
      }  
    },

    methods:{
      login(){
        let {name,password} = this.ruleForm;
        this.$http({
          method:'post',
          url:'/get_login',
          data:{
            user:name,
            password:password
          }
        }).then(res=>{
          console.log(res);
          let {code} = res.data.code
          if (code==200){
            sessionStorage.setItem('username',name),
            this.$router.push('/home');
          }
        })
      }
    }


  }
</script>

<style>
.btns{
    display: flex;
    justify-content: flex-end;
  }
</style>
