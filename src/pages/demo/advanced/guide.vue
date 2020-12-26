<template>
	<cl-guide ref="guide" mode="darken" @change="onChange" @done="onDone" @skip="onSkip">
		<view class="demo-step-guide">
			<view class="row">
				<text class="text" @tap="toast">文字</text>
			</view>

			<view class="row">
				<view class="block">块</view>
			</view>

			<view class="row">
				<view class="image">
					<cl-image
						:size="200"
						src="https://cool-comm.oss-cn-shenzhen.aliyuncs.com/show/imgs/avatar.jpeg"
					/>
				</view>
			</view>

			<view class="row">
				<text class="position">左下角定位</text>
			</view>

			<view class="row">
				<view class="content">
					<div class="component">
						<cl-tag>其他组件</cl-tag>
					</div>
				</view>
			</view>
		</view>
	</cl-guide>
</template>

<script>
export default {
	data() {
		return {
			steps: [
				{
					selector: ".text",
					content: "文字描述,可以设置justify修改水平位置",
					justify: "center"
				},
				{
					selector: ".block",
					style: {
						"border-radius": "100rpx"
					},
					content: "如果page有设置颜色,底色无法取消.则可以自定义样式修改圆角",
					onClick({ next }) {
						next();
					},
					onNext({ step, current, next, prev, skip, done }) {
						next();
					}
				},
				{
					selector: ".component",
					content: "自定义组件时,需要在外面包一层view"
				},
				{
					selector: ".image",
					style: {
						'border-radius': '100px'
					},
					image: {
						url: "/static/images/guide.png",
						style: {
							height: "240rpx",
							width: "320rpx"
						}
					}
				},
				{
					selector: ".position",
					content: "超出时,会自己调整位置"
				}
			]
		};
	},

	mounted() {
		this.$refs["guide"].defineSteps(this.steps);
		this.$refs["guide"].start();
	},

	methods: {
		onChange(index) {
			console.log("index", index);
		},

		onDone(step) {
			console.log("step", step);
		},

		onSkip(index) {
			console.log("skip", index);
		},

		toast() {
			console.log("toast");
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

<style lang="scss" scoped>
.demo-step-guide {
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	width: 100%;

	.row {
		margin: 20rpx;
	}

	.position {
		position: fixed;
		left: 20rpx;
		bottom: 20rpx;
	}

	.image {
		border-radius: 100rpx;
		overflow: hidden;
	}

	.block {
		height: 150rpx;
		width: 150rpx;
		background-color: #fff;
		border-radius: 150rpx;
		text-align: center;
		line-height: 150rpx;
	}
}
</style>
