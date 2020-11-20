<template>
	<cl-list-index
		ref="list-index"
		:index="active"
		:list="list"
		@search="onSearch"
		@select="onSelect"
		@change="onChange"
	>
	</cl-list-index>
</template>

<script>
export default {
	data() {
		return {
			active: 1,
			list: [
				{
					label: "A",
					children: [
						{
							avatarUrl:
								"https://cool-comm.oss-cn-shenzhen.aliyuncs.com/show/imgs/chat/avatar/1.jpg",
							name: "阿雪"
						},
						{
							avatarUrl:
								"https://cool-comm.oss-cn-shenzhen.aliyuncs.com/show/imgs/chat/avatar/3.jpg",
							name: "阿良"
						},
						{
							avatarUrl:
								"https://cool-comm.oss-cn-shenzhen.aliyuncs.com/show/imgs/chat/avatar/2.jpg",
							name: "阿绵"
						}
					]
				},
				{
					label: "C",
					children: [
						{
							avatarUrl:
								"https://cool-comm.oss-cn-shenzhen.aliyuncs.com/show/imgs/chat/avatar/5.jpg",
							name: "陈杨"
						},
						{
							avatarUrl:
								"https://cool-comm.oss-cn-shenzhen.aliyuncs.com/show/imgs/chat/avatar/6.jpg",
							name: "陈飞"
						},
						{
							avatarUrl:
								"https://cool-comm.oss-cn-shenzhen.aliyuncs.com/show/imgs/chat/avatar/7.jpg",
							name: "陈品如"
						},
						{
							avatarUrl:
								"https://cool-comm.oss-cn-shenzhen.aliyuncs.com/show/imgs/chat/avatar/4.jpg",
							name: "陈逸"
						}
					]
				},
				{
					label: "D",
					children: [
						{
							avatarUrl:
								"https://cool-comm.oss-cn-shenzhen.aliyuncs.com/show/imgs/chat/avatar/10.jpg",
							name: "道天"
						}
					]
				},
				{
					label: "H",
					children: [
						{
							avatarUrl:
								"https://cool-comm.oss-cn-shenzhen.aliyuncs.com/show/imgs/chat/avatar/9.jpg",
							name: "韩琦"
						},
						{
							avatarUrl:
								"https://cool-comm.oss-cn-shenzhen.aliyuncs.com/show/imgs/chat/avatar/10.jpg",
							name: "韩重"
						}
					]
				},
				{
					label: "J",
					children: [
						{
							avatarUrl:
								"https://cool-comm.oss-cn-shenzhen.aliyuncs.com/show/imgs/chat/avatar/3.jpg",
							name: "江澄"
						},
						{
							avatarUrl:
								"https://cool-comm.oss-cn-shenzhen.aliyuncs.com/show/imgs/chat/avatar/7.jpg",
							name: "江厌离"
						}
					]
				},
				{
					label: "S",
					children: [
						{
							avatarUrl:
								"https://cool-comm.oss-cn-shenzhen.aliyuncs.com/show/imgs/chat/avatar/2.jpg",
							name: "苏三"
						},
						,
						{
							avatarUrl:
								"https://cool-comm.oss-cn-shenzhen.aliyuncs.com/show/imgs/chat/avatar/4.jpg",
							name: "沈道"
						}
					]
				},
				{
					label: "Z",
					children: [
						{
							avatarUrl:
								"https://cool-comm.oss-cn-shenzhen.aliyuncs.com/show/imgs/chat/avatar/4.jpg",
							name: "周蓓蓓"
						},
						{
							avatarUrl:
								"https://cool-comm.oss-cn-shenzhen.aliyuncs.com/show/imgs/chat/avatar/2.jpg",
							name: "朱勇"
						},
						{
							avatarUrl:
								"https://cool-comm.oss-cn-shenzhen.aliyuncs.com/show/imgs/chat/avatar/3.jpg",
							name: "朱鸣"
						},
						{
							avatarUrl:
								"https://cool-comm.oss-cn-shenzhen.aliyuncs.com/show/imgs/chat/avatar/1.jpg",
							name: "张伟"
						},
						{
							avatarUrl:
								"https://cool-comm.oss-cn-shenzhen.aliyuncs.com/show/imgs/chat/avatar/9.jpg",
							name: "郑金榜"
						}
					]
				}
			]
		};
	},

	methods: {
		onSearch(v) {
			console.log("search", iv);
		},

		onSelect(item) {
			console.log("select", item);
		},

		onChange(item) {
			console.log("change", item);
		}
	}
};
</script>

<style lang="scss">
page {
	height: 100%;
	overflow: hidden;
}
</style>
