<template>
	<cl-popup border-radius="20rpx 20rpx 0 0" :visible.sync="visible" direction="bottom">
		<view class="cl-calendar">
			<view class="cl-calendar__header">
				<text class="cl-calendar__title">选择日期</text>
				<text class="cl-calendar__close cl-icon-close"></text>
			</view>

			<view class="cl-calendar__container">
				<view class="cl-calendar__selector">

				</view>

				<view class="cl-calendar__pane">

				</view>
			</view>

			<view class="cl-calendar__footer">
				<cl-button fill round type="primary">确定</cl-button>
			</view>
		</view>
	</cl-popup>
</template>

<script>
	export default {
		data() {
			return {
				visible: true
			};
		},

		methods: {
			open() {
				this.visible = true;
			}
		}
	};
</script>

<style lang="scss" scoped>
	.cl-calendar {
		&__header {
			position: relative;
			padding-bottom: 20rpx;
			text-align: center;
		}

		&__title {
			font-size: 28rpx;
		}

		&__close {
			position: absolute;
			right: 0;
			top: 0;
			font-size: 36rpx;
		}
	}
</style>
