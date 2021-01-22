<template>
	<view class="demo-select">
		<cl-card label="基础用法">
			<cl-select v-model="form.a" :options="options" @confirm="onConfirm"></cl-select>
		</cl-card>

		<cl-card label="禁用状态">
			<cl-select v-model="form.b" :options="options" disabled></cl-select>
		</cl-card>

		<cl-card label="带边框">
			<cl-select border v-model="form.c" :options="options"></cl-select>
		</cl-card>

		<cl-card label="带边框禁用">
			<cl-select border v-model="form.c" :options="options" disabled></cl-select>
		</cl-card>

		<cl-card label="日期">
			<cl-select border v-model="form.d" mode="date"></cl-select>
		</cl-card>
	</view>
</template>

<script>
export default {
	data() {
		return {
			form: {
				a: 1,
				b: 3,
				c: 0,
				d: ""
			},
			options: [
				{
					label: "海南东山羊",
					value: 0,
					d: 1,
					a: 2
				},
				{
					label: "乌鱼子",
					value: 1
				},
				{
					label: "葛仙米",
					value: 2
				},
				{
					label: "亚东鲑鱼",
					value: 3
				},
				{
					label: "虫草",
					value: 4
				},
				{
					label: "太湖银鱼",
					value: 5
				}
			]
		};
	},

	methods: {
		onConfirm(d) {
			console.log(d);
		}
	}
};
</script>
