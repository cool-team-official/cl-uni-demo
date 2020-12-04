<template>
	<view class="demo-input">
		<cl-card label="基础用法">
			<cl-input placeholder="请输入内容"></cl-input>
		</cl-card>

		<cl-card label="禁用状态">
			<cl-input placeholder="请输入内容" disabled></cl-input>
		</cl-card>

		<cl-card label="可清空">
			<cl-input placeholder="请输入内容" clearable></cl-input>
		</cl-card>

		<cl-card label="圆角">
			<cl-input placeholder="请输入内容" round></cl-input>
		</cl-card>

		<cl-card label="带icon">
			<view class="row">
				<cl-input
					v-model="val3"
					placeholder="请输入内容"
					prefix-icon="cl-icon-search"
					@prefix-icon-tap="onPrefixIconTap"
				></cl-input>
			</view>

			<view class="row">
				<cl-input placeholder="请输入内容" suffix-icon="cl-icon-image"></cl-input>
			</view>
		</cl-card>

		<cl-card label="自定义">
			<view class="row">
				<cl-input placeholder="请输入内容">
					<text slot="prepend">https://</text>
				</cl-input>
			</view>

			<view class="row">
				<cl-input placeholder="请输入内容">
					<text slot="append">.com</text>
				</cl-input>
			</view>

			<view class="row">
				<cl-input placeholder="请输入内容">
					<view slot="prepend">
						<cl-select v-model="val5" :options="options.city"></cl-select>
					</view>
					<cl-button type="success" size="mini" round slot="append">搜索关键字</cl-button>
				</cl-input>
			</view>
		</cl-card>

		<cl-toast ref="toast"></cl-toast>
	</view>
</template>

<script>
export default {
	data() {
		return {
			val1: "",
			val2: "",
			val3: "",
			val4: "",
			val5: 1,
			options: {
				city: [
					{
						label: "厦门市",
						value: 0
					},
					{
						label: "福州市",
						value: 1
					},
					{
						label: "龙岩市",
						value: 2
					}
				]
			}
		};
	},

	methods: {
		onPrefixIconTap(val) {
			this.$refs["toast"].open("输入" + val);
		}
	}
};
</script>

<style lang="scss" scoped>
.demo-input {
}
</style>
