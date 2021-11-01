<template>
	<div class="workerWarp">
		<div class="workerHead">
			<div class="workerFirstWarp">
				<div style="position: relative;">
					<img src="../../assets/1.jpg" style="width: 170px;height: 170px;border-radius: 50%;" />
					<div class="huangguanWarp">
						<img src="../../assets/worker/huanguan.png"
							style="width: 30.07px;height: 26.61px;border-radius: 50%;" />
					</div>
				</div>
				<div style="margin-top: 30px;">
					<div class="smallTitle">接单数</div>
					<div class="smallNum">999</div>
				</div>
				<div style="margin-top: 30px;">
					<div class="smallTitle">成交金额</div>
					<div class="smallNum">12.0万</div>
				</div>
			</div>
			<div class="workerSecondWarp">
				<div style="display: flex;align-items: center;margin-top: 66px;">
					<div class="workerName">华神科技</div>
					<div class="itemSlogan">UI设计</div>
				</div>
				<div class="workerId" style="margin-top: 5px;">ID:54566556</div>
				<div class="worerInfo" style="margin-top: 5px;">
					<span>张飞&nbsp;|</span>
					<span>&nbsp;2021年成立&nbsp;|</span>
					<span>&nbsp;成员人数 999</span>
				</div>
				<div style="display: flex;align-items: center;margin-top: 20px;">
					<img src="../../assets/1.jpg" style="width: 30px;height: 30px;border-radius: 50%;margin-right: 5px;" v-for="(item) in 10"/>
					<span class="quanbu" @click="goToWorkerList()">全部成员>></span>
				</div>
				<div style="display: flex;align-items: center;margin-top: 40px;margin-bottom: 20px;">
					<div class="jineng" style="background: #7AC7FF;">擅长</div>
					<div class="jinengLabel labelBlue" v-for="(item,i) in 3">滴滴打车APP</div>
				</div>
				<div class="workerText">
					团队简介：专注前端开发，欢迎骚扰~专注前端开发，欢迎骚扰~专注前端开发，欢迎骚扰~专注前端开发，欢迎骚扰~专注前端开发，欢迎骚扰~专注前端开发，欢迎骚扰~专注前端开发，欢迎骚扰~专注前端开发，欢迎骚扰~专注前端开发，欢迎骚扰~
				</div>
				<div style="margin-top: 32px;display: flex;">
					<div class="commonBtn">雇佣Ta</div>
					<div class="commonBtn commonWhiteBtn">联系团长</div>
					<div class="commonBtn commonWhiteBtn">申请加入</div>
				</div>
			</div>
			<div class="loveStart">
				<div style="margin-right: 8px;">1.0w</div>
				<img src="../../assets/worker/like.png" style="width: 30px;height: 30px;"/>
			</div>
		</div>
		<div class="workerContent">
			<div style="display: flex;align-items: center;margin-top: 37px;">
				<div style="display: flex;flex-direction: column;align-items: center;margin-left: 160px;margin-right: 142px;">
					<div class="rateTitle">沟通能力</div>
					<el-rate v-model="value1" disabled  text-color="#F7B500"></el-rate>
					<div class="rateText">4分</div>
				</div>
				<div style="display: flex;flex-direction: column;align-items: center;margin-right: 142px;">
					<div class="rateTitle">响应速度</div>
					<el-rate v-model="value2" disabled  text-color="#F7B500"></el-rate>
					<div class="rateText">5分</div>
				</div>
				<div style="display: flex;flex-direction: column;align-items: center;">
					<div class="rateTitle">服务态度</div>
					<el-rate v-model="value3" disabled  text-color="#F7B500"></el-rate>
					<div class="rateText">2分</div>
				</div>
			</div>
			<div style="display: flex;margin-top: 35px;">
				<div class="rateTotalText" style="margin-left: 339px;margin-right: 119px;">
					<span>综合评分：</span>
					<span style="color: #FA6400;">4.7分</span>
				</div>
				<div class="rateTotalText">
					<span>好评率：</span>
					<span style="color: #000000">97.5%</span>
				</div>
			</div>
			<div class="pingJiaTitle">最新任务评价</div>
			<div class="pingjiaContentWarp" v-for="(item) in 6">
				<div style="display: flex;justify-content: space-between;align-items: center;">
					<div style="display: flex;align-items: center;">
						<img src="../../assets/1.jpg" style="width: 48px;height: 48px;border-radius: 50%;" />
						<div style="margin-left: 5px;">
							<div class="itemTitle">【制作一个购物商城网站】</div>
							<div class="itemInfo">
								<span style="margin-right: 12px;margin-left: 8px;">流动的</span>
								<span style="font-weight: regular;">12小时之前</span>
							</div>
						</div>
					</div>
					<div style="display: flex;">
						<div class="rateTotalText" style="color: #6E6D7A;margin-right: 50px;">
							<span>综合评分：</span>
							<span style="color: #FA6400;">4.7分</span>
						</div>
						<div class="rateTotalText" style="color: #6E6D7A;margin-right: 50px;">
							<span>综合评分：</span>
							<span style="color: #FA6400;">4.7分</span>
						</div>
						<div class="rateTotalText" style="color: #6E6D7A;">
							<span>综合评分：</span>
							<span style="color: #FA6400;">4.7分</span>
						</div>
					</div>
				</div>
				<div class="itemText">
					很棒，反馈问题及时很棒，反馈问题及时很棒，反馈问题及时很棒，反馈问题及时很棒，反馈问题及时很棒，反馈问题及时很棒，反馈问题及时很棒，反馈问题及时很棒，反馈问题及时很棒，反馈问题及时很棒，反馈问题及时很棒，反馈问题及时很棒，反馈问题及时
				</div>
				<div style="display: flex;justify-content: space-between;align-items: center;margin-top: 6px;">
					<div class="huifu">展开回复(0)</div>
					<div class="tuanduichengyuan">
						<div style="margin-right: 10px;color: #000000;">成员(8)</div>
						<div>
							<img src="../../assets/1.jpg"  style="width: 30px;height: 30px;margin-right: 2px;" v-for="(item) in 5"/>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				value1:4,
				value2:5,
				value3:2,
			}
		},
		methods:{
			goToWorkerList(){
				this.$router.push({
					path: '/workerList'
				})
			}
		}
	}
</script>

<style>
	.workerWarp {
		width: 1000px;
		margin: 0 auto;
		padding-top: 40px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.loveStart{
		color: #EA4C89;
		font-family: PingFang SC;
		font-weight: medium;
		font-size: 14px;
		line-height: normal;
		letter-spacing: 0px;
		display: flex;
		align-items: center;
		position: absolute;
		top: 62px;
		right: 33px;
	}
	.tuanduichengyuan{
		display: flex;
		align-items: center;
		height: 35px;
	}
	.itemSlogan{
		border-radius: 4px;
		background: #EA4C89;
		height: 18px;
		color: #FFFFFF;
		font-family: PingFang SC;
		font-weight: bold;
		font-size: 12px;
		line-height: normal;
		letter-spacing: 0px;
		line-height: 18px;
		padding: 0 5px;
	}
	.quanbu{
		color: #6E6D7A;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 14px;
		line-height: 22px;
		letter-spacing: 0px;
	}
	.huifu{
		color: #3C3C4C;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 14px;
		letter-spacing: 0px;
		margin-left: 60px;
	}
	.itemText{
		color: #3C3C4C;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 18px;
		line-height: normal;
		letter-spacing: 0px;
		text-align: left;
		width: 875px;
		height: 75px;
		margin-left: 60px;
		margin-top: 12px;
	}
	.pingJiaTitle{
		color: #C7C6CE;
		font-family: PingFang SC;
		font-weight: heavy;
		font-size: 20px;
		line-height: 22px;
		letter-spacing: 0px;
		text-align: center;
		margin-top: 38px;
		margin-bottom: 35px;
	}
	.itemInfo{
		color: #8C8C8C;
		font-family: PingFang SC;
		font-weight: medium;
		font-size: 14px;
		letter-spacing: 0px;
	}
	.itemTitle{
		color: #EA4C89;
		font-family: PingFang SC;
		font-weight: medium;
		font-size: 14px;
		line-height: 22px;
		letter-spacing: 0px;
		margin-bottom: 4px;
	}
	.pingjiaContentWarp{
		width: 936px;
		height: 187px;
		margin: 0 auto;
		margin-bottom: 30px;
	}
	.rateTotalText{
		color: #000000D8;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 14px;
		line-height: 22px;
		letter-spacing: 0px;
	}
	.rateTitle{
		color: #00000072;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 16px;
		line-height: 24px;
		letter-spacing: 0px;
		text-align: center;
		margin-bottom: 12px;
	}
	.rateText{
		color: #FA6400;
		font-family: PingFang SC;
		font-weight: medium;
		font-size: 16px;
		line-height: 24px;
		letter-spacing: 0px;
		text-align: center;
		margin-top: 12.83px;
	}
	.worerInfo {
		color: #726B6B;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 14px;
		line-height: normal;
		letter-spacing: 0px;
	}

	.commonBtn {
		border-radius: 8px;
		background: #EA4C89;
		color: #FFFFFF;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 16px;
		line-height: normal;
		letter-spacing: 0px;
		text-align: center;
		width: 140px;
		height: 40px;
		line-height: 40px;
		margin-right: 24px;
	}

	.commonWhiteBtn {
		background: #FDECF3;
		color: #EA4C89;
	}

	.workerJianJie {
		display: flex;
		align-items: center;
		color: #6E6D7A;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 16px;
		line-height: normal;
		letter-spacing: 0px;
		margin-top: 30px;
	}

	.workerText {
		color: #6E6D7A;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 16px;
		line-height: normal;
		letter-spacing: 0px;
		text-align: left;
		width: 732px;
		margin-top: 5px;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
		text-overflow: ellipsis;
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

	.labelBlue {
		border: 0.5px solid #7AC7FF;
		color: #7AC7FF;
	}

	.workerId {
		color: #6E6D7A;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 14px;
		line-height: 22px;
		letter-spacing: 0px;
	}

	.ageClass {
		color: #1677FF;
		font-family: PingFang SC;
		font-weight: medium;
		font-size: 14px;
		line-height: normal;
		letter-spacing: 0px;
	}

	.workerTitle {
		color: #262525;
		font-family: PingFang SC;
		font-weight: medium;
		font-size: 12px;
		line-height: normal;
		letter-spacing: 0px;
	}

	.workerName {
		color: #000000D8;
		font-family: PingFang SC;
		font-weight: medium;
		font-size: 20px;
		line-height: 22px;
		letter-spacing: 0px;
		margin-right: 11.25px;
	}

	.huangguanWarp {
		position: absolute;
		left: 60px;
		bottom: -25px;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background: #FFFFFF;
		display: flex;
		justify-content: center;
		align-items: center;

	}

	.workerFirstWarp {
		width: 170px;
		margin-top: 40px;
		margin-left: 32px;
		margin-right: 30px;
	}

	.smallTitle {
		color: #6E6D7A;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 14px;
		line-height: 22px;
		letter-spacing: 0px;
		text-align: center;
	}

	.smallNum {
		color: #EA4C89;
		font-family: PingFang SC;
		font-weight: medium;
		font-size: 20px;
		line-height: 22px;
		letter-spacing: 0px;
		text-align: center;
	}

	.workerHead {
		width: 100%;
		height: 440px;
		border-radius: 8px;
		background: #FFFFFF;
		display: flex;
		position: relative;
	}

	.workerContent {
		width: 1000px;
		min-height: 1140px;
		margin-top: 24px;
		border-radius: 8px;
		background: #FFFFFF;
		margin-bottom: 298px;
	}
</style>
