<template>
	<view class="demo-select">
		<cl-card label="默认">
			<cl-select-region v-model="val" value-key="value" @change="onChange"></cl-select-region>
		</cl-card>

		<cl-card label="省市区">
			<cl-select-region
				v-model="val1"
				value-key="label"
				@change="onChange"
			></cl-select-region>
		</cl-card>
	</view>
</template>

<script>
export default {
	data() {
		return {
			val: [],
			val1: ["福建省", "厦门市", "湖里区"]
		};
	},

	methods: {
		onChange(v) {
			console.log(v);
		}
	}
};
</script>
