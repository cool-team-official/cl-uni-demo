<template>
	<view
		class="cl-drag"
		:style="{
			left: move.x + 'px',
			top: move.y + 'px',
			transform: `scale(${scale})`
		}"
		@touchstart.stop.prevent="onTouchStart"
		@touchmove.stop.prevent="onTouchMove"
		@touchend.stop.prevent="onTouchEnd"
	>
		<slot></slot>
	</view>
</template>

<script>
const { screenWidth, screenHeight } = uni.getSystemInfoSync();

export default {
	props: {
		// 最大比例
		maxScale: {
			type: Number,
			default: 4
		},
		// 最小比例
		minScale: {
			type: Number,
			default: 0.3
		},
		// 是否禁用
		disabled: Boolean,
		// 能否放大缩小
		resize: {
			type: Boolean,
			default: true
		}
	},

	data() {
		return {
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
			el: {
				h: 0,
				w: 0
			},
			lock: false,
			scale: 1
		};
	},

	methods: {
		onTouchStart(e) {
			if (this.disabled) {
				return false;
			}

			uni.createSelectorQuery()
				.in(this)
				.select(".cl-drag")
				.boundingClientRect(d => {
					// 设置当前元素大小
					this.el = d;

					// 加锁
					this.lock = true;

					// 双指放大缩小
					if (e.touches.length >= 2) {
						let x = e.touches[0].pageX - e.touches[1].pageX;
						let y = e.touches[0].pageY - e.touches[1].pageY;

						// 比例
						this.start.scale = this.scale;
						// 斜边
						this.start.hyp = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
					}
					// 单指拖动
					else {
						this.start.x = e.touches[0].pageX - d.left;
						this.start.y = e.touches[0].pageY - d.top - 44;
					}
				})
				.exec();
		},

		onTouchMove(e) {
			if (this.lock) {
				// 双指放大缩小
				if (e.touches.length >= 2) {
					if (!this.resize) {
						return false;
					}

					// 计算双指位置
					let x = e.touches[0].pageX - e.touches[1].pageX;
					let y = e.touches[0].pageY - e.touches[1].pageY;

					// 斜边
					this.move.hyp = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

					// 比例
					let scale = this.start.scale + (this.move.hyp - this.start.hyp) / 100;

					// 最小
					if (scale < this.minScale) {
						scale = this.minScale;
					}

					// 最大
					if (scale > this.maxScale) {
						scale = this.maxScale;
					}

					// 设置比例
					this.scale = scale;

					this.$emit("scale", scale);
				}
				// 单指拖动
				else {
					let x = e.touches[0].pageX - this.start.x;
					let y = e.touches[0].pageY - this.start.y;

					this.move.x = x;
					this.move.y = y;

					this.$emit("move", { x, y });
				}
			}
		},

		onTouchEnd(e) {
			this.lock = false;
		}
	}
};
</script>

<style scoped>
.cl-drag {
	position: absolute;
}
</style>
