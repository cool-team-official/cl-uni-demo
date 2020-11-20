<template>
	<view class="demo-input-number">
		<cl-card label="基本用法">
			<cl-input-number v-model="val"></cl-input-number>
		</cl-card>

		<cl-card label="步数">
			<cl-input-number v-model="val1" :step="5"></cl-input-number>
		</cl-card>

		<cl-card label="范围（4~10）">
			<cl-input-number v-model="val2" :max="10" :min="4"></cl-input-number>
		</cl-card>
	</view>
</template>

<script>
export default {
	data() {
		return {
			val: 0,
			val1: 5,
			val2: 0
		};
	}
};
</script>
