<template>
	<view class="demo-icon">
		<cl-card label="图标">
			<cl-row :gutter="20">
				<cl-col span="8" v-for="(item, index) in list" :key="index">
					<view class="block">
						<cl-icon :name="item" :size="44"></cl-icon>
						<text class="label">cl-icon-{{ item }}</text>
					</view>
				</cl-col>
			</cl-row>
		</cl-card>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [
				"refresh",
				"search",
				"check",
				"close",
				"plus",
				"minus",
				"plus-border",
				"minus-border",
				"check-border",
				"close-border",
				"help-border",
				"warning-border",
				"wait-border",
				"meh-border",
				"cry-border",
				"smile-border",
				"back-top",
				"calendar",
				"customer-service",
				"scan",
				"pay",
				"stop",
				"play",
				"more",
				"map",
				"keyboard-9",
				"keyboard-26",
				"edit",
				"chart-bar",
				"chart-pie",
				"cloud-upload",
				"cloud-download",
				"eye-open",
				"eye-close",
				"like",
				"my",
				"friend",
				"set",
				"arrow-top",
				"arrow-bottom",
				"arrow-left",
				"arrow-double-left",
				"arrow-right",
				"arrow-double-right",
				"top",
				"upgrade",
				"rise",
				"decline",
				"active",
				"fullscreen",
				"enlarge",
				"shrink",
				"cropper",
				"share",
				"link",
				"back",
				"enter",
				"notification",
				"toast-waiting",
				"toast-success",
				"toast-error",
				"toast-warning",
				"caret-bottom",
				"caret-top",
				"clock-fill",
				"favor-fill",
				"success-fill",
				"delete-fill",
				"smile-fill",
				"meh-fill",
				"cry-fill",
				"like-fill",
				"history-fill",
				"map-fill"
			]
		};
	}
};
</script>

<style lang="scss">
.demo-icon {
	.block {
		text-align: center;
		box-sizing: border-box;
		height: 200rpx;
		padding-top: 50rpx;

		&:active {
			background-color: #eee;
		}

		.label {
			display: block;
			font-size: 22rpx;
			margin-top: 10rpx;
		}
	}
}
</style>
