<template>
	<div class="login-container">
		<div class="login-main layout">
			<img src="~@/assets/Artwork.png" alt="" v-show="isImg">
			<!-- 登录/注册 -->
			<div v-bind:class="{ 'login-wrap': !isShow && !isPassword, 'register-warp': isShow,'forGet-warp': isPassword }">
				<!-- 找回密码 -->
				<forGetPassword v-if="isPassword" />
				<!-- /找回密码 -->

				<!-- 注册账号 -->
				<register v-else-if="isShow" />
				<!-- /注册账号 -->

				<el-tabs v-else v-model="checkedName">
					<!-- 账号登录 -->
					<el-tab-pane label="账号登录" name="userId">
						<userId @open="openRegister" @forGet="openForget" />
					</el-tab-pane>
					<!-- /账号登录 -->

					<!-- 手机号快捷登录 -->
					<el-tab-pane label="手机号快捷登录" name="phone">
						<userPhone @open="openRegister" />
					</el-tab-pane>
					<!-- /手机号快捷登录 -->
				</el-tabs>
			</div>
			<!-- 登录/注册 -->
		</div>
	</div>
</template>

<script>
	import userId from './components/userId.vue' // 账号登录
	import userPhone from './components/userPhone.vue' // 手机号快捷登录
	import register from './components/register.vue' // 注册账号
	import forGetPassword from './components/forGetPassword.vue' // 找回密码

	export default {
		name: 'login',
		components: {
			userId,
			userPhone,
			register,
			forGetPassword
		},
		data() {
			return {
				checkedName: 'userId', // 默认选中的登录方式
				isShow: false, // 是否显示注册账号框
				isPassword: false, // 是否显示找回密码框
				isImg: true //是否显示图片
			}
		},
		methods: {
			// 打开注册框
			openFirstRegister() {
				const { register } = this.$route.query
				if (register) {
					this.isShow = true
					this.isImg = false
					this.isPassword = false
				}
				return
			},
			openRegister(){
				this.isShow = true
				this.isImg = false
			},
			openForget(){
				this.isPassword = true
				this.isImg = false
			}
		},
		created() {
			this.openFirstRegister()
		}
	}
</script>

<style lang="less">
	.login-container {
		.login-main {
			height: 620px;
			display: flex;
			align-items: center;
			justify-content: space-between;

			&>img {
				width: 560px;
			}
			.register-warp{
				margin: 0 auto;
			}
			.forGet-warp{
				margin: 0 auto;
			}
			.login-wrap {
				width: 400px;
				height: 500px;
				font-size: 16px;
				background-color: #fff;
				border-radius: 16px;
				box-sizing: border-box;
				padding: 50px 40px 25px;
				margin: 0 auto;
				.title {
					font-size: 24px;
					color: #ea4c89;
					margin-bottom: 24px;
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
		}
	}
</style>
