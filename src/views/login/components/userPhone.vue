<template>
  <el-form status-icon :model="userInfo" :rules="rules" ref="phoneForm">
    <el-form-item prop="phone">
      <el-input v-model="userInfo.phone" placeholder="手机号"></el-input>
    </el-form-item>
    <el-form-item prop="code">
      <el-row>
        <el-col :span="14">
          <el-input v-model="userInfo.code" placeholder="验证码"></el-input>
        </el-col>
        <el-col :span="9" :offset="1">
          <span @click="getCode" class="getCode">获取验证码</span>
        </el-col>
      </el-row>
    </el-form-item>
    <div class="optional clearfix">
      <div class="more">
        <span @click="$emit('open')">注册账号</span>
      </div>
    </div>
    <div class="login-btn" @click="login('phoneForm')">登录</div>
  </el-form>
</template>

<script>
import { phone } from '@/utils/validation' // 导入自定义验证规则 
// import { login } from '@/api/user'

export default {
  name: 'userPhone',
  data() {
    return {
      userInfo: {
        phone: '', // 手机号
        code: '' // 短信验证码
      },
      rules: { // 验证的规则
        phone: [
          { required: true, message: '请输入手机号' },
          { validator: phone, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码' },
          { min: 5, max: 5, message: '长度在 5 个字符', trigger: 'blur' }
        ]
      }  
    }
  },
  methods: {
    // 手机号登录
    login(phoneForm) {
      this.$refs[phoneForm].validate((valid) => {
        if(valid) {
          alert('登录成功')
        } else {
          alert('登录失败，请检查错误')
          return
        }
      })
    },
    // 获取短信验证码
    getCode() {
      alert('通过手机短信获取');
    }
  }
}
</script>

<style lang="less">
  .getCode {
    display: inline-block;
    width: 100%;
    height: 40px;
    background-color: #fdecf3;
    border-radius: 8px;
    text-align: center;
    line-height: 40px;
    color: #ea4c89;
    cursor: pointer;
  }
</style>