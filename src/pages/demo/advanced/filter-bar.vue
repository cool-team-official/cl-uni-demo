<template>
	<view class="demo-filter-bar">
		<cl-filter-bar v-model="val" :list="list" @change="onChange"></cl-filter-bar>

		<view class="container">
			<view> Prop: {{ prop }} </view>
			<view> Order: {{ order }} </view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			val: "price",
			list: [
				{
					label: "综合",
					value: ""
				},
				{
					label: "销量",
					value: "sale"
				},
				{
					label: "价格",
					value: "price",
					order: "desc"
				}
			],
			prop: "",
			order: ""
		};
	},

	methods: {
		onChange({ prop, order }) {
			this.prop = prop;
			this.order = order;
		}
	}
};
</script>

<style lang="scss" scoped>
.container {
	padding: 20rpx;
	font-size: 24rpx;

	view {
		margin-bottom: 10rpx;
	}
}
</style>
