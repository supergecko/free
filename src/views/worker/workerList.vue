<template>
	<div class="listWarp">
		<div class="listFirstWarp">
			<div style="margin-top: 40px;margin-left: 32px;margin-right: 30px;">
				<img src="../../assets/1.jpg" style="width: 170px;height: 170px;" />
			</div>
			<div>
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
				<div style="display: flex;align-items: center;margin-top: 20px;margin-bottom: 20px;">
					<div class="jineng" style="background: #7AC7FF;">擅长</div>
					<div class="jinengLabel labelBlue" v-for="(item,i) in 3">滴滴打车APP</div>
				</div>
			</div>
			<div style="position: absolute;top: 75px;right: 22px;">
				<div class="commonBtn" style="margin-bottom: 20px;">雇佣Ta</div>
				<div class="commonBtn commonWhiteBtn">申请加入</div>
			</div>
		</div>
		<div class="listSecondWarp">
			<div class="listItemTitle">
				<div style="margin-left: 60px;margin-right: 218px;">全部成员（26）</div>
				<div style="margin-right: 55px;">职称</div>
				<div style="margin-right: 80px;">接单数</div>
				<div style="margin-right: 274px;">技能</div>
				<div>操作</div>
			</div>
			
			<div class="listItemWarp" v-for="(item) in 10">
				<div class="listItemWarpText1">
					<img src="../../assets/1.jpg" style="width: 42px;height: 42px;border-radius: 50%;margin-right: 23px;"/>
					<span class="chengyuanName">呼呼呼呼</span>
					<img src="../../assets/worker/huanguan.png" style="width: 19.92px;height: 17.62px;margin-right: 11.18px;" />
					<img src="../../assets/worker/shen.png" style="width:19.64px;height: 14.93px;margin-right: 10.08px;" />
					<img src="../../assets/worker/bao.png" style="width:15.23px;height: 17.22px;" />
				</div>
				<div class="listItemWarpText2">成员</div>
				<div class="listItemWarpText3">4次</div>
				<div class="listItemWarpText4">
					<div class="jinengLabel" v-for="(item,i) in 2" style="color: #FFAA7A ;">PHP</div>
				</div>
				<div class="listItemWarpText5">在线联系</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.listWarp{
		width: 1000px;
		margin: 0 auto;
		padding-top: 40px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.worerInfo {
		color: #726B6B;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 14px;
		line-height: normal;
		letter-spacing: 0px;
	}
	.listItemWarp{
		width: 882px;
		height: 42px;
		margin: 0 auto;
		margin-bottom: 20px;
		display: flex;
		align-items: center;
		position: relative;
		
	}
	.chengyuanName{
		color: #3C3C4C;
		font-family: PingFang SC;
		font-weight: medium;
		font-size: 14px;
		line-height: 28px;
		letter-spacing: 0px;
		margin-right: 10px;
	}
	.listItemWarpText1{
		display: flex;
		align-items: center;
	}
	.listItemWarpText2{
		color: #3C3C4C;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 14px;
		line-height: 28px;
		letter-spacing: 0px;
		position: absolute;
		top: 7px;
		left: 319px;
	}
	.listItemWarpText3{
		color: #3C3C4C;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 14px;
		line-height: 28px;
		letter-spacing: 0px;
		position: absolute;
		top: 7px;
		left: 402px;
	}
	.listItemWarpText4{
		display: flex;
		position: absolute;
		left: 524px;
	}
	.listItemWarpText5{
		color: #3C3C4C;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 14px;
		line-height: 28px;
		letter-spacing: 0px;
		position: absolute;
		right: 0px;
		top: 7px;
	}
	.listItemTitle{
		height: 54px;
		display: flex;
		align-items: center;
		color: #262626;
		font-family: PingFang SC;
		font-weight: medium;
		font-size: 14px;
		line-height: 22px;
		letter-spacing: 0px;
		margin-bottom: 10px;
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
	.listFirstWarp{
		width: 1000px;
		height: 250px;
		border-radius: 8px;
		background: #FFFFFF;
		margin-bottom: 24px;
		position: relative;
		display: flex;
	}
	.listSecondWarp{
		border-radius: 8px;
		background: #FFFFFF;
		width: 1000px;
		min-height: 902px;
		margin-bottom: 103px;
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
	.workerId {
		color: #6E6D7A;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 14px;
		line-height: 22px;
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
</style>
