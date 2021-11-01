<template>
	<el-form status-icon :model="userInfo" :rules="rules" ref="userForm">
		<el-form-item prop="name">
			<el-input v-model="userInfo.name" placeholder="输入手机号、邮箱"></el-input>
		</el-form-item>
		<el-form-item prop="password">
			<el-input show-password v-model="userInfo.password" placeholder="输入密码"></el-input>
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
		<div class="optional clearfix">
			<div class="more">
				<span @click="$emit('open')">注册账号</span>
				<span @click="$emit('forGet')">忘记密码?</span>
			</div>
		</div>
		<div class="login-btn" @click="login('userForm')">登录</div>
	</el-form>
</template>

<script>
	import {
		phoneAndEmail
	} from '@/utils/validation' // 导入自定义验证规则
	import {
		login,
		captchaImage,
		userId
	} from '@/api/user'

	export default {
		name: 'userId',
		data() {
			return {
				userInfo: {
					name: '', // 手机号、邮箱
					password: '', // 密码
					imageCode: '', // 图形验证码
					uuid: ''
				},
				rules: { // 验证的规则
					name: [{
							required: true,
							message: '手机号或邮箱不能为空'
						},
						{
							validator: phoneAndEmail,
							trigger: 'blur'
						}
					],
					password: [{
						required: true,
						message: '密码不能为空',
						trigger: 'blur'
					}],
					imageCode: [{
							required: true,
							message: '图形验证码不能为空'
						},
						{
							min: 4,
							max: 4,
							message: '长度在 4 个字符',
							trigger: 'blur'
						}
					]
				},
				imageCode: '' // 图形码地址
			}
		},
		methods: {
			// 用户账号登录
			login(userForm) {
				this.$refs[userForm].validate((valid) => {
					if (valid) {
						// 用户登录
						login({
							userMail: this.userInfo.name,
							password: this.userInfo.password,
							code: this.userInfo.imageCode,
							uuid: this.userInfo.uuid
						}).then(res => {
							if (res.data.code === 200) {
								// 保存用户 uuid
								console.log(res.data.userId)
								this.$store.commit('setUser', res.data.userId)
								this.$store.commit('setToken',res.data.token)
								this.$message('登录成功')
								// this.getUserInfo(res.data.userId)
								this.$router.push('/')
							} else {
								this.$message(res.data.msg)
							}
						})
					} else {
						alert('登录失败，请检查错误')
						return
					}
				})
			},
			//获取用户信息
			async getUserInfo(uuid) {
				const res = await userId(uuid)
				console.log(res)
				//this.$router.push('/')
			},
			// 切换图形验证码
			async changeImageCode() {
				try {
					const {
						data
					} = await captchaImage()
					this.captchaOnOff = data.captchaOnOff === undefined ? true : data.captchaOnOff
					if (this.captchaOnOff) {
						this.imageCode = `data:image/gif;base64,${data.img}`
						this.userInfo.uuid = data.uuid
					}
				} catch (err) {
					console.log(err)
				}
			}
		},
		mounted() {
			this.changeImageCode()
		}
	}
</script>

<style lang="less">
	.imageCode {
		width: 100%;
		height: 40px;
		cursor: pointer;
	}
</style>
