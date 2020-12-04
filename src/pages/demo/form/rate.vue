<template>
	<view class="demo-rate">
		<cl-card label="基础用法">
			<view class="row">
				<cl-rate :value="2.7"></cl-rate>
			</view>

			<view class="row">
				<cl-rate :value="2" :color="['#F56C6C', '#E6A23C', '#67C23A']"></cl-rate>
			</view>
		</cl-card>

		<cl-card label="不同图标">
			<view class="row">
				<cl-rate :value="1" icon="like"></cl-rate>
			</view>

			<view class="row">
				<cl-rate :value="3" icon="success-fill"></cl-rate>
			</view>
		</cl-card>

		<cl-card label="只读">
			<cl-rate :value="4" disabled></cl-rate>
		</cl-card>

		<cl-card label="显示数值">
			<cl-rate :value="3.4" show-text></cl-rate>
		</cl-card>
	</view>
</template>

<script>
export default {};
</script>
