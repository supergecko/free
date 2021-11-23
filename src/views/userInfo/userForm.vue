<template>
	<div class="userInfoWarp">
		<div class="formWarp">
			<div class="formLeftTitle">修改资料</div>
			<div style="width: 871px;margin: 0 auto;">
				<el-form ref="form" :model="form" label-position="right" label-width="120px">
					<el-form-item label="头像">
						<el-upload class="avatar-uploader" :action="imgUploadSrc" :show-file-list="false"
							:on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
							<img v-if="form.imageUrl" :src="form.imageUrl" class="avatar">
							<i v-else class="el-icon-plus avatar-uploader-icon"></i>
						</el-upload>
					</el-form-item>
					<el-form-item label="用户名">
						<el-input v-model="form.userName" style="width: 343px;"></el-input>
					</el-form-item>
					<el-form-item label="性别/年龄">
						<div style="display: flex;">
							<el-select v-model="form.sex" style="width: 88px;">
								<el-option label="男" value="1">男</el-option>
								<el-option label="女" value="0">女</el-option>
							</el-select>
							<el-input v-model="form.age" style="width: 88px;" type="number"></el-input>
						</div>
					</el-form-item>
					<el-form-item label="手机号">
						<div style="display: flex;align-items: center;">
							<el-input v-model="form.phone" style="width: 343px;"></el-input>
							<div class="formEditBtn" @click="phoneVisible = true">
								<img src="../../assets/userInfo/redxiugai.png" style="width: 20px;height: 20px;" />
								<div>更改</div>
							</div>
						</div>
					</el-form-item>
					<el-form-item label="邮箱">
						<div style="display: flex;align-items: center;">
							<el-input v-model="form.email" style="width: 343px;"></el-input>
							<div class="formEditBtn" @click="emailVisible = true">
								<img src="../../assets/userInfo/redxiugai.png" style="width: 20px;height: 20px;" />
								<div>更改</div>
							</div>
						</div>
					</el-form-item>
					<el-form-item label="其他联系方式">
						<div style="display: flex;">
							<el-select v-model="form.contact" style="width: 105px;" @change="checkContact">
								<el-option label="微信" value="1"></el-option>
								<el-option label="QQ" value="2"></el-option>
							</el-select>
							<el-input v-model="form.otherContact" style="width: 346px;"></el-input>
						</div>
					</el-form-item>
					<el-form-item label="作品链接" v-if="userInfo.user.userType == '1'">
						<el-input v-model="form.workLink" style="width: 343px;"></el-input>
					</el-form-item>
					<el-form-item label="个人网站" v-if="userInfo.user.userType == '1'">
						<el-input v-model="form.personalSrc" style="width: 343px;"></el-input>
					</el-form-item>
					<el-form-item label="工作方式" v-if="userInfo.user.userType == '1'">
						<el-select v-model="form.workMode" style="width: 343px;">
							<el-option label="全职" value="1"></el-option>
							<el-option label="兼职" value="2"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="工作经验" v-if="userInfo.user.userType == '1'">
						<div style="display: flex;">
							<el-input placeholder="输入工作经验" v-model="form.experience" style="width: 176px;">
							</el-input>
							<span style="margin-left: 10px;">年</span>
						</div>

					</el-form-item>
					<el-form-item label="擅长技能" v-if="userInfo.user.userType == '1'">
						<el-input v-model="form.skills" style="width: 343px;"></el-input>
						<span class="tapTips">(注：标签以“ , ”号间隔)</span>
					</el-form-item>
					<el-form-item label="优秀作品" v-if="userInfo.user.userType == '1'">
						<el-input v-model="form.goodDeom" style="width: 343px;"></el-input>
						<span class="tapTips">(注：标签以“ , ”号间隔)</span>
					</el-form-item>
					<el-form-item label="地理位置">
						<div style="display: flex;margin-bottom: 10px;">
							<el-select v-model="form.country" style="width: 106px;margin-right: 10px;">
								<el-option :label="item.districtName" :value="item.districtName" v-for="(item,i) in allCityList"
									:key="i"></el-option>
							</el-select>
							<el-select v-model="form.province" style="width: 106px;margin-right: 5px;"
								@change="changeProvinceIndex">
								<el-option :label="item.districtName" :value="item.districtName" v-for="(item,i) in provinceList"
									:key="i">
								</el-option>
							</el-select>
							<div style="margin-right: 21px;">省</div>
							<el-select v-model="form.city" style="width: 106px;margin-right: 5px;">
								<el-option :label="item.districtName" :value="item.districtName" v-for="(item,i) in cityList" :key="i">
								</el-option>
							</el-select>
							<div>市</div>
						</div>
						<el-input v-model="form.area" style="width: 521px;margin-left: 16px;"></el-input>
					</el-form-item>
					<el-form-item label="个人简介">
						<div>
							<el-input type="textarea" v-model="form.desc"></el-input>
						</div>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="onSubmit" class="submitBtn">保存</el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>
		<div class="formRight">
			<div class="formRightTitle">资料完善程度</div>
			<div style="margin-top: 123px;margin-bottom: 61px;">
				<el-progress type="circle" :percentage="75" color="#EA4C89" :width="120"></el-progress>
			</div>
			<div class="tips">完善资料有助于提高交易方信任感、成交几率</div>
		</div>

		<!-- 修改邮箱 -->
		<el-dialog :visible.sync="emailVisible" center width="550px" :show-close="showClo" class="myDialogWarp">
			<div style="padding-top: 49px;">
				<el-form :model="form">
					<el-form-item label="邮箱号" label-width="100px">
						<el-input v-model="form.name" autocomplete="off" style="width: 343px;" placeholder="输入邮箱">
						</el-input>
					</el-form-item>
					<el-form-item label="验证码" label-width="100px">
						<div style="display: flex;align-items: center;">
							<el-input v-model="form.name" autocomplete="off" style="width: 226px;" placeholder="输入验证码">
							</el-input>
							<div class="getCode">获取验证码</div>
						</div>
					</el-form-item>
				</el-form>
			</div>
			<div class="myDialogBtn">确定</div>
		</el-dialog>
		<!-- 修改手机 -->
		<el-dialog :visible.sync="phoneVisible" center width="550px" :show-close="showClo" class="myDialogWarp">
			<div style="padding-top: 49px;">
				<el-form :model="form">
					<el-form-item label="手机号" label-width="100px">
						<el-input v-model="form.name" autocomplete="off" style="width: 343px;" placeholder="输入手机号">
						</el-input>
					</el-form-item>
					<el-form-item label="验证码" label-width="100px">
						<div style="display: flex;align-items: center;">
							<el-input v-model="form.name" autocomplete="off" style="width: 226px;" placeholder="输入验证码">
							</el-input>
							<div class="getCode">获取验证码</div>
						</div>
					</el-form-item>
				</el-form>
			</div>
			<div class="myDialogBtn">确定</div>
		</el-dialog>
	</div>
</template>

<script>
	import {
		cityInformation,
		uploadUserInfo,
		userId
	} from '@/api/user.js'
	import {
		mapState
	} from 'vuex'
	export default {
		computed: {
			...mapState(['userInfo']), // 读取用户信息
			imgUploadSrc: function() {
				return process.env.VUE_APP_URL + '/common/upload'
			}
		},
		data() {
			return {
				emailVisible: false,
				phoneVisible: false,
				showClo: false,
				allCityList: [], //国省市
				countryIndex: 0, //国index
				provinceIndex: 0, //省index
				provinceList: [], //省list
				cityList: [], //市list
				form: {
					userName: '',
					sex: '1',
					desc: '',
					email: '',
					phone: '',
					age: 37,
					contact: '1', //微信/QQ
					otherContact: '21312321313312', //其他链接方式
					workLink: '', //作品链接	
					personalSrc: '', //个人网站
					workMode: '1', //工作方式
					experience: '', //工作经验
					skills: '', //擅长技能
					goodDeom: '', //优秀作品
					country: '', //国
					province: '', //省
					city: '', //市
					area: '', //区
					imageUrl: ''
				},
				options: [{
					value: '选项1',
					label: 'PHP'
				}, {
					value: '选项2',
					label: 'JAVA'
				}, {
					value: '选项3',
					label: 'HTML'
				}, {
					value: '选项4',
					label: 'CSS'
				}, {
					value: '选项5',
					label: 'SQL'
				}],
			}
		},
		created() {
			this.form = {
				userName: this.userInfo.user.nickname,
				sex: String(this.userInfo.user.gender),
				desc: this.userInfo.user.personalProfile,
				email: this.userInfo.user.userMail,
				phone: this.userInfo.user.userPhone,
				age: this.userInfo.user.age,
				contact: this.userInfo.user.userQq?'2':'1', //微信/QQ
				otherContact: this.userInfo.user.userQq? this.userInfo.user.userQq:this.userInfo.user.userWechat, //其他链接方式
				workLink: this.userInfo.user.workLinks, //作品链接	
				personalSrc: this.userInfo.user.personalSite, //个人网站
				workMode: String(this.userInfo.user.workingMethod), //工作方式
				experience: '', //工作经验
				skills: this.userInfo.user.specializedSkills, //擅长技能
				goodDeom: this.userInfo.user.specializedProjects, //优秀作品
				country: '中国', //国
				province: this.userInfo.user.address.split("-")[0], //省
				city: this.userInfo.user.address.split("-")[1], //市
				area: '', //区
				imageUrl: this.userInfo.user.userAvatar
			},
			this.getCity()
		},
		watch: {
			provinceIndex: {
				handler(val, oldVal) {
					this.provinceList.forEach((item,i)=>{
						if(item.districtName == val) {
							this.cityList = this.provinceList[i].children
						}
					})
				},
				deep: true //true 深度监听
			}
		},
		methods: {
			//切换QQ/微信
			checkContact(e){
				if (e=='1'){ //微信
					this.form.otherContact = this.userInfo.user.userWechat
				} else { //QQ
					this.form.otherContact = this.userInfo.user.userQq
				}
			},
			//切换省
			changeProvinceIndex(e) {
				this.provinceIndex = e
			},
			//获取省市国
			getCity() {
				cityInformation().then(res => {
					this.allCityList = res.data.data
					this.provinceList = res.data.data[0].children
					this.provinceList.forEach((item,i)=>{
						if(item.districtName == this.form.province) {
							this.cityList = this.provinceList[i].children
						}
					})
				})
			},
			onSubmit() {
				this.uploadUserInfo()
			},
			handleAvatarSuccess(res, file) {
				this.form.imageUrl = URL.createObjectURL(file.raw)
			},
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg';
				const isLt2M = file.size / 1024 / 1024 < 2;

				if (!isJPG) {
					this.$message.error('上传头像图片只能是 JPG 格式!');
				}
				if (!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
				}
				return isJPG && isLt2M;
			},
			getUserInfo(){
				let Id = this.userInfo.user.userId
				userId(Id).then(res=>{
					this.$store.commit('setUserInfo',res.data.data)
					this.$router.push('/userInfo')
				})
			},
			//更新用户信息
			uploadUserInfo() {
				let data = {
					userId:this.userInfo.user.userId,
					userAvatar: this.form.imageUrl, //头像
					nickname: this.form.userName, //名称
					gender: this.form.sex, // 性别
					age: this.form.age, //年龄
					userPhone: this.form.phone, //手机号
					userMail: this.form.email, //邮箱
					userWechat: this.form.contact == '1' ? this.form.otherContact : null, //用户微信
					userQq: this.form.contact == '2' ? this.form.otherContact : null, //用户QQ
					address: this.form.province+'-'+this.form.city+'-'+this.form.area, //地区
					personalProfile: this.form.desc, //个人简介
					workLinks: this.form.workLink, //作品链接
					personalSite: this.form.personalSrc, //个人网站
					workingMethod: this.form.workMode, //工作方式
					//experience:this.form.experience//工作经验
					specializedSkills: this.form.skills, //擅长技能
					specializedProjects:this.form.goodDeom//优秀作品
				}
				uploadUserInfo(data).then(res => {
					if (res.data.code === 200) {
						this.$message({
							type: 'success',
							message: '更新成功'
						})
						this.getUserInfo()
					}
				})
			}
		}
	}
</script>

<style>
	.userInfoWarp {
		width: 1280px;
		margin: 0 auto;
		padding-top: 42px;
		display: flex;
		justify-content: space-between;
	}

	.myDialogWarp .el-dialog {
		border-radius: 16px;
	}

	.myDialogWarp .el-dialog__header {
		padding: 0px !important;
	}

	.myDialogWarp .el-dialog__body {
		padding: 0px !important;
		height: 260px;
	}

	.myDialogWarp .el-form-item__label {
		margin-right: 20px;
	}

	.myDialogWarp .el-form-item__content {
		margin-left: 0px !important;
	}

	.myDialogWarp .getCode {
		border-radius: 8px;
		background: #FDECF3;
		width: 108px;
		height: 44px;
		color: #EA4C89;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 16px;
		line-height: 44px;
		letter-spacing: 0px;
		text-align: center;
		margin-left: 9px;
	}

	.myDialogBtn {
		border-radius: 8px;
		background: #EA4C89;
		width: 240px;
		height: 40px;
		color: #FFFFFF;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 14px;
		line-height: normal;
		letter-spacing: 0px;
		text-align: center;
		margin-left: 136px;
		line-height: 40px;
	}

	.submitBtn {
		border-radius: 8px;
		background: #EA4C89;
		width: 240px;
		color: #FFFFFF;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 14px;
		text-align: center;
		margin-top: 52px;
	}

	.formEditBtn {
		display: flex;
		border-radius: 8px;
		background: #FDECF3;
		width: 98px;
		height: 40px;
		color: #EA4C89;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 16px;
		line-height: 40px;
		letter-spacing: 0px;
		text-align: center;
		justify-content: center;
		align-items: center;
		margin-left: 10px;
	}

	.el-textarea__inner {
		width: 715px;
		height: 150px;
	}

	.el-form-item__label {
		margin-right: 48px;
	}

	.el-form-item__content {
		margin-left: 150px !important;
	}

	.formLeftTitle {
		margin-top: 37px;
		margin-left: 237px;
		color: #3C3C4C;
		font-family: PingFang SC;
		font-weight: bold;
		font-size: 24px;
		line-height: 24px;
		letter-spacing: 0px;
		margin-bottom: 44px;
	}

	.tips {
		color: #6E6D7A;
		font-family: PingFang SC;
		font-weight: medium;
		font-size: 16px;
		line-height: 22px;
		letter-spacing: 0px;
		text-align: left;
		width: 196px;
	}

	.el-progress__text {
		color: #EA4C89;
		font-family: PingFang SC;
		font-weight: medium;
		font-size: 30px !important;
	}

	.formWarp {
		width: 1000px;
		height: 1410px;
		border-radius: 8px;
		background: #FFFFFF;
		margin-bottom: 51px;
	}

	.formRight {
		border-radius: 8px;
		background: #FFFFFF;
		width: 256px;
		height: 458px;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.formRightTitle {
		position: absolute;
		top: 41px;
		left: 36px;
		color: #0D0C22;
		font-family: PingFang SC;
		font-weight: medium;
		font-size: 16px;
	}

	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}

	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}

	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 120px;
		height: 120px;
		line-height: 120px;
		text-align: center;
	}

	.avatar {
		width: 120px;
		height: 120px;
		display: block;
		border-radius: 50%;
	}
	.tapTips {
		color: #353535;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 14px;
		line-height: normal;
		letter-spacing: 0px;
		margin-left: 10px;
	}
</style>
