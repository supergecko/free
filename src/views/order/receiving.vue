<template>
	<div class="orderWarp">
		<div class="orderMainWarp">
			<div class="commonText" style="margin-top: 10px;margin-bottom: 8px;">首页&nbsp;/&nbsp;任务详情</div>
			<div class="mainFirstWarp backgroundWhite">
				<div style="margin-left: 40px;">
					<div style="padding-top: 30px;display: flex;align-items: center;position: relative;">
						<span class="orderInfoTitle">{{hireMission.missionName}}</span>
						<div class="dai">代</div>
						<img src="../../assets/1.jpg" style="width: 58px;height: 22px;" />
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
						<span class="commonText" style="color: #595959;">{{hireMission.tendersNum}}</span>
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
					<div style="display: flex; position: absolute; left: 0px; bottom: 35px;align-items: center;">
						<div class="receivingTag">
							<img src="../../assets/loginOut.png" style="width: 17.5px;height: 17.5px;"/>
							<div style="margin-left: 5px;">无法实现 0</div>
						</div>
						<div class="receivingTag">
							<img src="../../assets/loginOut.png" style="width: 17.5px;height: 17.5px;"/>
							<div style="margin-left: 5px;">预算太少 0</div>
						</div>
						<div class="receivingTag">
							<img src="../../assets/loginOut.png" style="width: 17.5px;height: 17.5px;"/>
							<div style="margin-left: 5px;">任务不真实 0</div>
						</div>
						<div class="receivingTag">
							<img src="../../assets/loginOut.png" style="width: 17.5px;height: 17.5px;"/>
							<div style="margin-left: 5px;">需求不详细 0</div>
						</div>
						<div class="jiedan" style="margin-right: 20px;margin-left: 139px;">
							<span>接单要求：</span>
							<span style="color: #595959;">个人</span>
						</div>
						<div class="taskBTnRed">
							投标竞价
						</div>
						<div class="taskBTn" style="color: #EA4C89;" v-if="false">
							<i class="el-icon-edit"></i>
							修改投标
						</div>
					</div>
				</div>
			</div>
			<div class="mainSecondWarp backgroundWhite">
				
			</div>
		</div>
		<div class="orderRightWarp">
			<div class="rightFirstWarp backgroundWhite">
				<img src="../../assets/1.jpg" class="rightFirstImg" />
				<div class="rightFirstName">张飞</div>
				<div>
					<img src="../../assets/orderInfo/phone.png" style="width: 30px;height: 30px;margin-right: 20px;"/>
					<img src="../../assets/orderInfo/notPhone.png" style="width: 30px;height: 30px;margin-right: 20px;" v-if="false"/>
					
					<img src="../../assets/orderInfo/email.png" style="width: 30px;height: 30px;margin-right: 20px;"/>
					<img src="../../assets/orderInfo/notEmail.png" style="width: 30px;height: 30px;margin-right: 20px;"  v-if="false"/>
					
					<img src="../../assets/orderInfo/shen.png" style="width: 30px;height: 30px;"/>
					<img src="../../assets/orderInfo/notShen.png" style="width: 30px;height: 30px;"  v-if="false"/>
				</div>
				<div class="liulan">查看联系方式</div>
			</div>
			<div class="rightSecondWarp backgroundWhite">
				<div style="display: flex;align-items: center;padding-top: 20px;padding-left: 28px;">
					<div class="redDian"></div>
					<div class="tuijian">相似任务</div>
				</div>
				<div style="height: 310px;overflow: hidden;">
					<div style="display: flex;padding-left: 28px;margin-top: 20px;align-items: center;" v-for="(item) in 5">
						<div class="taskContent">需要做一套嵌入式...需要做一套嵌入式...</div>
						<div class="taskPrice">¥30000</div>
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
		name: 'orderReceiving',
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
	.receivingTag{
		color: #6E6D7A;
		font-family: PingFang SC;
		font-weight: medium;
		font-size: 14px;
		line-height: 22px;
		letter-spacing: 0px;
		display: flex;
		align-items: center;
		margin-left: 40px;
	}
	.taskBTnRed{
		width: 100px;
		height: 36px;
		border-radius: 8px;
		background: #EA4C89;
		color: #FFFFFF;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 14px;
		line-height: 36px;
		letter-spacing: 0px;
		text-align: center;
	}
	.redDian{
		background: #EA4C89;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		margin-right: 10px;
	}
	.jiedan{
		color: #6E6D7A;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 14px;
		line-height: normal;
		letter-spacing: 0px;
	}
	.rightFirstImg{
		width: 100px;height: 100px;margin-top: 30px;border: 1px solid #F4F4F4;
		border-radius: 50%;
	}
	.taskContent{
		color: #6E6D7A;
		font-family: PingFang SC;
		font-weight: medium;
		font-size: 16px;
		letter-spacing: 0px;
		white-space:nowrap;
		overflow:hidden;
		text-overflow:ellipsis;
		width: 141px;
		margin-right: 43px;
	}
	.taskPrice{
		color: #EA4C89;
		font-family: PingFang SC;
		font-weight: medium;
		font-size: 16px;
		letter-spacing: 0px;
	}
	.tuijian{
		color: #262626;
		font-family: PingFang SC;
		font-weight: bold;
		font-size: 16px;
		line-height: normal;
		letter-spacing: 0px;
	}
	.huanBtn{
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
	.rightFirstName{
		color: #6E6D7A;
		font-family: PingFang SC;
		font-weight: medium;
		font-size: 20px;
		line-height: 22px;
		letter-spacing: 0px;
		margin: 20px 0px;
	}
	.liulan{
		width: 140px;
		height: 40px;
		border-radius: 8px;
		background: #FDECF3;
		color: #EA4C89;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 16px;
		line-height: 40px;
		letter-spacing: 0px;
		text-align: center;
		margin-top: 25px;
	}
	.taskBTn{
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
	.orderMiaoShu{
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
	.line{
		background: #E8E8E8;
		width: 875px;
		height: 0.5px;
		margin-top: 94px;
	}
	.fujian{
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
		overflow: hidden;
	}

	.rightSecondWarp {
		width: 300px;
		height: 376px;
		margin-top: 24px;
	}

	.mainFirstWarp {
		width: 955px;
		height: 720px;
		position: relative;	
	}

	.mainSecondWarp {
		width: 955px;
		height: 288px;
		margin-top: 24px;
		margin-bottom: 50px;
	}

	.backgroundWhite {
		border-radius: 8px;
		background: #FFFFFF;
	}
</style>
