<template>
	<div class="header-container">
		<div class="layout">
			<!-- free星球 logo -->
			<div class="logo">
				<h1>
					<a href="/">free星球</a>
				</h1>
			</div>
			<!-- /free星球 logo -->

			<!-- 用户信息区 -->
			<div v-if="$route.path !== '/login' && $route.path !== '/nextStep' && !userKey" class="user-info">
				<span class="checked">加入我们</span>
				<span class="line"></span>
				<span class="checked" @click="$router.push('/login')">登录</span>
				<span class="register" @click="register">注册</span>
			</div>

			<div style="display: flex;align-items: center;" v-if="userKey && userInfo">
				<div style="margin-right: 46px;">
					<el-badge :value="5" :max="99" class="item">
						<img src="../../assets/order.png" style="width: 24px;height: 24px;" />
					</el-badge>
				</div>
				<div style="margin-right: 40px;">
					<el-badge :value="5" :max="99" class="item">
						<img src="../../assets/remind.png" style="width: 24px;height: 24px;" />
					</el-badge>
				</div>
				<el-popover trigger="hover">
					<div class="hoverDiv">
						<div class="title">{{userInfo.user.nickname}}</div>
						<div class="idClass">ID {{userInfo.user.userId}}</div>
						<div style="display: flex;align-items: center;margin-top: 22px;">
							<img src="../../assets/seek/shen.png"
								style="width: 22px;height: 22px;margin-right: 10px;" />
							<img src="../../assets/seek/bao.png" style="width: 18px;height: 18px;margin-right: 10px;" />
						</div>
						<div style="display: flex;margin-top: 66.75px;margin-left: 17.77px;" @click="loginOut">
							<img src="../../assets/loginOut.png" style="width: 18.45px;height: 19.95px;" />
							<div style="margin-left: 10px;color: #9E9EA7;">安全退出</div>
						</div>
					</div>
					<div @click="openUserInfo()" class="userHeadAvatar" slot="reference">
						<img :src="userInfo.user.userAvatar" style="width: 42px;height: 42px;border-radius: 50%;" />
					</div>
				</el-popover>
			</div>

			<!-- /用户信息区 -->
		</div>
	</div>
</template>

<script>
	import {
		userId,
		loginOut
	} from '@/api/user'
	import {
		mapState
	} from 'vuex'
	export default {
		name: 'Header',
		data() {
			return {

			}
		},
		computed: {
			...mapState(['userKey', 'userInfo']) // 读取用户信息
		},
		methods: {
			//用户登出
			loginOut() {
				this.$confirm('此操作将退出登录, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					loginOut().then(res => {
						if(res.status == 200){
							this.$store.commit('LogOut')
							location.href = '/'
							this.$message({
								type: 'success',
								message: res.data.msg
							})
						}
					})
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消'
					})
				})
			},
			// 用户注册 
			register() {
				this.$router.push({
					path: '/login',
					query: {
						register: true
					}
				})
			},
			// 去用户详情页
			openUserInfo() {
				this.$router.push({
					path: '/userInfo'
				})
			},

			// 获取用户详情
			async getUserInfo() {
				try {
					const {
						res
					} = await userId(this.userKey)
					// this.$store.commit('setUserInfo')
					console.log('获取用户详情', res)
				} catch (err) {
					console.log(err)
				}
			}
		},
		created() {
			// if (this.userKey){
			// 	this.getUserInfo()
			// }
		}
	}
</script>

<style lang="less">
	.userHeadAvatar {
		width: 42px;
		height: 42px;
		border-radius: 24px;
		background: url('~@/assets/avatar.png') no-repeat;
		background-size: 100%;
	}

	.el-popover {
		padding: 0px !important;
	}

	.hoverDiv {
		min-width: 160px;
		height: 213px;
		background: #FFFFFF;
		box-shadow: 0px 2px 20px 0px #00000019;
		color: #6E6D7A;
		font-family: PingFang SC;
		font-weight: medium;
		font-size: 14px;
		line-height: normal;
		letter-spacing: 0px;
		padding: 20px;
		box-sizing: border-box;

		.title {}

		.idClass {
			font-weight: regular;
			font-size: 12px;
			margin-top: 5px;
		}
	}

	.header-container {
		height: 80px;
		background-color: #fff;

		.layout {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.logo {
				width: 200px;
				height: 80px;

				h1 {
					width: 100%;
					height: 100%;

					a {
						display: block;
						width: 100%;
						height: 100%;
						font-size: 0px;
						background: url('~@/assets/logo.png') no-repeat;
					}
				}
			}

			.user-info {
				display: flex;
				align-items: center;
				font-size: 14px;
				color: #6e6d7a;

				.checked {
					&:hover {
						color: #ea4c89;
					}
				}

				span:not(:nth-child(2)) {
					cursor: pointer;
				}

				.line {
					width: 1px;
					height: 18px;
					background-color: #e7e7e9;
				}

				.register {
					width: 60px;
					height: 40px;
					border-radius: 8px;
					color: #fff;
					text-align: center;
					line-height: 40px;
					background-color: #ea4c89;

					&:hover {
						background-color: #fc5695;
					}
				}

				span {
					margin-left: 40px;
				}
			}
		}
	}
</style>
