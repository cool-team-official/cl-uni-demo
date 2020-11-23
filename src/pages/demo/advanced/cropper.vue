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
		upload() {
			uni.chooseImage({
				count: 1, //默认9
				sizeType: ["original", "compressed"], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ["album"], //从相册选择
				success: res => {
					this.tempFilePath = res.tempFilePaths.shift();
				}
			});
		}
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
