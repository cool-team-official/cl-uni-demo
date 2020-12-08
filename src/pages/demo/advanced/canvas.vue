<template>
	<view class="demo-canvas">
		<canvas style="width: 100%" canvas-id="test"></canvas>

		<view class="op">
			<cl-button @tap="preview">预览图片</cl-button>

			<!-- #ifndef H5 -->
			<cl-button @tap="save">保存图片</cl-button>
			<!-- #endif -->
		</view>
	</view>
</template>

<script>
import Canvas from "cl-uni/utils/canvas";

const { windowWidth } = uni.getSystemInfoSync();

export default {
	data() {
		return {};
	},

	mounted() {
		this.cvs = new Canvas("test", this);

		this.cvs
			.div({
				x: 10,
				y: 10,
				height: 120,
				width: windowWidth - 20,
				radius: 5,
				backgroundColor: "#fff"
			})
			.text({
				x: 130,
				y: 43,
				width: windowWidth - 150,
				overflow: "ellipsis",
				lineClamp: 5,
				text: `我要把你揉进我怀里 把你做进我梦里 然后靠一个吻 缝补这距离 捱过无能为力的年纪 我一定要拥有你 是我最亲爱的你 给你一整首情诗 关于你温暖名字 在每个孑然的深夜为你诵读 字句真诚而坚固 星辰也为你祝福 一想你 `
			})
			.text({
				x: 130,
				y: 22,
				fontSize: 15,
				width: 150,
				text: "千禧 - 徐秉龙"
			})
			.image({
				x: 20,
				y: 20,
				height: 100,
				width: 100,
				radius: 10,
				url: "/static/images/1.jpg"
			})
			.draw();
	},

	methods: {
		preview() {
			this.cvs.previewImage();
		},
		save() {
			this.cvs.saveImage();
		}
	}
};
</script>

<style lang="scss" scoped>
.demo-canvas {
	canvas {
		height: 140px;
	}

	.op {
		padding: 0 20rpx;
	}
}
</style>
