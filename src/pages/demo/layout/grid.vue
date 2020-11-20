<template>
	<view class="demo-grid">
		<cl-card label="默认">
			<cl-grid :column="4" @change="onChange" border>
				<cl-grid-item v-for="(item, index) in 12" :key="index" :index="index">
					<view class="block">
						<cl-button round size="small" :type="index | type" @tap="onTap(index)">{{
							index
						}}</cl-button>
					</view>
				</cl-grid-item>
			</cl-grid>
		</cl-card>

		<cl-toast ref="toast"></cl-toast>
	</view>
</template>

<script>
export default {
	methods: {
		onTap(index) {
			this.$refs["toast"].open(`点击了${index + 1}`);
		}
	},

	filters: {
		type() {
			return ["primary", "success", "error", "warning", "info"][parseInt(Math.random() * 5)];
		}
	}
};
</script>

<style lang="scss" scoped>
.demo-grid {
	.block {
		text-align: center;
		font-size: 30rpx;
		padding: 40rpx 0;
	}
}
</style>
