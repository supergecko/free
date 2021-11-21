<template>
	<div class="home-container">
		<!-- 主要区 -->
		<freeMain />
		<!-- /主要区 -->
		<div class="home-content layout clearfix">
			<div class="list">
				<div class="list-header">
					<span class="title">任务列表</span>
					<div class="sort">
						<span>
							价格<i class="el-icon-d-caret"></i>
						</span>
						<span>
							最新<i class="el-icon-d-caret"></i>
						</span>
						<span>
							综合<i class="el-icon-d-caret"></i>
						</span>
					</div>
				</div>
				<!-- 任务列表每项 -->
				<div class="list-item" v-for="(item, index) in taskList" :key="index">
					<div class="item-top">
						<div class="left-wrap" @click="goToOrderInfo(item.hireMission.missionId)">
							<div class="avatar">
								<img :src="item.userAvatar" style="width: 48px;height: 48px;border-radius: 50%;" />
							</div>
							<div>
								<p class="title">{{item.hireMission.missionName}}</p>
								<div class="info">
									<span class="name">
										<i class="el-icon-user-solid"></i>
										小明
									</span>&nbsp;
									<span class="location">
										<i class="el-icon-location"></i>
										中国-深圳
									</span>&nbsp;
									<span class="time">
										<i class="iconfont icon-shijian"></i>
										{{item.hireMission.releaseDate}}
									</span>
								</div>
							</div>
						</div>
						<div class="price">
							<span>价格:</span>&nbsp;
							<span>{{item.hireMission.missionBudgets}}</span>
						</div>
					</div>
					<div class="item-middle">
						<div class="item-content">
							{{item.hireMission.missionProfile}}
						</div>
					</div>
					<div class="item-bottom">
						<div>
							<el-tag type="success" v-if="item.hireMission.substitute==1">
								代发
							</el-tag>
							<el-tag type="info">
								{{item.hireMission.biddingMethod==0? "通用":item.hireMission.biddingMethod == 1 ? "个人":"团队"}}
							</el-tag>
							<el-tag type="warning">{{item.hireMission.missionType}}</el-tag>
							<el-tag type="danger">{{item.hireMission.missionCycle}}</el-tag>
						</div>
						<div>
							<span>投标数: {{item.hireMission.tendersNum}}/50人</span>
							<span class="share">
								<i class="iconfont icon-fenxiang"></i>
								分享
							</span>
						</div>
					</div>

				</div>
				<!-- /任务列表每项 -->
				<!-- 分页器 -->
				<div class="paging">
					<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
						@prev-click="previousPage" @next-click="nextPage" :current-page.sync="currentPage"
						:page-size="pageSize" layout="prev, pager, next, jumper" :total="total">
					</el-pagination>
				</div>
				<!-- /分页器 -->
			</div>
			<!-- 筛选区 -->
			<div class="filter">
				<div class="keyword">
					<span class="title">关键字:</span>
					<div class="keyword-wrap">
						<el-input v-model="keyword" placeholder="例：App开发、Ui设计等"></el-input>
					</div>
				</div>
				<div class="type flex">
					<span class="title">类型:</span>
					<div class="checked">
						<el-checkbox-group v-model="checkList" @change="changeType">
							<el-checkbox :label="item.typeName" v-for="(item, index) in typeText" :key="index" >{{item.typeName}}</el-checkbox>
						</el-checkbox-group>
					</div>
				</div>
				<div class="budget flex">
					<span class="title">预算:</span>
					<div class="checked">
						<el-checkbox-group v-model="checkList">
							<el-checkbox :label="item" v-for="(item, index) in price" :key="index">
							</el-checkbox>
						</el-checkbox-group>
					</div>
				</div>
				<!-- 筛选按钮 -->
				<div class="my-btn" @click="screenList">筛选结果</div>
				<!-- /筛选按钮 -->
			</div>
			<!-- /筛选区 -->
		</div>
	</div>
</template>

<script>
	import freeMain from '@/components/main' // 主要区
	import {
		mapState
	} from 'vuex'
	import {list,getMissonType} from '@/api/task'

	export default {
		name: 'home',
		components: {
			freeMain
		},
		data() {
			return {
				currentPage: 1, // 默认页码
				keyword: '', // 筛选关键字
				typeText: ['全部', '物联网', 'ui设计', '软件开发', '其它'], // 测试数据
				price: ['全部', '0~5k', '5K~1万', '1万~3万', '3万~5万', '5万以上'], // 测试数据
				checkList: ['全部'],
				taskList: [], // 任务列表数据
				total: 0, // 列表总条数
				pageSize: 5 ,// 页容量
				missionType:'',//类型
			}
		},
		computed: {
			...mapState(['userInfo']) // 读取用户信息
		},
		methods: {
			changeType(e){
				console.log(e)
				let arr = e
				let text = ''
				if(arr.length==1){
					this.missionType = ''
				} else {
					for(let i = 1;i<arr.length;i++){
						text += arr[i] + ','
						this.missionType = text
					}
				}
			},
			//筛选
			screenList(){
				this.currentPage = 1
				this.getList()
			},
			// 查看任务详情
			goToOrderInfo(missionId) {
				// 1技术   0 雇佣
				let pathSrc = ''
				if (this.userInfo.user.userType == '0'){
					pathSrc = `/orderHire?missionId=${missionId}`
				} else {
					pathSrc = `/orderReceiving?missionId=${missionId}`
				}
				this.$router.push({
					path: pathSrc
				})
			},
			// 页容量改变时
			handleSizeChange() {},
			// 当前页改变时
			handleCurrentChange(e) {
				this.currentPage = e
				this.getList()
			},
			// 上一页
			previousPage() {
				this.currentPage--
				this.getList()
				console.log('上一页')
			},
			// 下一页
			nextPage() {
				this.currentPage++
				this.getList()
				console.log('下一页')
			},
			//获取任务类型分类
			getMissonType(){
				getMissonType().then(res=>{
					this.typeText = res.data.data
				})
			},
			// 任务列表
			getList() {
				let data = {
					missionName: this.keyword,
					missionType:this.missionType,
					pageNum: this.currentPage,
					pageSize: this.pageSize
				}
				list(data).then(res => {
					if (res.data.code === 200) {
						this.taskList = res.data.rows
						this.total = res.data.total
						// if (res.data.rows.length < this.pageSize) {
						// 	this.$message('最后一页啦')
						// }
					}
				})
			}
		},
		created() {
			this.getMissonType()
			this.getList()
		}
	}
</script>

<style lang="less">
	.home-container {
		.home-content {
			margin-bottom: 80px;

			.list {
				width: 840px;
				padding-bottom: 45px;
				float: left;
				border-radius: 8px;
				background-color: #fff;

				.list-header {
					width: 100%;
					height: 55px;
					font-size: 14px;
					display: flex;
					align-items: center;
					justify-content: space-between;
					border-bottom: 1px solid #efedf5;

					.title {
						margin-left: 40px;
						color: #0d0c22;
					}

					.sort {
						span {
							margin-right: 40px;
							color: #3c3c43;
							cursor: pointer;

							&:hover {
								color: #ea4c89;
							}
						}
					}
				}

				.list-item {
					box-sizing: border-box;
					padding: 24px 40px 7px;

					&:hover {
						background-color: #f9f8fd;
					}

					.item-top {
						display: flex;
						justify-content: space-between;
						font-size: 14px;
						color: #6e6d7a;

						.price {
							align-self: flex-end;
							display: flex;
							align-items: center;

							span:last-child {
								font-size: 20px;
								color: #ea4c89;
							}
						}

						.left-wrap {
							display: flex;
							align-items: center;

							.avatar {
								width: 48px;
								height: 48px;
								border-radius: 24px;
								margin-right: 12px;
								background: url('~@/assets/avatar.png') no-repeat;
								background-size: 100%;
							}
						}

						.title {
							margin-bottom: 6px;
							color: #0d0c22;
						}

						.info {
							color: #6e6d7a;

							.iconfont {
								font-size: 13px;
								color: #ea4c89;
							}
						}
					}

					.item-middle {
						display: flex;
						justify-content: space-between;
						margin: 12px 0 0 60px;

						.item-content {
							width: 560px;
							height: 75px;
							line-height: 25px;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 3;
							overflow: hidden;
							text-overflow: ellipsis;
							color: #5a5964;
							cursor: pointer;
						}
					}

					.item-bottom {
						margin: 22px 0 20px 60px;
						display: flex;
						justify-content: space-between;
						align-items: center;

						.el-tag {
							height: 22px;
							font-size: 12px;
							line-height: 22px;
							margin-right: 24px;
						}

						div:last-child {
							font-size: 10px;
							color: #6e6d7a;
						}

						.share {
							width: 50px;
							height: 20px;
							border: 0.5px solid #bfbecb;
							border-radius: 10px;
							padding: 0 4px;
							margin-left: 30px;
							cursor: pointer;

							.iconfont {
								font-size: 12px;
							}
						}
					}
				}

				.paging {
					margin-top: 40px;
					text-align: center;

					.el-pager {
						li {
							background: unset;
							border: 1px solid #e7e7e9;
							border-radius: 8px;

							&.active {
								border: 1px solid #ea4c89;
								color: #ea4c89;
							}
						}
					}

					.btn-prev {
						background: unset;
						border: 1px solid #e7e7e9;
						border-radius: 8px;
					}

					.btn-next {
						background: unset;
						border: 1px solid #e7e7e9;
						border-radius: 8px;
					}
				}
			}

			.filter {
				width: 416px;
				float: right;
				box-sizing: border-box;
				padding: 24px 24px 100px;
				border-radius: 8px;
				background-color: #fff;

				.my-btn {
					width: 140px;
					height: 40px;
					background-color: #fdecf3;
					color: #ea4c89;
					border-radius: 8px;
					font-size: 14px;
					text-align: center;
					line-height: 40px;
					cursor: pointer;
					margin: 0 auto;

					&:hover {
						background-color: #ea4c89;
						color: #fff;
					}
				}

				&>div {
					margin-bottom: 40px;
				}

				.title {
					font-size: 14px;
					color: #0d0c22;
				}

				.checked {
					flex: 1;
					margin-left: 24px;
					display: flex;
					flex-wrap: wrap;
					font-size: 14px;

					.checked-item {
						padding: 0 13px;
						height: 24px;
						text-align: center;
						line-height: 24px;
						border-radius: 4px;
						margin-bottom: 3px;
						box-sizing: border-box;
						cursor: pointer;
					}
				}

				.keyword {
					display: flex;
					align-items: center;

					.keyword-wrap {
						height: 40px;
						flex: 1;
						box-sizing: border-box;
						border-radius: 8px;
						overflow: hidden;
						margin-left: 8px;

					}
				}

				.flex {
					display: flex;
				}
			}
		}
	}
</style>
