<template>
	<view class="demo-calendar">
		<cl-card label="默认">
			<cl-button @tap="open">打开</cl-button>
			<cl-text :margin="[0, 0, 0, 20]" :value="date"></cl-text>
			<cl-calendar ref="calendar" v-model="date" />
		</cl-card>

		<cl-card label="日期范围">
			<cl-button @tap="open2">打开</cl-button>
			<cl-text :margin="[0, 0, 0, 20]" :value="daterange.join('~')"></cl-text>
			<cl-calendar ref="calendar2" type="daterange" v-model="daterange" />
		</cl-card>

		<cl-card label="农历">
			<cl-button @tap="open3">打开</cl-button>
			<cl-text :margin="[0, 0, 0, 20]" :value="date2"></cl-text>
			<cl-calendar ref="calendar3" lunar v-model="date2" />
		</cl-card>

		<cl-card label="自定义块">
			<cl-button @tap="open4">打开</cl-button>
			<cl-text :margin="[0, 0, 0, 20]" :value="date3"></cl-text>
			<cl-calendar
				ref="calendar4"
				lunar
				v-model="date3"
				:custom-list="[
					{
						date: '2020-11-27',
						color: 'red',
						remark: '我们',
						value: '敏'
					}
				]"
			/>
		</cl-card>
	</view>
</template>

<script>
export default {
	data() {
		return {
			date: "",
			date2: "2020-06-06",
			date3: "2020-11-27",
			daterange: ["2020-12-01", "2021-01-01"]
		};
	},

	methods: {
		open() {
			this.$refs.calendar.open();
		},

		open2() {
			this.$refs.calendar2.open();
		},

		open3() {
			this.$refs.calendar3.open();
		},

		open4() {
			this.$refs.calendar4.open();
		}
	}
};
</script>
