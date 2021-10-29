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
			
			<div style="display: flex;align-items: center;" v-if="userKey">
				<div style="margin-right: 46px;">
					<el-badge :value="5" :max="99" class="item">
						<img  src="../../assets/order.png" style="width: 24px;height: 24px;"/>
					</el-badge>
				</div>
				<div style="margin-right: 40px;">
					<el-badge :value="5" :max="99" class="item">
						<img  src="../../assets/remind.png" style="width: 24px;height: 24px;"/>
					</el-badge>
				</div>
				<div @click="openUserInfo()">
					<img src="../../assets/QR_code.png"  style="width: 42px;height: 42px;border-radius: 50%;"/>
				</div>
			</div>
			
			<!-- /用户信息区 -->
		</div>
	</div>
</template>

<script>
	import { userId } from '@/api/user'
	import { mapState } from 'vuex'
	export default {
		name: 'Header',
		data() {
			return {

			}
		},
		computed: {
			...mapState(['userKey']) // 读取用户信息
		},
		methods: {
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
			openUserInfo(){
				this.$router.push({
					path: '/userInfo'
				})
			},
			
			// 获取用户详情
			async getUserInfo() {
				try {
					const {data} = await userId(this.userKey)
					console.log('获取用户详情', data)
				} catch (err) {
					console.log(err)
				}
			}
		},
		created() {
			this.getUserInfo()
		}
	}
</script>

<style lang="less">
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
