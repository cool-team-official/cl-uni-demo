<template>
	<view class="demo-select">
		<cl-card label="省市区">
			<cl-select-region v-model="val" value-key="label"></cl-select-region>
		</cl-card>
	</view>
</template>

<script>
export default {
	data() {
		return {
			val: ""
		};
	}
};
</script>
