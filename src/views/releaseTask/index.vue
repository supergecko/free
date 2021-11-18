<template>
	<div class="releaseWarp">
		<div class="leftReseaseWarp">
			<div class="reseaseTitle">发布一个新任务</div>
			<el-form ref="form" :model="form" label-position="right" label-width="212px">
				<el-form-item label="竞标方式">
					<el-radio-group v-model="form.method">
						<el-radio label="单人承接"></el-radio>
						<el-radio label="团队承接"></el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="任务类型">
					<el-select v-model="form.type" placeholder="请选择任务类型" style="width: 340px;">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="任务标签">
					<el-input v-model="form.tag" style="width: 340px;" placeholder="输入任务标签（例：电商小程序开发）"></el-input>
					<span class="tapTips">(注：标签以“ , ”号间隔)</span>
				</el-form-item>
				<el-form-item label="任务名称">
					<el-input v-model="form.name" style="width: 340px;" placeholder="输入任务名称  (例：APP开发)"></el-input>
				</el-form-item>
				<el-form-item label="描述您的任务需求">
					<el-input type="textarea" v-model="form.demand" style="width: 650px;height: 150px;"
						placeholder="输入任务详细"></el-input>
				</el-form-item>
				<el-form-item label="金额预算">
					<el-input placeholder="输入价格" v-model="form.money" style="width: 228px;">
						<template slot="append">元</template>
					</el-input>
				</el-form-item>
				<el-form-item label="任务周期">
					<el-input placeholder="输入周期" v-model="form.cycle" style="width: 228px;">
						<template slot="append">天</template>
					</el-input>
					<span class="tapTips">(注：该任务需要多少时间完成)</span>
				</el-form-item>
				<el-form-item label="联系方式">
					<el-input v-model="form.phone" style="width: 340px;" placeholder="输入手机号/微信/QQ"></el-input>
				</el-form-item>
				<el-form-item label="限制投标数">
					<el-input v-model="form.limitNum" style="width: 180px;" placeholder="输入人数"></el-input>
					<el-radio v-model="form.radio1" label="1" border style="margin-left: 10px;">不限制</el-radio>
				</el-form-item>	
			</el-form>
			<div style="margin-left: 268px;margin-top: 150px;">
				<el-radio label="1" v-model="radio2">阅读并同意<span style="color: #EA4C89;">《Free星球平台雇佣协议》</span></el-radio>
				<div class="fabu">发布</div>
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
					radio1:''//不限制人数按钮
				},
				radio2:'',//同意
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
			}
		},
		computed: {

		},
		methods: {
			editUserInfo() {
				this.$router.push({
					path: '/userForm'
				})
			}
		}
	}
</script>

<style>
	.leftReseaseWarp .el-form-item__label {
		margin-right: 52px;
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
	.leftReseaseWarp .el-input-group__append, .el-input-group__prepend{
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
	.fabu{
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
