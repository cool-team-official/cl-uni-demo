<template>
	<view class="demo-rules">
		<!-- 消息提示 -->
		<cl-toast ref="toast"></cl-toast>

		<cl-card label="表单">
			<view class="row">
				<cl-row :gutter="20">
					<cl-col :span="6">
						<cl-button fill size="mini" @tap="setLabelPosition('left')"
							>左对齐</cl-button
						>
					</cl-col>

					<cl-col :span="6">
						<cl-button fill size="mini" @tap="setLabelPosition('right')"
							>右对齐</cl-button
						>
					</cl-col>

					<cl-col :span="6">
						<cl-button fill size="mini" @tap="setLabelPosition('top')"
							>顶部对齐</cl-button
						>
					</cl-col>

					<cl-col :span="6">
						<cl-button fill size="mini" @tap="changeDisabled">{{
							disabled ? "解除禁用" : "禁用"
						}}</cl-button>
					</cl-col>
				</cl-row>
			</view>

			<view class="row">
				<cl-row :gutter="20">
					<cl-col :span="8">
						<cl-button fill size="mini" @tap="changeRule">{{
							isRule ? "清空验证" : "还原验证"
						}}</cl-button>
					</cl-col>

					<cl-col :span="8">
						<cl-button fill size="mini" @tap="clearValidate">移除校验结果</cl-button>
					</cl-col>

					<cl-col :span="8">
						<cl-button fill size="mini" @tap="changeShowMessage">{{
							showMessage ? "关闭错误提示" : "打开错误提示"
						}}</cl-button>
					</cl-col>
				</cl-row>
			</view>

			<!-- 表单 -->
			<cl-form
				ref="form"
				:model.sync="form"
				:rules="rules"
				:label-position="labelAlign"
				:label-width="labelWidth"
				:show-message="showMessage"
				:disabled="disabled"
			>
				<cl-form-item label="活动名称" prop="name">
					<cl-input placeholder="请填写活动名称" v-model="form.name"></cl-input>
				</cl-form-item>
				<cl-form-item label="活动描述" prop="desc">
					<cl-textarea
						count
						placeholder="活动描述，自定义错误内容"
						v-model="form.desc"
					></cl-textarea>

					<!-- #ifndef MP-TOUTIAO -->
					<template #error="{message, error}">
						<cl-row
							type="flex"
							align="middle"
							justify="end"
							:margin="[20, 0, 0, 0]"
							v-if="error"
						>
							<cl-text color="red" :value="message" :margin="[0, 20, 0, 0]"></cl-text>
							<cl-button size="mini" @tap="autoInputDesc">自动填写</cl-button>
						</cl-row>
					</template>
					<!-- #endif -->
				</cl-form-item>
				<cl-form-item label="活动区域" prop="region" justify="end">
					<cl-select-region
						border
						placeholder="请选择活动区域"
						v-model="form.region"
					></cl-select-region>
				</cl-form-item>
				<cl-form-item label="活动时间" prop="date" justify="end">
					<cl-select
						border
						mode="date"
						placeholder="请选择活动时间"
						v-model="form.date"
					></cl-select>
				</cl-form-item>
				<cl-form-item label="即时配送" prop="delivery" justify="end">
					<label>
						<cl-switch v-model="form.delivery"></cl-switch>
						<text>{{ form.delivery ? "开启" : "关闭" }}</text>
					</label>
				</cl-form-item>
				<cl-form-item label="活动海报" prop="cover">
					<cl-upload v-model="form.cover" :size="['200rpx', '200rpx']"></cl-upload>
				</cl-form-item>
				<cl-form-item label="活动性质" prop="type">
					<cl-checkbox-group v-model="form.type">
						<block v-for="(item, index) in options.type" :key="index">
							<cl-checkbox :label="item.value">{{ item.label }}</cl-checkbox>
							<br />
						</block>
					</cl-checkbox-group>
				</cl-form-item>
				<cl-form-item label="特殊资源" prop="resource">
					<cl-radio-group v-model="form.resource">
						<cl-radio
							v-for="(item, index) in options.resource"
							:key="index"
							:label="item.value"
							>{{ item.label }}</cl-radio
						>
					</cl-radio-group>
				</cl-form-item>
			</cl-form>
		</cl-card>

		<view class="footer">
			<cl-row :gutter="20">
				<cl-col :span="12">
					<cl-button type="primary" fill @tap="onSubmit">立即创建</cl-button>
				</cl-col>

				<cl-col :span="12">
					<cl-button fill @tap="onReset">重置</cl-button>
				</cl-col>
			</cl-row>
		</view>
	</view>
</template>

<script>
import { isArray } from "cl-uni/utils";

export default {
	data() {
		return {
			form: {
				name: "",
				region: ["120000", "120100", "120103"],
				type: [0, 3],
				delivery: true,
				resource: 0,
				desc: "",
				date: "",
				cover: ""
			},
			rules: {
				name: [
					{
						required: true,
						message: "活动名称不能为空"
					},
					{
						min: 3,
						message: "必须在3个字符以上"
					}
				],
				region: {
					required: true,
					message: "活动地区不能为空"
				},
				date: [
					{
						required: true,
						message: "活动时间不能为空"
					},
					{
						validator(rule, value, callback) {
							let d = new Date(value);
							if (d.getMonth() < 11) {
								callback(new Error("请选择12月"));
							} else {
								callback();
							}
						}
					}
				],
				desc: {
					required: true,
					message: "活动描述不能为空"
				}
			},
			options: {
				type: [
					{
						label: "美食/餐厅线上活动",
						value: 0
					},
					{
						label: "地推活动",
						value: 1
					},
					{
						label: "线下主题活动",
						value: 2
					},
					{
						label: "单纯品牌曝光",
						value: 3
					}
				],
				region: [
					{
						label: "不限",
						value: 0
					},
					{
						label: "区域一",
						value: 1
					},
					{
						label: "区域二",
						value: 2
					}
				],
				resource: [
					{
						label: "线上品牌商赞助",
						value: 0
					},
					{
						label: "线下场地免费",
						value: 1
					},
					{
						label: "其他",
						value: 2
					}
				]
			},
			labelAlign: "right",
			labelWidth: "150rpx",
			isRule: true,
			showMessage: true,
			disabled: false
		};
	},

	mounted() {},

	methods: {
		setLabelPosition(pos) {
			this.labelAlign = pos;
		},
		changeRule() {
			this.isRule = !this.isRule;

			for (let i in this.rules) {
				if (isArray(this.rules[i])) {
					this.rules[i].map(e => {
						if (e.required !== undefined) {
							e.required = this.isRule;
						}
					});
				} else {
					this.rules[i].required = this.isRule;
				}
			}

			this.$refs["form"].setRules(this.rules);
		},
		changeShowMessage() {
			this.showMessage = !this.showMessage;
		},
		changeDisabled() {
			this.disabled = !this.disabled;
		},
		clearValidate() {
			this.$refs["form"].clearValidate();
		},
		autoInputDesc() {
			this.form.desc = "年年有风，风吹年年，慢慢即漫漫";
		},
		onSubmit() {
			this.$refs["form"].validate((valid, errors) => {
				console.log(valid);

				if (valid) {
					this.$refs["toast"].open("提交成功");
					console.log(this.form);
				} else {
					this.$refs["toast"].open(errors[0].message);
				}
			});
		},
		onReset() {
			this.$refs["form"].resetFields();
		}
	}
};
</script>

<style lang="scss" scoped>
.demo-rules {
	padding-bottom: calc(90rpx + env(safe-area-inset-bottom));

	.footer {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		background-color: #fff;
		z-index: 9;
		padding: 10rpx 20rpx;
		box-sizing: border-box;
		border-top: 1rpx solid #eee;
		padding-bottom: calc(env(safe-area-inset-bottom) + 10rpx);
	}
}
</style>
