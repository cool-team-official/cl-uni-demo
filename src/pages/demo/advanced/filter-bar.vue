<template>
	<view class="demo-filter-bar">
		<cl-filter-bar v-model="val" :list="list" @change="onChange"></cl-filter-bar>
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
			]
		};
	},

	methods: {
		onChange({ prop, order }) {
			console.log(prop, order);
		}
	}
};
</script>
