<template>
	<view class="demo-timeline">
		<cl-card label="默认">
			<cl-timeline>
				<cl-timeline-item
					v-for="(item, index) in list"
					:key="index"
					:timestamp="item.timestamp"
					:last="item.last"
					:content="item.content"
				></cl-timeline-item>
			</cl-timeline>
		</cl-card>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{
					timestamp: "今天",
					content: "成功转入9000"
				},
				{
					timestamp: "11-06",
					content: "开始计算收益"
				},
				{
					timestamp: "11-09",
					content: "收益到账",
					last: true
				}
			]
		};
	}
};
</script>

<style lang="scss" scoped></style>
