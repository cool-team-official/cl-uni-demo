<template>
	<view class="demo-text">
		<cl-card label="默认">
			<cl-text value="云想衣裳花想容，春风拂槛露华浓。" :letterSpacing="5"></cl-text>
		</cl-card>

		<cl-card label="不同颜色">
			<view class="color">
				<cl-text value="主色" color="primary"></cl-text>
				<cl-text value="成功" color="success"></cl-text>
				<cl-text value="错误" color="error"></cl-text>
				<cl-text value="警告" color="warning"></cl-text>
				<cl-text value="信息" color="info"></cl-text>
			</view>
		</cl-card>

		<cl-card label="手机号">
			<cl-text type="phone" value="13255022022"></cl-text>
		</cl-card>

		<cl-card label="金额">
			<cl-text type="price" :size="40" value="19450"></cl-text>
		</cl-card>

		<cl-card label="下划线">
			<cl-text underline value="https://uni.cool-js.com" @tap="toLink"></cl-text>
		</cl-card>

		<cl-card label="前缀图标">
			<cl-text prefix-icon="help-border" value="有哪些小众又高级的礼物?"></cl-text>
		</cl-card>

		<cl-card label="后缀图标">
			<cl-text suffix-icon="smile-fill" value="君远隔重楼，北望愿相逢"></cl-text>
		</cl-card>

		<cl-card label="超出隐藏">
			<cl-text
				:ellipsis="2"
				block
				value="锦瑟无端五十弦，一弦一柱思华年。庄生晓梦迷蝴蝶，望帝春心托杜鹃。沧海月明珠有泪，蓝田日暖玉生烟。此情可待成追忆，只是当时已惘然。"
			></cl-text>
		</cl-card>
	</view>
</template>

<script>
export default {
	methods: {
		toLink() {
			location.href = "https://uni.cool-js.com";
		}
	}
};
</script>

<style lang="scss" scoped>
.demo-text {
	padding-bottom: env(safe-area-inset-bottom);

	.color {
		/deep/.cl-text {
			margin-right: 20rpx;
		}
	}
}
</style>
