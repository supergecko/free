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
							<span>任务编号：{{hireMission.missionNumber}}</span>
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
						<span class="commonText" style="color: #595959;margin-right: 40px;">
							{{hireMission.biddingMethod=='0'? '个人/团队':hireMission.biddingMethod=='1'? '个人' : '团队'}}
						</span>
						<span class="commonText" style="color: #6E6D7A;">投标数：</span>
						<span class="commonText" style="color: #595959;">{{hireMission.tendersNum}}</span>
					</div>
					<div style="display: flex;align-items: center;margin-top: 60px;">
						<span class="commonText">预计时间：</span>
						<span class="commonText"
							style="font-weight: medium;font-size: 20px;">{{hireMission.missionCycle}}</span>
					</div>
					<div style="display: flex;align-items: center;margin-top: 10px;">
						<span class="commonText">预计价格：</span>
						<span class="commonText"
							style="font-weight: medium;font-size: 20px;">{{hireMission.missionBudgets}}</span>
					</div>
					<div style="display: flex;align-items: center;margin-top: 10px;">
						<span class="commonText">任务标签：</span>
						<div class="jinengLabel" v-for="(item,i) in missionType" :key="i">{{item}}</div>
					</div>
					<div class="orderInfoTitle" style="color: #262626;margin-top: 61px;">任务描述：</div>
					<div class="orderMiaoShu">
						{{hireMission.missionProfile}}
					</div>
					<div style="margin-top: 60px;display: flex;">
						<div class="orderInfoTitle" style="#262626">附件：</div>
						<span class="fujian" v-if="!fileInfoList">
							<i class="el-icon-link" style="color: #EA4C89;margin-right: 5px;"></i>暂无附件
						</span>
						<el-upload action="" :file-list="fileInfoList" :on-preview="handlePreview" disabled  v-else/>
					</div>
					<div class="line"></div>
					<div style="display: flex; position: absolute; left: 0px; bottom: 35px;align-items: center;">
						<div class="receivingTag">
							<img src="../../assets/fail.png" style="width: 17.5px;height: 17.5px;" />
							<div style="margin-left: 5px;">无法实现 0</div>
						</div>
						<div class="receivingTag">
							<img src="../../assets/money.png" style="width: 17.5px;height: 17.5px;" />
							<div style="margin-left: 5px;">预算太少 0</div>
						</div>
						<div class="receivingTag">
							<img src="../../assets/taskReal.png" style="width: 17.5px;height: 17.5px;" />
							<div style="margin-left: 5px;">任务不真实 0</div>
						</div>
						<div class="receivingTag">
							<img src="../../assets/xuqiu.png" style="width: 17.5px;height: 17.5px;" />
							<div style="margin-left: 5px;">需求不详细 0</div>
						</div>
						<div class="jiedan" style="margin-right: 20px;margin-left: 139px;">
							<span>接单要求：</span>
							<span style="color: #595959;">个人</span>
						</div>
						<div class="taskBTnRed" @click="dialogFormVisible = true">
							投标竞价
						</div>
						<div class="taskBTn" style="color: #EA4C89;" v-if="false">
							<i class="el-icon-edit"></i>
							修改投标
						</div>
					</div>
				</div>
			</div>
			<div class="mainSecondWarp backgroundWhite" v-if="tenders.length>0">
				<div style="display: flex;align-items: center;justify-content: space-between;padding-top: 34px;">
					<div style="font-weight: medium;font-size: 20px;">我的投标</div>
					<div>
						<div class="toubiaotitle">参与投标号：{{tenders[0].tenderNumber}}</div>
						<div class="toubiaotitle" style="margin-left: 20px;">提交时间：{{tenders[0].tenderTime}}</div>
					</div>
				</div>
				<div style="margin-top: 36px;font-size: 18px;color: #6E6D7A;line-height: normal;">
					{{tenders[0].tenderDetails}}</div>
				<div style="margin-top: 50px;font-size: 14px;color: #6E6D7A;display: flex;justify-content: center;">
					<div style="margin-right: 51px;">工期: <span style="font-size: 20px;color: #EA4C89;">{{tenders[0].tenderDays}}天</span></div>
					<div>任务标价：<span style="font-size: 20px;color: #EA4C89;">{{tenders[0].tenderAmount}}元</span></div>
				</div>
			</div>
		</div>
		<div class="orderRightWarp">
			<div class="rightFirstWarp backgroundWhite">
				<img :src="userAvatar" class="rightFirstImg" />
				<div class="rightFirstName">{{nickName}}</div>
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
				<div class="liulan" @click="dialogPhoneVisible = true">查看联系方式</div>
			</div>
			<div class="rightSecondWarp backgroundWhite">
				<div style="display: flex;align-items: center;padding-top: 20px;padding-left: 28px;">
					<div class="redDian"></div>
					<div class="tuijian">相似任务</div>
				</div>
				<div style="height: 310px;overflow: hidden;">
					<div style="display: flex;padding-left: 28px;margin-top: 20px;align-items: center;"
						v-for="(item) in 5">
						<div class="taskContent">需要做一套嵌入式...需要做一套嵌入式...</div>
						<div class="taskPrice">¥30000</div>
					</div>
				</div>

			</div>
		</div>
		
		<el-dialog :visible.sync="dialogFormVisible" :show-close="false" class="myDialogWarp" width="802px">
			<div>
				<div class="dialogTitle">投标竞价</div>
				<el-form :model="form">
					<el-form-item label="承接方式" prop="method" label-width="140px">
						<el-radio-group v-model="form.method">
							<el-radio label="1">单人</el-radio>
							<el-radio label="2">团队</el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="我的报价" prop="money" label-width="140px">
						<el-input placeholder="输入价格" v-model="form.money" style="width: 228px;">
							<template slot="append">元</template>
						</el-input>
					</el-form-item>
					<el-form-item label="任务周期" prop="cycle" label-width="140px">
						<el-input placeholder="输入周期" v-model="form.cycle" style="width: 228px;">
							<template slot="append">天</template>
						</el-input>
						<span class="tapTips">(注：该任务需要多少时间完成)</span>
					</el-form-item>
					<el-form-item label="补充说明" prop="demand" label-width="140px">
						<el-input type="textarea" v-model="form.demand" style="width: 583px;height: 150px;"
							placeholder="您想对雇主说什么"></el-input>
					</el-form-item>
					<el-form-item label="联系方式" prop="phone" label-width="140px">
						<el-input v-model="form.phone" style="width: 343px;" placeholder="填写联系方式方便雇主联系"></el-input>
					</el-form-item>
					<el-form-item label-width="140px">
						<div style="color: #6E6D7A;;">注：您的投标信息仅雇主可见</div>
					</el-form-item>
					<el-form-item label-width="140px">
						<div style="display: flex;">
							<div class="jingbiaoBtb" @click="tenderMission()">提交竞标</div>
							<div class="cancel" @click="dialogFormVisible = false">取消</div>
						</div>
					</el-form-item>
				</el-form>
			</div>
		</el-dialog>
		
		<el-dialog :visible.sync="dialogPhoneVisible" :show-close="false" class="myDialogPhoneWarp" width="753px">
			<div style="position: relative;display: flex;flex-direction: column;justify-content: center;align-items: center;padding-top: 69px;">
				<img src="../../assets/close.png" style="width: 24px;height: 24px;position: absolute;top: 39px;right: 72px;" @click="dialogPhoneVisible = false"/>
				<div style="display: flex;align-items: center;justify-content: center;margin-top: 5px;" v-if="hireMission.phone">
					<img src="../../assets/phone.png" style="width: 24px;height: 24px;margin-right: 2px;" />
					<div style="color: #EA4C89;">{{hireMission.phone}}</div>
				</div>
				<div style="display: flex;align-items: center;justify-content: center;margin-top: 5px;" v-if="hireMission.wechat">
					<img src="../../assets/wechat.png" style="width: 24px;height: 24px;margin-right: 2px;" />
					<div style="color: #EA4C89;">{{hireMission.wechat}}</div>
				</div>
				<div style="display: flex;align-items: center;justify-content: center;margin-top: 5px;" v-if="hireMission.qqNumber">
					<img src="../../assets/QQ.png" style="width: 24px;height: 24px;margin-right: 2px;" />
					<div style="color: #EA4C89;">{{hireMission.qqNumber}}</div>
				</div>
				<div style="width: 611px;height: 1px;background: #979797;opacity: 0.2;margin-top: 41px;"></div>
				<div style="margin-bottom: 8px;color: #6E6D7A;margin-top: 37px;" >声明：</div>
				<div style="width: 576px;line-height: normal;color: #6E6D7A;">为了安全起见，不要轻易与卖家进行线下交易；联系时请告知对方来自于Free星球平台，或发送Free星球平台信息链接；非平台线上交易的项目，出现任何后果均与Free星球无关；无论卖家以何理由要求线下交易的，请联系管理举报。</div>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import {
		taskInfo,tender
	} from '@/api/task'
	export default {
		name: 'orderReceiving',
		data() {
			return {
				hireMission: {}, //任务详情
				missionType: [],
				form: {
					method: '', //承接方式
					money: '', //报价
					cycle: '', //周期
					demand: '', //补充说明
					phone: '' //联系方式
				},
				formLabelWidth: '120px',
				dialogFormVisible: false,
				dialogPhoneVisible:false,
				fileInfoList:[],
				nickName:'',//客户名称
				userAvatar:'',//客户头像
				tenders:[],//投标数组
				
			}
		},
		computed: {
			...mapState(['userInfo']) // 读取用户信息
		},
		methods: {
			//提交投标
			tenderMission(){
				this.dialogFormVisible = false
				let data ={
					tenderIdentity:this.form.method,
					tenderAmount:this.form.money,
					tenderDays:this.form.cycle,
					contact:this.form.phone,
					tenderDetails:this.form.demand,
					missionId:this.$route.query.missionId,
					userId:this.userInfo.user.userId
				}
				tender(data).then(res => {
					if (res.data.code === 200) {
						this.$message(res.data.msg)
					}
				})
			},
			// 任务详情
			getMissionInfo() {
				
				let data ={
					missionId:this.$route.query.missionId
				}
				taskInfo(data).then(res => {
					if (res.data.code === 200) {
						this.hireMission = res.data.data.hireMission
						this.missionType = res.data.data.hireMission.missionType.split(',')
						this.fileInfoList =  res.data.data.missionAttachments
						this.nickName = res.data.data.nickName
						this.userAvatar = res.data.data.userAvatar
						this.tenders = res.data.data.tenders
					}
				})
			},
			// 文件下载
			handlePreview(file) {
				console.log(file)
				if (!file.url) {
					this.$message.error('下载失败')
					return
				}
				const type = file.url.split('.')[4]
				console.log(type)
				// 判断文件类型
				if (type === 'doc' || type === 'docx' || type === 'xlsx' || type === 'xls' || type === 'ppt' || type ===
					'pptx') {
					// 在当前浏览器直接下载
					document.location.href = file.url
				} else {
					// 图片在浏览器打开 新的页面展示
					window.open(file.url, 'Img')
				}
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

	.myDialogWarp .el-input-group__append,
	.el-input-group__prepend {
		color: #353535;
		border: 0px;
		background-color: #F3F3F4;
	}

	.myDialogWarp .jingbiaoBtb {
		border-radius: 8px;
		background: #EA4C89;
		width: 240px;
		height: 40px;
		color: #FFFFFF;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 14px;
		line-height: 40px;
		letter-spacing: 0px;
		text-align: center;
		margin-right: 32px;
	}

	.myDialogWarp .cancel {
		width: 180px;
		height: 40px;
		border-radius: 8px;
		background: #F3F3F4;
		color: #353535;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 14px;
		line-height: 40px;
		letter-spacing: 0px;
		text-align: center;
	}

	.myDialogWarp .el-textarea__inner {
		height: 100%;
		background: #F3F3F4;
		border-radius: 4px;
	}

	.myDialogWarp .el-dialog {
		border-radius: 16px;
		font-size: 16px !important;
	}
	.myDialogPhoneWarp .el-dialog {
		border-radius: 16px;
		font-size: 16px !important;
	}
	.myDialogWarp .dialogTitle {
		color: #262626;
		font-family: PingFang SC;
		font-weight: bold;
		font-size: 24px;
		letter-spacing: 0px;
		padding-top: 47px;
		margin-left: 146px;
		margin-bottom: 27px;
	}

	.myDialogWarp .el-dialog__header {
		padding: 0px !important;
	}
	.myDialogPhoneWarp .el-dialog__header {
		padding: 0px !important;
	}
	
	.myDialogWarp .el-dialog__body {
		padding: 0px !important;
		height: 680px;
	}
	.myDialogPhoneWarp .el-dialog__body {
		padding: 0px !important;
		height: 353px;
	}
	.toubiaotitle {
		border-radius: 2px;
		color: #000000A5;
		border: 1px dashed #00000026;
		font-size: 12px;
		padding: 2px 14px;
		display: inline-block;
	}

	.receivingTag {
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

	.taskBTnRed {
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

	.redDian {
		background: #EA4C89;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		margin-right: 10px;
	}

	.jiedan {
		color: #6E6D7A;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 14px;
		line-height: normal;
		letter-spacing: 0px;
	}

	.rightFirstImg {
		width: 100px;
		height: 100px;
		margin-top: 30px;
		border: 1px solid #F4F4F4;
		background: url('~@/assets/avatar.png') no-repeat;	
		border-radius: 50%;
	}

	.taskContent {
		color: #6E6D7A;
		font-family: PingFang SC;
		font-weight: medium;
		font-size: 16px;
		letter-spacing: 0px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		width: 141px;
		margin-right: 43px;
	}

	.taskPrice {
		color: #EA4C89;
		font-family: PingFang SC;
		font-weight: medium;
		font-size: 16px;
		letter-spacing: 0px;
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
		margin-bottom: 24px;
	}

	.mainSecondWarp {
		width: 955px;
		height: 288px;
		margin-bottom: 50px;
		padding-left: 46px;
		padding-right: 53px;
		box-sizing: border-box;
	}

	.backgroundWhite {
		border-radius: 8px;
		background: #FFFFFF;
	}
</style>
