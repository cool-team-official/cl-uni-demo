<template>
	<view class="cl-cropper__wrap" @touchmove.stop.prevent catchtouchmove="false">
		<view class="cl-cropper">
			<view class="cl-cropper__container">
				<!-- 原图片 -->
				<view
					class="cl-cropper__image"
					:style="[
						{
							left: move.x + 'px',
							top: move.y + 'px'
						},
						imageStyle
					]"
					@touchstart.stop.prevent="onTouchStart"
					@touchmove.stop.prevent="onTouchMove"
					@touchend.stop.prevent="onTouchEnd"
				>
					<image :src="image.url" />
				</view>

				<!-- 选择框 -->
				<view class="cl-cropper__view" :style="[cropStyle]">
					<image
						:src="image.url"
						:style="[
							{
								left: image.left + 'px',
								top: image.top + 'px'
							},
							imageStyle
						]"
					/>
				</view>

				<!-- 工具 -->
				<view class="cl-cropper__tools"></view>

				<!-- 遮罩层 -->
				<view class="cl-cropper__mask"></view>
			</view>

			<view class="cl-cropper__footer">
				<cl-button @tap="upload">上传</cl-button>
				<cl-button @tap="confirm">确定</cl-button>
			</view>
		</view>

		<canvas
			id="canvas"
			canvas-id="canvas"
			class="cl-cropper__canvas"
			:style="[cropStyle]"
		></canvas>
	</view>
</template>

<script>
const { screenWidth, screenHeight, pixelRatio } = uni.getSystemInfoSync();

// 定位上偏移
let offsetTop = 0;

// #ifdef H5
offsetTop = 44;
// #endif

// #ifndef H5
offsetTop = 0;
// #endif

export default {
	props: {
		// 图片宽度
		imageWidth: {
			type: Number,
			default: 320
		},
		// 裁剪高度
		cropHeight: {
			type: Number,
			default: 200
		},
		// 裁剪宽度
		cropWidth: {
			type: Number,
			default: 200
		},
		// 底色
		backgroundColor: String
	},

	data() {
		return {
			image: {
				height: "",
				left: "",
				top: "",
				scale: 1,
				rotate: 0,
				url: ""
			},
			crop: {
				height: this.cropHeight,
				width: this.cropWidth,
				left: 0,
				top: 0
			},
			start: {
				x: 0,
				y: 0,
				hyp: 0,
				scale: 1
			},
			move: {
				x: null,
				y: null,
				hyp: 0
			},
			lock: false
		};
	},

	computed: {
		imageStyle() {
			let { height, width, scale } = this.image;

			return {
				height: `${height}px`,
				width: `${width}px`,
				transform: `scale(${scale}, ${scale})`
			};
		},
		cropStyle() {
			let { height, width } = this.crop;

			return {
				height: `${height}px`,
				width: `${width}px`
			};
		}
	},

	methods: {
		imageLoad() {
			uni.getImageInfo({
				src: this.image.url,
				success: res => {
					// 设置图片宽
					this.image.width = this.imageWidth * this.image.scale;
					// 设置图片高
					this.image.height = (this.image.width / res.width) * res.height;

					this.$nextTick(() => {
						// 获取视图大小
						uni.createSelectorQuery()
							.in(this)
							.select(".cl-cropper__view")
							.boundingClientRect(d => {
								this.crop = d;

								// 定位图片
								uni.createSelectorQuery()
									.in(this)
									.select(".cl-cropper__image")
									.boundingClientRect(({ left, top }) => {
										this.image.top = top - this.crop.top;
										this.image.left = left - this.crop.left;
									})
									.exec();
							})
							.exec();
					});
				}
			});
		},

		upload() {
			this.image.scale = 1.2;

			uni.chooseImage({
				success: res => {
					this.image.url = res.tempFilePaths[0];
					this.imageLoad();
				}
			});
		},

		confirm() {
			uni.showLoading({
				title: "裁剪中..."
			});

			const ctx = uni.createCanvasContext("canvas", this);

			// 缩放偏移
			const { x, y } = this.getScaleOffset();

			// 图片信息
			let { url, height, width, scale, rotate, left, top } = this.image;

			let h = height * scale;
			let w = width * scale;

			// 填充低色
			// ctx.setFillStyle(this.backgroundColor);
			// 设置大小
			ctx.fillRect(0, 0, w, h);
			ctx.save();
			// 旋转
			// 绘图
			ctx.drawImage(url, left - x, top - y, w, h);
			ctx.restore();

			ctx.draw(false, () => {
				// 输出图片宽度
				const destWidth = this.crop.width * pixelRatio;
				// 输出图片高度
				const destHeight = this.crop.height * pixelRatio;

				// 导出base64
				uni.canvasToTempFilePath(
					{
						canvasId: "canvas",
						destWidth: 200,
						destHeight: 200,
						success: res => {
							uni.hideLoading();

							uni.previewImage({
								urls: [res.tempFilePath]
							});
						},
						fail: e => {
							console.error(e.errMsg);
							uni.hideLoading();
						}
					},
					this
				);
			});
		},

		// 缩放偏移
		getScaleOffset() {
			let x = (this.image.scale - 1) * (this.image.width / 2);
			let y = (this.image.scale - 1) * (this.image.height / 2);

			return {
				x,
				y
			};
		},

		onTouchStart(e) {
			uni.createSelectorQuery()
				.in(this)
				.select(".cl-cropper__image")
				.boundingClientRect(d => {
					// 加锁
					this.lock = true;

					// 双指放大缩小
					if (e.touches.length >= 2) {
						let x = e.touches[0].pageX - e.touches[1].pageX;
						let y = e.touches[0].pageY - e.touches[1].pageY;

						// 比例
						this.start.scale = this.image.scale;
						// 斜边
						this.start.hyp = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
					}
					// 单指拖动
					else {
						this.start.x = e.touches[0].pageX - d.left;
						this.start.y = e.touches[0].pageY - d.top - offsetTop;
					}
				})
				.exec();
		},

		onTouchMove(e) {
			if (this.lock) {
				// 双指放大缩小
				if (e.touches.length >= 2) {
					// 计算双指位置
					let x = e.touches[0].pageX - e.touches[1].pageX;
					let y = e.touches[0].pageY - e.touches[1].pageY;

					// 斜边
					this.move.hyp = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

					// 比例
					let scale = this.start.scale + (this.move.hyp - this.start.hyp) / 100;

					// 最小
					if (scale < 0.3) {
						scale = 0.3;
					}

					// 最大
					if (scale > 4) {
						scale = 4;
					}

					// 设置比例
					this.image.scale = scale;
				}
				// 单指拖动
				else {
					// 移动位置
					let x = e.touches[0].pageX - this.start.x;
					let y = e.touches[0].pageY - this.start.y;

					// 缩放偏移
					const ofs = this.getScaleOffset();

					// 设置位置
					this.move.x = x + ofs.x;
					this.move.y = y + ofs.y;

					// 设置图片位置
					this.image.left = x + ofs.x - this.crop.left;
					this.image.top = y + ofs.y - this.crop.top - offsetTop;
				}
			}
		},

		onTouchEnd(e) {
			this.lock = false;
		}
	}
};
</script>

<style lang="scss" scoped>
.cl-cropper__wrap {
	position: fixed;
	bottom: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: 99;

	.cl-cropper {
		height: 100%;

		&__container {
			display: flex;
			justify-content: center;
			align-items: center;
			height: calc(100% - 80rpx);
			position: relative;
		}

		&__view {
			pointer-events: none;
			z-index: 9;
			background-color: #fff;
			overflow: hidden;
			position: absolute;

			image {
				position: absolute;
			}
		}

		&__image {
			position: absolute;

			image {
				display: block;
				height: 100%;
				width: 100%;
			}
		}

		&__mask {
			position: absolute;
			left: 0;
			top: 0;
			height: 100%;
			width: 100%;
			background-color: rgba(0, 0, 0, 0.4);
			pointer-events: none;
		}

		&__footer {
			height: 80rpx;
			background-color: #fff;
		}
	}

	.cl-cropper__canvas {
		position: absolute;
		top: -9999px;
		left: -9999px;
		z-index: -998;
	}
}
</style>
