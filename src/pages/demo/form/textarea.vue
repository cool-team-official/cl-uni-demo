<template>
	<view class="demo-textarea">
		<cl-card label="默认">
			<cl-textarea placeholder="请填写内容"></cl-textarea>
		</cl-card>

		<!-- #ifndef MP-ALIPAY -->
		<cl-card label="带计数">
			<cl-textarea placeholder="请填写内容" count></cl-textarea>
		</cl-card>
		<!-- #endif -->
	</view>
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>
