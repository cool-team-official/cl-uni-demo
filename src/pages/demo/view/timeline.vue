<template>
	<cl-card label="默认">
		<cl-timeline>
			<cl-timeline-item
				v-for="(item, index) in list"
				:key="index"
				:timestamp="item.timestamp"
				:show-line="item.showLine"
				:content="item.content"
				:icon="item.icon"
				:color="item.color"
			>
			</cl-timeline-item>
		</cl-timeline>
	</cl-card>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{
					timestamp: "昨天",
					content: "开通账号，赠送500"
				},
				{
					timestamp: "今天",
					content: "成功转入9000",
					color: "#409EFF"
				},
				{
					timestamp: "2020-11-06 12:30",
					content: "开始计算收益",
					icon: "cl-icon-toast-waiting",
					color: "#E6A23C"
				},
				{
					timestamp: "2020-11-09 16:21",
					content: "收益到账",
					showLine: true,
					icon: "cl-icon-check-border",
					color: "#67C23A"
				}
			]
		};
	}
};
</script>
