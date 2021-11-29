<template>
	<div class="releaseWarp">
		<div class="leftReseaseWarp">
			<div class="reseaseTitle">发布一个新任务</div>
			<el-form ref="form" :model="form" label-position="right" label-width="212px" :rules="rules">
				<el-form-item label="竞标方式" prop="method">
					<el-radio-group v-model="form.method">
						<el-radio label="1">单人承接</el-radio>
						<el-radio label="2">团队承接</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="任务类型" prop="type">
					<el-select v-model="form.type" placeholder="请选择任务类型" style="width: 340px;">
						<el-option v-for="item in typeText" :key="item.typeId" :label="item.typeName"
							:value="item.typeName">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="任务标签" prop="tag">
					<el-input v-model="form.tag" style="width: 340px;" placeholder="输入任务标签（例：电商小程序开发）"></el-input>
					<span class="tapTips">(注：标签以“ , ”号间隔)</span>
				</el-form-item>
				<el-form-item label="任务名称" prop="name">
					<el-input v-model="form.name" style="width: 340px;" placeholder="输入任务名称  (例：APP开发)"></el-input>
				</el-form-item>
				<el-form-item label="描述您的任务需求" prop="demand">
					<div>
						<el-input type="textarea" v-model="form.demand" style="width: 650px;height: 150px;"
							placeholder="输入任务详细"></el-input>
						<div style="padding-left: 52px;">
							<div>添加附件</div>
							<el-upload class="upload-demo" :action="imgUploadSrc" :on-change="handleChange"
								:on-remove="handleRemove" :on-success="handleSuccess" :file-list="fileList" :limit="5">
								<el-button size="small" type="primary">点击上传</el-button>
								<div slot="tip" class="el-upload__tip">
									1.附件非必传！限上传5个，单个大小上限5M<br />2.支持格式：jpg,png,gif,txt,pdf,doc,xls,zip,rar</div>
							</el-upload>
						</div>
					</div>
				</el-form-item>
				<el-form-item label="金额预算" prop="money">
					<el-input placeholder="输入价格" v-model="form.money" style="width: 228px;">
						<template slot="append">元</template>
					</el-input>
				</el-form-item>
				<el-form-item label="任务周期" prop="cycle">
					<el-input placeholder="输入周期" v-model="form.cycle" style="width: 228px;">
						<template slot="append">天</template>
					</el-input>
					<span class="tapTips">(注：该任务需要多少时间完成)</span>
				</el-form-item>
				<el-form-item label="联系方式" prop="phone">
					<el-select v-model="form.contact" style="width: 105px;">
						<el-option label="微信" value="1"></el-option>
						<el-option label="QQ" value="2"></el-option>
						<el-option label="手机" value="3"></el-option>
					</el-select>
					<el-input v-model="form.phone" style="width: 288px;" placeholder="输入联系方式"></el-input>
				</el-form-item>
				<el-form-item label="限制投标数" prop="radio1"
					:rules="{validator: instrumentCalibration,trigger: 'blur',required: true}">
					<el-input v-model="form.limitNum" style="width: 180px;" placeholder="输入人数"></el-input>
					<el-radio v-model="form.radio1" label="1" border style="margin-left: 10px;">不限制</el-radio>
				</el-form-item>
			</el-form>
			<div style="margin-left: 268px;margin-top: 150px;">
				<el-radio label="1" v-model="radio2">阅读并同意<span style="color: #EA4C89;">《Free星球平台雇佣协议》</span></el-radio>
				<div class="fabu" @click="submitForm('form')">发布</div>
			</div>
		</div>
		<div class="rightReseaseWarp">
			<div class="commonQuest">常见问题</div>
			<div class="questItem">1、如何发布任务需求？</div>
			<div class="questItem">2、联系方式可以不填吗？</div>
			<div class="questItem">3、竞标方式是什么？</div>
			<div class="questItem">4、... ...</div>
		</div>
	</div>
</template>

<script>
	import {
		taskAdd,
		getMissonType
	} from '@/api/task'
	export default {
		data() {
			return {
				form: {
					method: '', //竞标方式
					type: '', //任务类型
					tag: '', //任务标签
					name: '', //任务名称
					demand: '', //任务需求
					money: 37, //金额预算
					cycle: '1', //任务周期
					phone: '', //联系方式
					limitNum: '', //限制投标数
					radio1: '', //不限制人数按钮
					contact: '1', //联系方式flag
					fileList: [] //文件上传数组
				},
				fileList: [],//文件暂存数组
				radio2: '', //同意
				rules: {
					method: [{
						required: true,
						message: '请选择竞标方式',
						trigger: 'change'
					}],
					type: [{
						required: true,
						message: '请选择任务类型',
						trigger: 'change'
					}],
					tag: [{
						required: true,
						message: '请输入任务标签',
						trigger: 'blur'
					}],
					name: [{
						required: true,
						message: '请输入任务名称',
						trigger: 'blur'
					}],
					demand: [{
						required: true,
						message: '请输入任务详细',
						trigger: 'blur'
					}],
					money: [{
						required: true,
						message: '请输入价格',
						trigger: 'blur'
					}],
					cycle: [{
						required: true,
						message: '请输入任务周期',
						trigger: 'blur'
					}],
					phone: [{
						required: true,
						message: '请输入联系方式',
						trigger: 'blur'
					}],
					limitNum: [{
						required: true,
						message: '请输入人数',
						trigger: 'blur'
					}],
				},
				typeText: [] //任务类型
			}
		},
		computed: {
			imgUploadSrc: function() {
				return process.env.VUE_APP_URL + '/common/upload'
			}
		},
		created() {
			this.getMissonType()
		},
		methods: {
			editUserInfo() {
				this.$router.push({
					path: '/userForm'
				})
			},
			//投标数校验
			instrumentCalibration(rule, value, callback) {
				if (this.form.limitNum === '' && this.form.radio1 === '') {
					return callback(
						new Error('请选择投标数')
					)
				}
				callback()
			},
			//获取任务类型分类
			getMissonType() {
				getMissonType().then(res => {
					this.typeText = res.data.data
				})
			},
			submitForm(formName) {
				if (this.radio2 != '1') {
					this.$message({
						type: 'warning',
						message: '请勾选并同意协议'
					})
					return
				}
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.submitTask()
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			submitTask() {
				let data = {
					biddingMethod: this.form.method, //竞标方式（0：通用；1：个人；2：团队）
					missionType: this.form.type, //任务类型
					//tag:this.form.tag,// 任务标签
					missionName: this.form.name, //任务名称
					missionProfile: this.form.demand, //任务简介
					missionBudgets: this.form.money, //金额
					missionCycle: this.form.cycle, //周期
					tendersNum: this.form.limitNum, //投标数量
					missionAttachments:this.form.fileList,//任务附件
					wechat: this.form.contact == '1' ? this.form.phone : null, //微信
					qqNumber: this.form.contact == '2' ? this.form.phone : null, //qq
					phone: this.form.contact == '3' ? this.form.phone : null //手机
				}
				taskAdd(data).then(res => {
					if (res.data.code === 200) {
						this.$message({
							type: 'success',
							message: '订单提交成功，审核中'
						})
						this.$router.push('/')
					}
				})
			},
			// 移除不需要的文件
			handleRemove(file) {
				const {
					uid
				} = file
				const selectFileList = this.fileList.filter(item => {
					return item.uid != uid
				})
				this.fileList = selectFileList
				this.form.fileList = []
				this.fileList.forEach((item)=>{
					this.form.fileList.push(item.response.url)
				})
				console.log(this.form.fileList)
			},
			// handleSuccess(response, file, fileList){
			//       this.details.push(response.url)
			//       this.form.missionAttachments = this.details.toString()
			//     },
			//     handleRemove(file, fileList) {
			//       for(var i = 0 ; i <this.details.length; i++){
			//         if(file.response.url == this.details[i]){
			//           this.details.splice(i,1)
			//         }
			//       }
			//     }
			handleSuccess(file){
				this.form.fileList += file.url+','
				// this.form.fileList.push(file.url)
				console.log(this.form.fileList)
			},
			// 文件勾选触发验证
			handleChange(file, fileList) {
				const {
					uid,
					name,
					size
				} = file
				//   文件类型限制
				const fileTypeFlag = /^.png|.jpg|.jpeg|.gif|.txt|.doc|.docx|.xls|.xlsx|.pdf|.zip|.7z|.rar$/.test(
					name.substring(name.lastIndexOf('.')).toLowerCase()
				)
				if (!fileTypeFlag) {
					this.$message.warning(
						'文件类型只能是.png|.jpg|.jpeg|.gif|.doc|.docx|.xls|.xlsx|.pdf|.zip|.7z|.rar|.txt'
					)
					const selectFileList = this.fileList.filter(item => {
						return item.uid != uid
					})
					this.fileList = selectFileList
					return
				}
				//   文件大小进行校验
				if (size > 1024 * 1024 * 5) {
					this.$message.warning('文件大小不能超过5Mb')
					const selectFileList = this.fileList.filter(item => {
						return item.uid != uid
					})
					this.fileList = selectFileList
					return
				}
				//   文件总大小限制
				const totalSize = this.fileList.reduce(
					(total, item) => total + item.size,
					0
				)
				if (totalSize + size > 1024 * 1024 * 100) {
					this.$message.warning('总文件大小不能超过100Mb')
					const selectFileList = this.fileList.filter(item => {
						return item.uid != uid
					})
					this.fileList = selectFileList
					return
				}
				//   文件重名限制
				// const findCommonNameIndex = this.fileList.findIndex(
				// 	item => item.name == name
				// )
				// if (findCommonNameIndex !== -1) {
				// 	this.$message.warning('不能上传同名的文件')
				// 	const selectFileList = this.fileList.filter(item => {
				// 		return item.uid != uid
				// 	})
				// 	this.fileList = selectFileList
				// 	return
				// }
				this.fileList = fileList.slice(-5)
			}
		}
	}
</script>

<style>
	.leftReseaseWarp .el-form-item__label {
		margin-right: 52px;
	}

	.el-form-item__error {
		margin-left: 53px;
	}

	.leftReseaseWarp .el-radio__input.is-checked .el-radio__inner {
		border-color: #EA4C89;
		background: #EA4C89;
	}

	.leftReseaseWarp .el-textarea__inner {
		height: 100%;
		background: #F3F3F4;
		border-radius: 4px;
	}

	.leftReseaseWarp .el-input-group__append,
	.el-input-group__prepend {
		color: #353535;
		border: 0px;
		background-color: #F3F3F4;
	}

	.releaseWarp {
		width: 1280px;
		margin: 0 auto;
		padding-top: 40px;
		display: flex;
		justify-content: space-between;
	}

	.fabu {
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
		margin-top: 36px;
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

	.leftReseaseWarp {
		width: 955px;
		height: 1231px;
		border-radius: 8px;
		background: #FFFFFF;
		margin-bottom: 45px;
	}

	.reseaseTitle {
		color: #3C3C4C;
		font-family: PingFang SC;
		font-weight: bold;
		font-size: 24px;
		line-height: 24px;
		letter-spacing: 0px;
		margin-top: 42px;
		margin-left: 268px;
		margin-bottom: 39px;
	}

	.commonQuest {
		color: #0D0C22;
		font-family: PingFang SC;
		font-weight: medium;
		font-size: 16px;
		line-height: 22px;
		letter-spacing: 0px;
		margin-top: 41px;
		margin-left: 40px;
		margin-bottom: 30px;
	}

	.questItem {
		color: #6E6D7A;
		font-family: PingFang SC;
		font-weight: medium;
		font-size: 14px;
		line-height: 22px;
		letter-spacing: 0px;
		margin-bottom: 10px;
		margin-left: 40px;
	}

	.rightReseaseWarp {
		width: 300px;
		height: 606px;
		border-radius: 8px;
		background: #FFFFFF;
	}
</style>
