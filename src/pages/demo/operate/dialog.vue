<template>
	<view class="demo-dialog">
		<cl-card label="基本弹窗">
			<cl-button @tap="open">打开</cl-button>
		</cl-card>

		<cl-card label="带有关闭按钮">
			<cl-button @tap="open2">打开</cl-button>
		</cl-card>

		<cl-card label="禁用点击遮罩关闭">
			<cl-button @tap="open3">打开</cl-button>
		</cl-card>

		<!-- 基本弹窗 -->
		<cl-dialog title="清平调" :visible.sync="visible">
			<text>云想衣裳花想容，春风拂槛露华浓。若非群玉山头见，会向瑶台月下逢。</text>
		</cl-dialog>

		<!-- 带有关闭按钮 -->
		<cl-dialog title="清平调" :visible.sync="visible2" show-close-btn>
			<text>云想衣裳花想容，春风拂槛露华浓。若非群玉山头见，会向瑶台月下逢。</text>
		</cl-dialog>

		<!-- 是否可通过点击遮罩关闭 -->
		<cl-dialog
			title="清平调"
			:visible.sync="visible3"
			show-close-btn
			:close-on-click-modal="false"
		>
			<text>云想衣裳花想容，春风拂槛露华浓。若非群玉山头见，会向瑶台月下逢。</text>
		</cl-dialog>
	</view>
</template>

<script>
export default {
	data() {
		return {
			visible: false,
			visible2: false,
			visible3: false
		};
	},

	methods: {
		open() {
			this.visible = true;
		},
		open2() {
			this.visible2 = true;
		},
		open3() {
			this.visible3 = true;
		}
	}
};
</script>

<style lang="scss" scoped>
.demo-dialog {
}
</style>
