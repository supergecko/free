<template>
	<div class="nextStep-container">
		<div class="nextStep-content">
			<!-- 注册成功 -->
			<div v-if="isNextStep" class="register-success">
				<img src="~@/assets/Artwork.png" alt="">
				<div class="text">
					注册成功，
					<span class="num">{{ delay }}</span>
					秒后跳转到首页
				</div>
				<router-link class="link" to="/">立即跳转</router-link>
			</div>
			<!-- /注册成功 -->
			<!-- 确认密码 -->
			<div v-else class="form-wrap">
				<el-form :model="userForm" status-icon :rules="rules" ref="userForm">
					<p v-if="isForgotPassword" class="title">重置密码</p>
					<p v-else class="title">设置密码</p>
					<el-form-item prop="password">
						<el-input type="password" v-model="userForm.password" placeholder="输入密码" autocomplete="off">
						</el-input>
					</el-form-item>
					<el-form-item prop="confirmPassword">
						<el-input type="password" v-model="userForm.confirmPassword" placeholder="确认密码"
							autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item>
						<div class="my-btn" @click="confirm('userForm')">完成</div>
					</el-form-item>
				</el-form>
			</div>
			<!-- /确认密码 -->
		</div>
	</div>
</template>

<script>
	import {
		register
	} from '@/api/user'

	export default {
		name: 'nextStep',
		data() {
			return {
				userForm: {
					password: '', // 密码
					confirmPassword: '' // 确认密码
				},
				rules: { // 验证的规则
					password: [{
							required: true,
							message: '请输入密码'
						},
						{
							validator: (rule, value, callback) => {
								if (value === '') {
									callback(new Error('请输入密码'))
								} else {
									if (this.userForm.confirmPassword !== '') {
										this.$refs.userForm.validateField('confirmPassword')
									}
									callback()
								}
							},
							trigger: 'blur'
						}
					],
					confirmPassword: [{
							required: true,
							message: '请再次输入密码'
						},
						{
							validator: (rule, value, callback) => {
								if (value === '') {
									callback(new Error('请再次输入密码'))
								} else if (value !== this.userForm.password) {
									callback(new Error('两次输入密码不一致!'))
								} else {
									callback()
								}
							},
							trigger: 'blur'
						}
					]
				},
				isForgotPassword: false, // 是否忘记密码
				isNextStep: false, // 注册成功，下一步
				delay: 0 // 倒计时
			}
		},
		mounted() {
			console.log()
		},
		methods: {
			// 确认密码
			confirm(userForm) {
				this.$refs[userForm].validate((valid) => {
					if (valid) {
						register({
							code: this.$route.query.imageCode,
							userMail: this.$route.query.email,
							password: this.userForm.confirmPassword,
							uuid: this.$route.query.uuid,
							userType: this.$route.query.userType
						}).then(res => {
							console.log(res)
							if (res.data.code === 200) {
								this.isNextStep = true
								this.$message({
									message: res.data.msg,
									type: 'success'
								});
							} else {
								this.$message(res.data.msg)
							}
						})
					} else {
						this.$message.error('注册失败')
						return false
					}
				})
			},
			// 自动倒计时
			automatic() {
				if (this.delay === 0) {
					this.delay = 5
					let timer = setInterval(() => {
						console.log('执行中')
						this.delay--
						if (this.delay === 0) {
							this.$router.push('/')
							clearInterval(timer)
						}
					}, 1000);
				}
			}
		},
		watch: {
			isNextStep() {
				this.automatic()
			}
		},
	}
</script>

<style lang="less">
	.nextStep-container {
		display: flex;
		justify-content: center;
		height: 620px;
		align-items: center;

		.nextStep-content {
			width: 550px;
			height: 400px;
			background-color: #fff;
			display: flex;
			justify-content: center;

			.form-wrap {
				margin-top: 37px;
				width: 368px;
				text-align: center;

				.title {
					font-size: 24px;
					color: #ea4c89;
					margin-bottom: 40px;
				}

				.my-btn {
					background-color: #ea4c89;
					border-radius: 8px;
					color: #fff;
					text-align: center;
					cursor: pointer;
					margin-top: 10px;
				}
			}

			.register-success {
				display: flex;
				flex-direction: column;
				align-items: center;

				img {
					width: 200px;
				}

				.text {
					font-size: 20px;
					color: #676779;
					margin: 50px 0 20px 0;
				}

				.num {
					font-size: 60px;
					color: #ea4c89;
				}

				.link {
					color: #ea4c89;
					text-decoration: underline;
				}
			}
		}
	}
</style>
