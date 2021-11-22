<template>
	<div class="orderWarp">
		<div class="orderMainWarp">
			<div class="commonText" style="margin-top: 10px;margin-bottom: 8px;">首页&nbsp;/&nbsp;任务详情</div>
			<div class="mainFirstWarp backgroundWhite">
				<div style="margin-left: 40px;">
					<div style="padding-top: 30px;display: flex;align-items: center;position: relative;">
						<span class="orderInfoTitle">{{hireMission.missionName}}</span>
						<div class="dai">代</div>
						<img src="../../assets/recruit.gif" style="width: 58px;height: 22px;" />
						<div class="commonText"
							style="display: flex;align-items: center;position: absolute;right: 40px;">
							<span>任务编号：{{hireMission.missionId}}</span>
							<span class="share">
								<i class="iconfont icon-fenxiang"></i>
								分享
							</span>
						</div>
					</div>
					<div style="margin-top: 20px;">
						<span class="commonText" style="color: #6E6D7A;margin-right: 40px;">
							<i class="el-icon-location"></i>中国-深圳
						</span>
						<span class="commonText" style="color: #6E6D7A;margin-right: 40px;">
							<i class="el-icon-watch" style="color: #EA4C89;"></i>发布于 {{hireMission.releaseDate}}
						</span>
						<span class="commonText" style="color: #6E6D7A;">接单要求：</span>
						<span class="commonText" style="color: #595959;margin-right: 40px;">个人</span>
						<span class="commonText" style="color: #6E6D7A;">投标数：</span>
						<span class="commonText" style="color: #595959;">24/50人</span>
					</div>
					<div style="display: flex;align-items: center;margin-top: 60px;">
						<span class="commonText">预计时间：</span>
						<span class="commonText" style="font-weight: medium;font-size: 20px;">{{hireMission.missionCycle}}</span>
					</div>
					<div style="display: flex;align-items: center;margin-top: 10px;">
						<span class="commonText">预计价格：</span>
						<span class="commonText" style="font-weight: medium;font-size: 20px;">{{hireMission.missionBudgets}}</span>
					</div>
					<div style="display: flex;align-items: center;margin-top: 10px;">
						<span class="commonText">任务标签：</span>
						<div class="jinengLabel" v-for="(item,i) in missionType" :key="i">{{item}}</div>
					</div>
					<div class="orderInfoTitle" style="color: #262626;margin-top: 61px;">任务描述：</div>
					<div class="orderMiaoShu">
						{{hireMission.missionProfile}}
					</div>
					<div style="margin-top: 60px;">
						<span class="orderInfoTitle" style="#262626">附件：</span>
						<span class="fujian">
							<i class="el-icon-link" style="color: #EA4C89;margin-right: 5px;"></i>查看附件
						</span>
					</div>
					<div class="line"></div>
					<div style="display: flex; position: absolute; right: 40px; bottom: 35px;">
						<div class="taskBTn" style="color: #EA4C89;margin-right: 20px;">
							放弃任务
						</div>
						<div class="taskBTn" style="color: #EA4C89;">
							<i class="el-icon-edit"></i>
							修改任务
						</div>
					</div>
				</div>
			</div>
			<div class="mainSecondWarp backgroundWhite">
				<div class="toubiaoTitle">投标列表</div>
				<div class="bidItemWarp" v-for="(item) in 3">
					<div style="display: flex;align-items: center;justify-content: space-between;">
						<div style="display: flex;align-items: center;">
							<img src="../../assets/1.jpg"
								style="width: 50px;height: 50px;border-radius: 50%;margin-right: 10px;" />
							<div>
								<div style="display: flex;align-items: center;">
									<div class="bidName">凤凰士大夫</div>
									<div class="bidSlogan">UI设计</div>
									<div class="star">
										<img src="../../assets/orderInfo/star.png" style="width: 16px;height: 15px;" />
										<span style="margin-left: 2px;">4.7</span>
									</div>
								</div>
								<div class="bidContent">张飞 | 成员人数999</div>
							</div>
						</div>
						<div style="display: flex;align-items: center;">
							<div class="chakanBtn">查看联系方式</div>
							<div class="contactBtn">在线沟通</div>
							<div class="guyongBTn">直接雇佣</div>
						</div>
					</div>
					<div class="bidMainWarp">
						<div style="position: relative;">
							<div style="position: absolute;left: 60px;top: 10px;">
								<span class="bidMainTextGray">工期：</span>
								<span class="bidMainTextRed">30天</span>
							</div>
							<div style="position: absolute;left: 197px;top: 10px;">
								<span class="bidMainTextGray">任务标价：</span>
								<span class="bidMainTextRed">320000元</span>
							</div>
							<div style="position: absolute;left: 482px;top: 12px;">
								<span class="bidMainTextGray"
									style="font-size: 12px;color: #000000A5;">参与投标号：82910228</span>
							</div>
							<div style="position: absolute;left: 652px;top: 12px;">
								<span class="bidMainTextGray" style="font-size: 12px;color: #000000A5;">提交时间：2021-03-24
									17:02</span>
							</div>
						</div>
						<div class="bidMainTextGray" style="padding-top: 42px;padding-left: 60px;">投标说明：</div>
						<div class="bidMainContent">200人团队，专注于网页开发，行业20年经验，200人团队，专注于网页开发，行业20年经验，200人团队，专注于网页开发，行业20年经验，200人团队，专注于网页开发</div>
					</div>
				</div>
			</div>
		</div>
		<div class="orderRightWarp">
			<div class="rightFirstWarp backgroundWhite">
				<img src="../../assets/1.jpg" class="rightFirstImg" />
				<div class="rightFirstName">张飞</div>
				<div>
					<img src="../../assets/orderInfo/phone.png" style="width: 30px;height: 30px;margin-right: 20px;" />
					<img src="../../assets/orderInfo/notPhone.png" style="width: 30px;height: 30px;margin-right: 20px;"
						v-if="false" />

					<img src="../../assets/orderInfo/email.png" style="width: 30px;height: 30px;margin-right: 20px;" />
					<img src="../../assets/orderInfo/notEmail.png" style="width: 30px;height: 30px;margin-right: 20px;"
						v-if="false" />

					<img src="../../assets/orderInfo/shen.png" style="width: 30px;height: 30px;" />
					<img src="../../assets/orderInfo/notShen.png" style="width: 30px;height: 30px;" v-if="false" />
				</div>
				<div class="liulan">浏览：82</div>
			</div>
			<div class="rightSecondWarp backgroundWhite">
				<div
					style="display: flex;align-items: center;padding-top: 20px;padding-left: 28px;margin-bottom: 25px;">
					<div class="tuijian">为您推荐</div>
					<div class="huanBtn">
						换一批
						<i class="el-icon-refresh"></i>
					</div>
				</div>
				<div class="taskItem" v-for="(item) in 3">
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
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	import {taskInfo} from '@/api/task'
	export default {
		name: 'orderHire',
		data() {
			return {
				hireMission:{} ,//任务详情
				missionType:[]
			}
		},
		computed: {
			...mapState(['userInfo']) // 读取用户信息
		},
		methods: {
			// 任务详情
			getMissionInfo() {
				let missionId = this.$route.query.missionId
				taskInfo(missionId).then(res => {
					if (res.data.code === 200) {
						this.hireMission = res.data.data.hireMission
						this.missionType = res.data.data.hireMission.missionType.split(',')
					}
				})
			}
		},
		created() {
			this.getMissionInfo()
		}
	}
</script>

<style>
	.orderWarp {
		width: 1280px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
	}
	.bidMainContent{
		width: 760px;
		height: 50px;
		color: #3C3C4C;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 18px;
		letter-spacing: 0px;
		line-height: normal;
		word-break: break-all;
		text-overflow: ellipsis;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		margin: 0 auto;
		margin-top: 5px;
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

	.bidMainWarp {
		width: 874px;
		height: 142px;
		margin-top: 20px;
		border-radius: 8px;
		background: #F9F8FD;
	}

	.bidMainTextGray {
		color: #6E6D7A;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 14px;
		line-height: 22px;
		letter-spacing: 0px;
	}

	.bidMainTextRed {
		color: #EA4C89;
		font-family: PingFang SC;
		font-weight: medium;
		font-size: 16px;
		line-height: normal;
		letter-spacing: 0px;
	}

	.chakanBtn {
		border-radius: 8px;
		border: 1px solid #EEEEEE;
		width: 120px;
		height: 36px;
		color: #FFFFFF;
		color: #262626;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 14px;
		line-height: 36px;
		letter-spacing: 0px;
		text-align: center;
		margin-right: 10px;
	}

	.contactBtn {
		width: 100px;
		height: 36px;
		order-radius: 8px;
		border: 1px solid #EEEEEE;
		color: #262626;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 14px;
		line-height: 36px;
		letter-spacing: 0px;
		text-align: center;
		margin-right: 10px;
	}

	.guyongBTn {
		width: 100px;
		height: 36px;
		line-height: 36px;
		border-radius: 8px;
		background: #EA4C89;
		color: #FFFFFF;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 14px;
		letter-spacing: 0px;
		text-align: center;
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

	.star {
		color: #F7B500;
		font-family: PingFang SC;
		font-weight: medium;
		font-size: 12px;
		letter-spacing: 0px;
		display: flex;
		align-items: center;
	}

	.toubiaoTitle {
		color: #0D0C22;
		font-family: PingFang SC;
		font-weight: medium;
		font-size: 14px;
		line-height: 24px;
		letter-spacing: 0px;
		height: 48px;
		line-height: 48px;
		padding-left: 40px;
		border-bottom: 1px solid #E8E8E8;
	}

	.bidItemWarp {
		width: 874px;
		height: 212px;
		margin: 40px auto;
	}

	.rightFirstImg {
		width: 100px;
		height: 100px;
		margin-top: 30px;
		border: 1px solid #F4F4F4;
		border-radius: 50%;
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

	.labelOrange {
		background: #FFFFFF !important;
		color: #FFAA7A;
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

	.taskItem {
		width: 243px;
		height: 97px;
		margin: 0 auto;
		margin-bottom: 30px;
	}

	.tuijian {
		color: #262626;
		font-family: PingFang SC;
		font-weight: bold;
		font-size: 16px;
		line-height: normal;
		letter-spacing: 0px;
	}

	.huanBtn {
		border-radius: 18px;
		background: #FFFFFF;
		border: 1px solid #E0E0E0;
		width: 70px;
		height: 24px;
		color: #9B9B9B;
		font-family: PingFang SC;
		font-weight: medium;
		font-size: 12px;
		line-height: 24px;
		letter-spacing: 0px;
		text-align: center;
		margin-left: 109px;

	}

	.rightFirstName {
		color: #6E6D7A;
		font-family: PingFang SC;
		font-weight: medium;
		font-size: 20px;
		line-height: 22px;
		letter-spacing: 0px;
		margin: 20px 0px;
	}

	.liulan {
		color: #8E8E8E;
		font-family: PingFang SC;
		font-weight: medium;
		font-size: 20px;
		line-height: 22px;
		letter-spacing: 0px;
		margin-top: 30px;
	}

	.taskBTn {
		width: 100px;
		height: 36px;
		border-radius: 8px;
		background: #FDECF3;
		color: #EA4C89;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 14px;
		line-height: normal;
		letter-spacing: 0px;
		text-align: center;
		line-height: 36px;
	}

	.orderMiaoShu {
		width: 875px;
		height: 100px;
		color: #6E6D7A;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 18px;
		line-height: normal;
		letter-spacing: 0px;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-top: 10px;
	}

	.line {
		background: #E8E8E8;
		width: 875px;
		height: 0.5px;
		margin-top: 94px;
	}

	.fujian {
		border-radius: 2px;
		background: #FFFFFF;
		border: 1px solid #E8E8E8;
		width: 94px;
		height: 24px;
		color: #000000A5;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 14px;
		line-height: 22px;
		letter-spacing: 0px;
		padding: 2px 5px;
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

	.dai {
		border-radius: 11px;
		background: linear-gradient(180deg, #FF9AC1 0%, #EA4C89 100%);
		width: 22px;
		height: 22px;
		color: #FFFFFF;
		font-family: PingFang SC;
		font-weight: heavy;
		font-size: 12px;
		line-height: 20px;
		letter-spacing: 0px;
		text-align: center;
		line-height: 22px;
		margin-right: 10px;
		margin-left: 10px;
	}

	.share {
		width: 50px;
		height: 20px;
		border: 0.5px solid #bfbecb;
		border-radius: 10px;
		padding: 0 4px;
		margin-left: 25px;
		cursor: pointer;
		color: #6E6D7A;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 10px;
	}

	.iconfont {
		font-size: 12px;
	}

	.orderInfoTitle {
		font-family: PingFang SC;
		font-weight: bold;
		font-size: 20px;
		line-height: 22px;
		letter-spacing: 0px;
		color: #474747;
	}

	.commonText {
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 14px;
		line-height: 22px;
		letter-spacing: 0px;
		color: #000000A5
	}

	.rightFirstWarp {
		width: 300px;
		height: 320px;
		margin-top: 40px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.rightSecondWarp {
		width: 300px;
		height: 456px;
		margin-top: 24px;
	}

	.mainFirstWarp {
		width: 955px;
		height: 720px;
		position: relative;
	}

	.mainSecondWarp {
		width: 955px;
		min-height: 999px;
		margin-top: 24px;
		margin-bottom: 50px;
		padding-bottom: 10px;
	}

	.backgroundWhite {
		border-radius: 8px;
		background: #FFFFFF;
	}
</style>
