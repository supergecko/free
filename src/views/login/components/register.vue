<template>
	<div>
		<div v-if="isIdentity">
			<div class="checkHead">选择您的身份</div>
			<div class="checkWarp">
				<div class="idetityWarp" style="margin-right: 80px;" @click="checkIsIdentityFlag(1)">
					<img src="../../../assets/Artwork.png" />
					<div class="smallTitle">我有技能</div>
					<div class="bigTitle">我是自由者</div>
				</div>
				<div class="idetityWarp" @click="checkIsIdentityFlag(0)">
					<img src="../../../assets/Artwork.png" />
					<div class="smallTitle">我有资源</div>
					<div class="bigTitle">我是雇主</div>
				</div>
			</div>
		</div>

		<div class="register-container" v-else>
			<p class="title">注册账号</p>
			<div v-if="!isVerification">
				<el-form status-icon :model="userInfo" :rules="rules" ref="registerForm">
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
					<el-form-item prop="check">
						<el-checkbox v-model="userInfo.check">阅读并同意<a href="#">《Free星球平台雇佣协议》</a></el-checkbox>
					</el-form-item>
					<div class="login-btn" @click="userRegister('registerForm')">注册</div>
				</el-form>
			</div>
			<div style="display: flex;flex-direction: column;align-items: center;margin-top: 45px;"
				v-if="isVerification">
				<img src="../../../assets/myEmail.png" style="width: 122px;height: 122px;" />
				<div class="emailText">请前往邮箱进行验证</div>
			</div>

		</div>
	</div>
</template>

<script>
	import {
		email,
		check
	} from '@/utils/validation' // 导入自定义验证规则 
	import {
		captchaImage,
		activation
	} from '@/api/user' // 导入用户相关的接口

	export default {
		name: 'register',
		data() {
			return {
				userInfo: {
					email: '', // 邮箱
					imageCode: '', // 图形验证码
					check: false, // 用户协议及隐私条款
					uuid: '', // 唯一标识
					userType: 0, //用户标识  用户类型（0：雇主用户；1：自由者用户）
				},
				rules: { // 验证的规则 
					email: [{
							required: true,
							message: '邮箱不能为空'
						},
						{
							validator: email,
							trigger: 'blur'
						}
					],
					imageCode: [{
							required: true,
							message: '图形验证码不能为空'
						},
						{
							min: 5,
							max: 5,
							message: '长度在 5 个字符',
							trigger: 'blur'
						}
					],
					check: [{
							required: true
						},
						{
							validator: check,
							trigger: 'change'
						}
					]
				},
				imageCode: '', // 图形码地址
				captchaOnOff: false,
				isIdentity: true, //身份flag  自由者  雇主
				isIdentityFlag: 0, //身份标识
				isVerification: false //是否显示验证
			}
		},
		methods: {
			//选择身份
			checkIsIdentityFlag(value) {
				this.isIdentity = false
				this.userInfo.userType = value
			},
			// 用户注册
			userRegister(registerForm) {
				var that = this
				this.$refs[registerForm].validate((valid) => {
					if (valid) {
						this.isVerification = true
						let	email = that.userInfo.email
						let	imageCode = that.userInfo.imageCode
						let	uuid = that.userInfo.uuid
						let	userType = that.userInfo.userType
						let params = {
							email: that.userInfo.email,
							type: 0, //0设置密码  1重置密码
							url: `${window.location.origin}/nextStep?email=${email}&imageCode=${imageCode}&uuid=${uuid}&userType=${userType}`,
						}
						activation(params).then(res => {
							if (res.data.code === 200) {
								this.$message(res.data.msg)
							} else {
								this.$message.error(res.data.msg)
							}
						})
						// 把用户填写的信息传送至 /nextStep
						// this.$router.push({
						// 	path: '/nextStep',
						// query: {
						// 	email: this.userInfo.email,
						// 	imageCode: this.userInfo.imageCode,
						// 	uuid: this.userInfo.uuid,
						// 	userType: this.userInfo.userType
						// }
						// })
					} else {
						this.$message.error('验证失败，请检查错误!')
						return
					}
				})
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
			console.log(window.location.origin)
		}
	}
</script>

<style lang="less">
	.register-container {
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

		.emailText {
			color: #3C3C4CFF;
			font-family: PingFang SC;
			font-weight: medium;
			font-size: 16px;
			line-height: normal;
			letter-spacing: 0px;
			text-align: center;
			margin-top: 44px;
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

		.imageCode {
			width: 100%;
			height: 40px;
			cursor: pointer;
		}

		.el-form-item__content {
			line-height: 0;
		}

		a {
			color: #ea4c89;
		}
	}

	.idetityWarp {
		width: 270px;
		height: 388px;
		border-radius: 16px;
		background: #FFFFFFFF;
		box-shadow: 0px 0px 52px 0px #DD95B83F;
		display: flex;
		flex-direction: column;
		align-items: center;

		img {
			width: 156px;
			height: 133px;
			margin-top: 48px;
		}

		.smallTitle {
			color: #9F9FA8FF;
			font-family: PingFang SC;
			font-weight: regular;
			font-size: 14px;
			line-height: normal;
			letter-spacing: 0px;
			text-align: center;
			margin-top: 72px;
		}

		.bigTitle {
			color: #EA4C89FF;
			font-family: PingFang SC;
			font-weight: bold;
			font-size: 20px;
			line-height: normal;
			letter-spacing: 0px;
			text-align: center;
			margin-top: 33px;
		}
	}

	.checkWarp {
		display: flex;
	}

	.checkHead {
		color: #000000FF;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 20px;
		line-height: normal;
		letter-spacing: 0px;
		text-align: center;
		margin-bottom: 27px;
	}
</style>
