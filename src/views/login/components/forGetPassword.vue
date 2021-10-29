<template>
  <div class="forGetPassword-container">
    <p class="title">找回密码</p>
    <el-form :model="userInfo" :rules="rules" ref="ruleForm">
      <el-form-item prop="email">
        <el-input v-model="userInfo.email" placeholder="输入邮箱"></el-input>
      </el-form-item>
      <el-form-item prop="imageCode">
        <el-row>
          <el-col :span="16">
            <el-input v-model="userInfo.imageCode" placeholder="图形验证码"></el-input>
          </el-col>
          <el-col :span="7" :offset="1">
            <img @click="changeImageCode" class="imageCode" :src="imageCode" alt="">
          </el-col>
        </el-row>
      </el-form-item>
      <div class="login-btn" @click="submit('ruleForm')">提交</div>
    </el-form>
  </div>
</template>

<script>
import { email } from '@/utils/validation' // 导入自定义验证规则
import { captchaImage, setPassword } from '@/api/user'

export default {
  name: 'forGetPassword',
  data() {
    return {
      userInfo: {
        email: '', // 邮箱
        imageCode: '' // 图形验证码
      },
      rules: { // 验证的规则
        email: [
          { required: true, message: '邮箱不能为空' },
          { validator: email, trigger: 'blur' }
        ],
        imageCode: [
          { required: true, message: '图形验证码不能为空' },
          { min: 5, max: 5, message: '长度在 5 个字符', trigger: 'blur' }
        ]
      },
      imageCode: '' // 图形码地址
    }
  },
  methods: {
    // 用户提交
    submit(formName) {
      this.$refs[formName].validate((valid) => {
        if(valid) {
          alert('提交成功')
          // 找回密码
          setPassword({
            userMail: this.userInfo.email,
            code: this.userInfo.imageCode
          }).then(res => {
            console.log(res)
          })
          // this.$router.push({path: '/nextStep'})
        } else {
          alert('提交失败')
          return false
        }
      })
    },
    // 切换图形码
    async changeImageCode() {
      try {
        const {data} = await captchaImage()
        this.captchaOnOff = data.captchaOnOff === undefined ? true : data.captchaOnOff
        if(this.captchaOnOff) {
          this.imageCode = `data:image/gif;base64,${data.img}`
          this.userInfo.uuid = data.uuid
        }
      } catch (err) {
        console.log(err)
      }
    }
  },
  mounted () {
    this.changeImageCode()
  }
}
</script>

<style lang="less">
	.forGetPassword-container {
		width: 550px;
		height: 400px;
		font-size: 16px;
		background-color: #fff;
		border-radius: 16px;
		box-sizing: border-box;
		padding: 43px 93px 0px;
		.title {
			font-size: 24px;
			color: #ea4c89;
			margin-bottom: 24px;
			text-align: center;
		}
	
		.optional {
			font-size: 14px;
	
			.more {
				float: right;
	
				span {
					margin-left: 20px;
					cursor: pointer;
					color: #ea4c89;
				}
			}
		}
	
		.login-btn {
			width: 100%;
			height: 40px;
			background-color: #ea4c89;
			border-radius: 8px;
			font-size: 14px;
			text-align: center;
			line-height: 40px;
			color: #fff;
			cursor: pointer;
			margin-top: 30px;
	
			&:hover {
				background-color: #fc5695;
			}
		}
	
		.el-form-item {
			margin-bottom: 24px;
		}
	
		.el-tabs__header {
			margin-bottom: 24px;
		}
	
		.el-tabs__nav-wrap::after {
			display: none;
		}
	}
</style>