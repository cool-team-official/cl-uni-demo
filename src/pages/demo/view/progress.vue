<template>
	<view class="demo-progress">
		<cl-card label="基本用法">
			<cl-progress :value="val"></cl-progress>
		</cl-card>

		<cl-card label="不同颜色">
			<cl-row :margin="[0, 0, 20, 0]">
				<cl-progress color="#67C23A" :value="40"></cl-progress>
			</cl-row>

			<cl-row :margin="[0, 0, 20, 0]">
				<cl-progress color="#E6A23C" :value="90"></cl-progress>
			</cl-row>

			<cl-row :margin="[0, 0, 20, 0]">
				<cl-progress color="#F56C6C" :value="20"></cl-progress>
			</cl-row>
		</cl-card>

		<cl-card label="可调节颜色">
			<cl-progress :value="val1" :color="['#F56C6C', '#E6A23C', '#67C23A']"></cl-progress>

			<cl-row :margin="[20, 0, 0, 0]">
				<cl-button round size="mini" @tap="val1 += 10">增加10</cl-button>
				<cl-button round size="mini" @tap="val1 -= 10">减少10</cl-button>
			</cl-row>
		</cl-card>

		<cl-card label="自定义">
			<cl-progress :value="val2">
				<view class="score" slot="text">
					<text v-if="val2 >= 90">优</text>
					<text v-else-if="val2 >= 80">良</text>
					<text v-else-if="val2 >= 60">及格</text>
					<text v-else>{{ val2 }}</text>
				</view>
			</cl-progress>

			<cl-row :margin="[20, 0, 0, 0]">
				<cl-button round size="mini" @tap="val2 += 10">增加10</cl-button>
				<cl-button round size="mini" @tap="val2 -= 10">减少10</cl-button>
			</cl-row>
		</cl-card>
	</view>
</template>

<script>
export default {
	data() {
		return {
			val: 35,
			val1: 15,
			val2: 70
		};
	}
};
</script>

<style lang="scss" scoped>
.demo-progress {
	.score {
		font-size: 28rpx;
		width: 60rpx;
		text-align: center;
	}
}
</style>
