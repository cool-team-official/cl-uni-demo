<template>
	<view class="demo-cropper">
		<cropper />
	</view>
</template>

<script>
import Cropper from "@/components/cropper";

export default {
	components: {
		Cropper
	},

	data() {
		return {
			tempFilePath: ""
		};
	},

	onLoad() {},

	methods: {
		upload() {}
	}
};
</script>

<style>
page {
	height: 100%;
	overflow: hidden;
}
</style>

<style lang="scss" scoped>
.demo-cropper {
	position: relative;
	height: 100%;
	width: 100%;
}
</style>
