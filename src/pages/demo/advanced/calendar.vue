<template>
	<view class="demo-calendar">
		<cl-card label="默认">
			<cl-button @tap="open">打开</cl-button>
			<calendar ref="calendar" />
		</cl-card>
	</view>
</template>

<script>
import Calendar from "@/components/calendar";

export default {
	components: {
		Calendar
	},

	methods: {
		open() {
			this.$refs.calendar.open();
		}
	}
};
</script>
