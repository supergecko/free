<template>
	<div class="seek-container">
		<!-- 主要区 -->
		<freeMain />
		<!-- /主要区 -->

		<!-- 人才内容区 -->
		<div class="talents-content layout">
			<!-- 人才列表 -->
			<div class="talents-list">
				<div class="list-header">
					<div>
						<span class="title" v-for="(item,i) in listHeader" :key="i"
							:class="isFlag == i ? 'active' : '' " @click="changeTitle(i)">
							{{item.title}}
						</span>
					</div>
					<div class="myInput">
						<el-select v-model="value" placeholder="地区" style="width: 100px;margin-right: 10px;" size="mini">
							<el-option v-for="item in options" :key="item.value" :label="item.label"
								:value="item.value">
							</el-option>
						</el-select>
						<el-select v-model="value" placeholder="工作状态" style="width: 100px;margin-right: 40px;" size="mini">
							<el-option v-for="item in options" :key="item.value" :label="item.label"
								:value="item.value">
							</el-option>
						</el-select>
						<div class="sort">
							<span>
								工作年限<i class="el-icon-d-caret"></i>
							</span>
							<span>
								接单数<i class="el-icon-d-caret"></i>
							</span>
							<span>
								评分<i class="el-icon-d-caret"></i>
							</span>
						</div>
					</div>
				</div>

				<div class="personListWarp" v-for="(item) in 7">
					<div style="display: flex;align-items: center;justify-content: space-between;">
						<div style="display: flex;align-items: center;">
							<img src="../../assets/1.jpg"
								style="width: 50px;height: 50px;border-radius: 50%;margin-right: 10px;" />
							<div>
								<div style="display: flex;align-items: center;">
									<div class="bidName">凤凰士大夫</div>
									<img src="../../assets/seek/shen.png" style="width: 22px;height: 22px;margin-right: 10px;"/>
									<img src="../../assets/seek/bao.png" style="width: 18px;height: 18px;margin-right: 10px;"/>
									<img src="../../assets/seek/Rectangle.png" style="width: 18px;height: 18px;margin-right: 3px;"/>
									<span style="color: #3C3C4C;font-size: 12px;">凤凰繁多的开发</span>
								</div>
							</div>
						</div>
						<div style="display: flex;align-items: center;">
							<div class="chakanBtn">
								<img src="../../assets/seek/chat.png" style="width: 18px;height: 18px;"/>
								<span>在线沟通</span>
							</div>
						</div>
					</div>
					<div style="display: flex;align-items: center;justify-content: space-between;">
						<div class="star">
							<img src="../../assets/orderInfo/star.png" style="width: 14px;height: 13px;margin-right: 3px;" />
							<div>4.7</div>
						</div>
						<div style="color: #B7B7B7;font-size: 12px;margin-right: 30px;">接单数:999</div>
					</div>
					<div style="display: flex;align-items: center;margin-bottom: 10px;margin-top:2px;margin-left: 70px;">
						<div class="jineng">技能</div>
						<div class="jinengLabel">PHP</div>
						<div class="jinengLabel">JAVA</div>
					</div>
					<div style="display: flex;align-items: center;margin-left: 70px;">
						<div class="jineng" style="background: #7AC7FF;">作品</div>
						<div class="jinengLabel labelBlue" v-for="(item,i) in 3">滴滴打车APP</div>
					</div>
				</div>
			</div>
			<!-- /人才列表 -->

			<!-- 推广区 -->
			<div class="promote">
				<div class="promoteTitle">最新加入</div>
				<div class="taskItem" v-for="(item) in 6">
					<div style="display: flex;align-items: center;justify-content: space-between;">
						<div style="display: flex;align-items: center;">
							<img src="../../assets/1.jpg" style="width: 40px;height: 40px;border-radius: 50%;" />
							<span class="taskItemName">小明</span>
							<img src="../../assets/worker/shen.png" style="width: 22px;height: 22px;" />
						</div>
						<div class="taskItemAddress">中国·深圳</div>
					</div>
					<div class="taskItemContent">4年经验 | 全职/兼职</div>
					<div style="display: flex;align-items: center;">
						<div class="jineng">技能</div>
						<div class="jinengLabel labelOrange" v-for="(item) in 3">PHP</div>
					</div>
				</div>
				<div class="huanBtn">
					换一批
					<i class="el-icon-refresh"></i>
				</div>
			</div>
			<!-- /推广区 -->
		</div>
		<!-- /人才内容区 -->
	</div>
</template>

<script>
	import freeMain from '@/components/main' // 主要区

	export default {
		name: 'seek',
		components: {
			freeMain
		},
		data() {
			return {
				listHeader: [{
						title: '个人列表',
						id: 0
					},
					{
						title: '团队列表',
						id: 1
					},
				],
				isFlag: 0, //标题选择
				options: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}, {
					value: '选项3',
					label: '蚵仔煎'
				}, {
					value: '选项4',
					label: '龙须面'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}],
				value: ''
			}
		},
		methods: {
			changeTitle(i) {
				this.isFlag = i
			}
		}
	}
</script>

<style lang="less" scoped>
	.personListWarp{
		width: 747px;
		height: 139px;
		margin: 30px auto;
	}
	.bidName {
		color: #3C3C4C;
		font-family: PingFang SC;
		font-weight: medium;
		font-size: 18px;
		line-height: normal;
		letter-spacing: 0px;
		margin-right: 10px;
	}
	.huanBtn {
		border-radius: 18px;
		background: #FFFFFF;
		border: 1px solid #E0E0E0;
		width: 100px;
		height: 36px;
		color: #9B9B9B;
		font-family: PingFang SC;
		font-weight: medium;
		font-size: 14px;
		line-height: 36px;
		letter-spacing: 0px;
		text-align: center;
		margin: 0 auto;
	}
	.promoteTitle{
		color: #000000;
		text-align: center;
		margin-top: 17px;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 14px;
		margin-bottom: 27px;
	}
	.bidSlogan {
		height: 18px;
		border-radius: 4px;
		background: #EA4C89;
		color: #FFFFFF;
		font-family: PingFang SC;
		font-weight: bold;
		font-size: 12px;
		line-height: normal;
		letter-spacing: 0px;
		padding: 0 5px;
		margin-right: 10px;
	}
	.bidContent {
		color: #726B6B;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 14px;
		line-height: normal;
		letter-spacing: 0px;
		margin-top: 5px;
	}
	.chakanBtn {
		border: 1px solid #EEEEEE;
		width: 100px;
		height: 36px;
		color: #262626;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 14px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.star {
		color: #F7B500;
		font-family: PingFang SC;
		font-weight: medium;
		font-size: 12px;
		letter-spacing: 0px;
		display: flex;
		align-items: center;
		height: 22px;
		margin-left: 7px;
		margin-top: 7px;
	}
	.jineng{
		border-radius: 4px 0px 0px 4px;
		background: #FFAA7A;
		width: 37px;
		height: 22px;
		color: #FFFFFF;
		font-family: PingFang SC;
		font-weight: medium;
		font-size: 12px;
		line-height: 22px;
		letter-spacing: 0px;
		text-align: center;
	}
	.jinengLabel{
		border-radius: 4px;
		border: 0.5px solid #FFAA7A;
		height: 22px;
		color: #FFAA7A;
		font-family: PingFang SC;
		font-weight: medium;
		font-size: 12px;
		line-height: 22px;
		letter-spacing: 0px;
		text-align: center;
		margin-right: 5px;
		padding: 0 4px;
	}
	.labelBlue{
		border: 0.5px solid #7AC7FF;
		color: #7AC7FF;
	}
	.myInput{
		display: flex;
		align-items: center;
		.el-input input{
			border-radius: 4px;
			background: #FFFFFF;
			border: 0.5px solid #E0E0E0;
			height: 34px;
		}
	}
	.list-header {
		width: 100%;
		height: 56px;
		font-size: 14px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 31px;
		.title {
			margin-left: 40px;
			color: #0d0c22;
			padding-bottom: 16px;
		}

		.active {
			color: #EA4C89;
			border-bottom: 2px solid #EA4C89;
		}

		.sort {
			span {
				margin-right: 40px;
				color: #3C3C4C;
				cursor: pointer;

				&:hover {
					color: #ea4c89;
				}
			}
		}
	}

	.seek-container {
		.talents-content {
			display: flex;
			justify-content: space-between;
			margin-bottom: 69px;
			border-radius: 8px;

			.talents-list {
				width: 955px;
				min-height: 1293px;
				background-color: #fff;

				.talents-item {
					width: 520px;
					height: 238px;
					border: 1px solid #f7f7f7;
					border-radius: 8px;
					box-sizing: border-box;
					padding: 28px 22px 22px 32px;

					.item-top {
						display: flex;

						.avatar {
							width: 80px;
							height: 80px;
							background: url('~@/assets/avatar.png') no-repeat;
							background-size: 100%;
							border-radius: 80px;
							margin-right: 24px;
						}

						.info {
							.name {
								font-size: 18px;
							}

							.details {
								display: block;
								font-size: 14px;
								color: #726b6b;
								margin: 7px 0;
							}

							.tag {
								.el-tag {
									height: 22px;
									line-height: 22px;
									margin-right: 20px;
								}
							}

							.about {
								font-size: 14px;

								&:first-child p {
									color: #726b6b;
								}

							}
						}
					}
				}
			}

			.promote {
				width: 300px;
				height: 964px;
				background-color: #fff;
				.taskItem {
					width: 243px;
					height: 97px;
					margin: 0 auto;
					margin-bottom: 40px;
					div{
						.taskItemName {
							color: #3C3C4C;
							font-family: PingFang SC;
							font-weight: medium;
							font-size: 18px;
							line-height: normal;
							letter-spacing: 0px;
							margin-left: 11px;
							margin-right: 11.8px;
						}
						.taskItemAddress {
							color: #ABABAB;
							font-family: PingFang SC;
							font-weight: regular;
							font-size: 12px;
							line-height: normal;
							letter-spacing: 0px;
						}
					}
					.taskItemContent {
						color: #726B6B;
						font-family: PingFang SC;
						font-weight: regular;
						font-size: 14px;
						line-height: normal;
						letter-spacing: 0px;
						margin-top: 10px;
						margin-bottom: 5px;
					}
					.jineng {
						border-radius: 4px 0px 0px 4px;
						background: #FFAA7A;
						width: 37px;
						height: 22px;
						color: #FFFFFF;
						font-family: PingFang SC;
						font-weight: medium;
						font-size: 12px;
						line-height: 22px;
						letter-spacing: 0px;
						text-align: center;
					}
					.jinengLabel {
						border-radius: 4px;
						border: 0.5px solid #F0F0F0;
						background: #F0F0F0;
						height: 22px;
						color: #6E6D7A;
						font-family: PingFang SC;
						font-weight: medium;
						font-size: 12px;
						line-height: 22px;
						letter-spacing: 0px;
						text-align: center;
						margin-right: 10px;
						padding: 0 4px;
					}
					.labelOrange {
						background: #FFFFFF !important;
						color: #FFAA7A;
						border: 0.5px solid #FFAA7A;
						height: 22px;
						box-sizing: border-box;
					}
				}
			}
		}
	}
</style>
