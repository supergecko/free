<template>
	<div class="userInfoWarp">
		<!-- 左侧 -->
		<div class="leftWarp">
			<div class="leftFirstWarp">
				<img src="../../assets/Artwork.png" alt="" class="" style="width: 300px;height: 200px;margin-top: 50px;">
				<div class="tuiBtn">我要推广</div>
			</div>
			<div class="leftSecondWarp">
				<div class="tableItem" v-for="(item,i) in tableBtnList" :key="i" :class="tableCheckFlag==i?'active':''" @click="checkTable(i)">{{item.title}}</div>
			</div>
		</div>
		<!-- 右侧 -->
		<div class="rightWarp">
			<div class="rightFirstWarp">
				<div class="headInfoWarp">
					<div class="headInfoFirstWarp">
						<div class="userImgWarp">
							<div class="userAvatar">
								<img :src="userInfo.user.userAvatar" style="width: 120px;height: 120px;border-radius: 50%;"/>
							</div>
							<div class="editBtn" @click="editUserInfo()">
								<img src="../../assets/userInfo/xiugai.png" style="width: 13.75px;height: 15.44px;"  />
								<div>修改资料</div>
							</div>
						</div>
						<div class="userInfoRight">
							<div style="display: flex;margin-top: 7px;">
								<div class="pinkText" >{{userInfo.user.nickname}}</div>
								<!-- 勋章图片放此处 -->
								<div style="display: flex;align-items: center;margin-left: 15px;">
									<div class="tuanText">团</div>
									<div class="companyText">你猜我猜不出科技</div>
								</div>
							</div>
							<div class="pinkText">ID: {{userInfo.user.userId}}</div>
							<div class="grayText" style="margin-top: 6px;">粉丝: 8234892人</div>
							<div class="grayText">电话: {{userInfo.user.userPhone}}</div>
							<div style="display: flex;align-items: center;margin-bottom: 10px;margin-top: 5px;" v-if="userInfo.user.userType=='1'">
								<div class="jineng">技能</div>
								<div class="jinengLabel" v-for="(item,i) in specializedSkills" :key="i">{{item}}</div>
							</div>
							<div style="display: flex;align-items: center;" v-if="userInfo.user.userType=='1'">
								<div class="jineng" style="background: #7AC7FF;">作品</div>
								<div class="jinengLabel labelBlue" v-for="(item,i) in specializedProjects" :key="i">{{item}}</div>
							</div>
							<div class="bottomLine"></div>
						</div>
					</div>
					<div class="headInfoSecondWarp" style="display: flex;">
						<div style="margin-left: 20px;margin-top: 175px;">
							<div style="display: flex;align-items: center;margin-top: 10px;">
								<img src="../../assets/userInfo/gou.png" style="width: 17.45px;height: 17.45px;margin-right: 2.28px;"/>
								<div class="gouText">交易担保</div>
							</div>
							<div style="display: flex;align-items: center;margin-top: 10px;">
								<img src="../../assets/userInfo/gou.png" style="width: 17.45px;height: 17.45px;margin-right: 2.28px;"/>
								<div class="gouText">会员特权</div>
							</div>
							<div style="display: flex;align-items: center;margin-top: 10px;">
								<img src="../../assets/userInfo/gou.png" style="width: 17.45px;height: 17.45px;margin-right: 2.28px;"/>
								<div class="gouText">实名认证</div>
							</div>
						</div>
						<div style="margin-left: 60px;">
							<div style="display: flex;align-items: center;margin-top: 14px;">
								<div class="grayText2">可用余额：</div>
								<img src="../../assets/userInfo/openEye.png" style="width: 22px;margin-right: 13px;"/>
								<div class="moneyBtn">充值</div>
								<div class="moneyBtn">体现</div>
							</div>
							<div class="moneyNum">
								<div>483553.00</div>
								<div style="color: black;font-size: 20px;margin-left: 5px;">元</div>
							</div>
							<div style="display: flex;align-items: center;margin-top: 10px;">
								<div class="grayText2">冻结金额：</div>
								<img src="../../assets/userInfo/closeEye.png" style="width: 22px;" />
							</div>
							<div class="moneyNum">
								<div>*******</div>
								<div style="color: black;font-size: 20px;margin-left: 5px;">元</div>
							</div>
							<div class="grayText3" style="margin-top: 38px;">总收入：32423904290</div>
							<div class="grayText3" style="margin-top: 7px;">总支出：32423904290</div>
							<div style="display: flex;align-items: center;color: #A6A6A6;margin-top: 40px;">
								<img src="../../assets/userInfo/Rectangle.png" style="width: 30px;height: 30px;" />
								<div style="margin-left: 14px;">恭喜雨天团队完成项目，获得奖金<span style="color: #EA4C89;">2000.00</span>元</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="rightSecondWarp">
				<div class="renwuTitle">任务累计</div>
				<div style="width: 618px;height: 127px;display: flex;justify-content: space-between;">
					<div style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
						<img src="../../assets/userInfo/Rectangle2.png" style="width: 50px;height: 50px;" />
						<div class="renwuNum">
							<span>2</span>
							<span style="font-size: 15PX;">次</span>
						</div>
						<div class="renwuBottomText">发布任务</div>
					</div>
					<div style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
						<img src="../../assets/userInfo/Rectangle3.png" style="width: 50px;height: 50px;" />
						<div class="renwuNum" style="color: #65C07A;">
							<span>5387</span>
							<span style="font-size: 15PX;">次</span>
						</div>
						<div class="renwuBottomText">个人接单</div>
					</div>
					<div style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
						<img src="../../assets/userInfo/Rectangle4.png" style="width: 50px;height: 50px;" />
						<div class="renwuNum" style="color: #63CDFE;">
							<span>9</span>
							<span style="font-size: 15PX;">次</span>
						</div>
						<div class="renwuBottomText">团队接单</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	export default{
		data(){
			return {
				tableBtnList:[
					{title:'用户资料',id:1},
					{title:'账号管理',id:2},
					{title:'消息管理',id:3},
					{title:'我的关注',id:4},
					{title:'实名认证',id:5},
					{title:'财务管理',id:6},
					{title:'任务管理',id:7},
					{title:'团队管理',id:8}
				],
				tableCheckFlag:0
			}
		},
		computed: {
			...mapState(['userInfo']), // 读取用户信息
			specializedSkills:function(){
				return this.userInfo.user.specializedSkills.split(",")
			},
			specializedProjects:function(){
				return this.userInfo.user.specializedProjects.split(",")
			}
		},
		methods:{
			editUserInfo(){
				this.$router.push({
					path: '/userForm'
				})
			},
			//切换table
			checkTable(index){
				this.tableCheckFlag = index
			}
		}
	}
</script>

<style scoped>
	.headInfoWarp{
		height: 458px;
		margin-left: 30px;
		padding-top: 50px;
	}
	.userAvatar{
		width: 120px;
		height: 120px;
		border-radius: 50%;
		background: url('~@/assets/avatar.png') no-repeat;
		background-size: 100%;
	}
	.renwuNum{
		color: #FF7E7E;
		font-family: SF Pro Display;
		font-weight: regular;
		font-size: 30px;
		line-height: 22px;
		letter-spacing: 0px;
		text-align: center;
		margin-top: 9px;
	}
	.renwuBottomText{
		color: #ACACAC;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 16px;
		line-height: 22px;
		letter-spacing: 0px;
		text-align: center;
		margin-top: 16px;
	}
	.rightSecondWarp{
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}
	.renwuTitle{
		color: #3C3C4C;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 16px;
		line-height: 22px;
		letter-spacing: 0px;
		text-align: left;
		position: absolute;
		top: 20px;
		left: 30px;
	}
	.moneyNum{
		color: #EA4C89;
		font-family: PingFang SC;
		font-weight: medium;
		font-size: 20px;
		line-height: 24px;
		letter-spacing: 0px;
		text-align: left;
		display: flex;
		align-items: center;
	}
	.grayText3{
		color: #A6A6A6;
		font-family: PingFang SC;
		font-weight: medium;
		font-size: 14px;
		line-height: 20px;
		letter-spacing: 0px;
		text-align: left;
		height: 20px;
	}
	.grayText2{
		color: #999999;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 16px;
		line-height: 24px;
		letter-spacing: 0px;
		text-align: left;
	}
	.moneyBtn{
		border-radius: 4px;
		background: #EFEFEF;
		border: 1px solid #DDDDDD;
		width: 40px;
		height: 22px;
		color: #656565;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 12px;
		line-height: 22px;
		letter-spacing: 0px;
		text-align: justified;
		text-align: center;	
		margin-left: 6px;
	}
	.gouText{
		color: #EA4C89;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 14px;
		line-height: 22px;
		letter-spacing: 0px;
		text-align: center;
		text-decoration: underline;
	}
	.bottomLine{
		background: #EFEFEF;
		height: 1px;
		width: 738px;
		margin-top: 19px;
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
	.pinkText{
		color: #EA4C89;
		font-family: PingFang SC;
		font-weight: medium;
		font-size: 16px;
		line-height: 24px;
		letter-spacing: 0px;
	}
	.grayText{
		color: #787878;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 14px;
		line-height: 24px;
		letter-spacing: 0px;
	}
	.tuanText{
		color: #FFFFFF;
		font-family: PingFang SC;
		font-weight: heavy;
		font-size: 11px;
		letter-spacing: 0px;
		background: #FF5555;
		border: 1px solid #FFFFFF;
		border-radius: 50%;
		width: 18px;
		height: 18px;
		line-height: 18px;text-align: center;
		z-index: 100;
	}
	.companyText{
		border-radius: 0px 8px 8px 0px;
		background: #FF5555;
		height: 16px;
		color: #FFFFFF;
		font-family: PingFang SC;
		font-weight: bold;
		font-size: 11px;
		line-height: normal;
		letter-spacing: 0px;
		text-align: left;
		margin-left: -5px;
		padding-left: 10px;
		padding-right: 10px;
	}
	.headInfoFirstWarp{
		display: flex;
	}
	.userInfoRight{
		margin-left: 34px;
	}
	.editBtn{
		border-radius: 4px;
		background: #FFFFFF;
		border: 1px solid #E9E9E9;
		color: #777777D8;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 14px;
		line-height: 22px;
		letter-spacing: 0px;
		text-align: center;
		display: flex;
		align-items: center;
		width: 96px;
		height: 30px;
		justify-content: center;
		margin-top: 24px;
		margin-left: 12px;
	}
	.userInfoWarp{
		width: 1280px;
		margin: 0 auto;
		padding-top: 40px;
		display: flex;
		justify-content: space-between;
	}
	.leftFirstWarp{
		width: 300px;
		height: 398px;
		border-radius: 8px;
		background: #FFFFFF;
	}
	.leftSecondWarp{
		margin-top: 24px;
		width: 300px;
		height: 420px;
		border-radius: 8px;
		background: #FFFFFF;
		margin-bottom: 92px;
	}
	.rightFirstWarp{
		background: #FFFFFF;
		margin-bottom: 92px;
		width: 956px;
		height: 540px;
		margin-bottom: 24px;
	}
	.rightSecondWarp{
		background: #FFFFFF;
		margin-bottom: 92px;
		width: 956px;
		height: 244px;
	}
	.tuiBtn{
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
		margin: 0 auto;
		margin-top: 77px;
		line-height: 40px;
	}
	.tableItem{
		height: 12.5%;
		line-height: 52.5px;
		font-family: PingFang SC;
		font-weight: medium;
		font-size: 14px;
		letter-spacing: 0px;
		text-align: left;
		padding-left: 36px;
	}
	.active{
		background: #FDECF3;
		color: #EA4C89;
		border-right: 3px #EA4C89 solid;
	}
</style>
