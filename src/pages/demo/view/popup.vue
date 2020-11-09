<template>
	<view class="demo-popup">
		<cl-card label="基本用法">
			<cl-row v-for="(item, index) in dirs" :key="index">
				<cl-popup :size="item.size" :visible.sync="item.visible" :direction="item.value">
					<p class="f-26">{{ item.label }}</p>
				</cl-popup>

				<cl-button @tap="openItem(item)">
					<text>{{ item.label }}</text>
				</cl-button>
			</cl-row>
		</cl-card>

		<cl-card label="自定义内容">
			<cl-confirm ref="confirm"></cl-confirm>

			<cl-popup
				ref="popup"
				:visible.sync="visible"
				direction="bottom"
				radius="20rpx 20rpx 0 0"
				@close="onClose"
				@open="onOpen"
			>
				<cl-form>
					<cl-form-item label="名称">
						<cl-input placeholder="请填写名称" maxlength="11" type="text"> </cl-input>
					</cl-form-item>
					<cl-form-item label="手机号">
						<cl-input placeholder="请填写手机号" maxlength="11" type="text"> </cl-input>
					</cl-form-item>
				</cl-form>

				<view class="footer">
					<cl-button @tap="close">
						<text>取消</text>
					</cl-button>
					<cl-button type="primary" @tap="submit">
						<text>提交</text>
					</cl-button>
				</view>
			</cl-popup>

			<cl-button @tap="open">
				<text>新增联系方式</text>
			</cl-button>
		</cl-card>
	</view>
</template>

<script>
export default {
	data() {
		return {
			visible: false,
			dirs: [
				{
					label: "顶部弹出",
					value: "top",
					visible: false,
					size: "auto"
				},
				{
					label: "右侧弹出",
					value: "right",
					visible: false,
					size: "auto"
				},
				{
					label: "底部弹出",
					value: "bottom",
					visible: false,
					size: "auto"
				},
				{
					label: "左侧弹出",
					value: "left",
					visible: false,
					size: "auto"
				},
				{
					label: "中间弹出",
					value: "center",
					visible: false,
					size: "auto"
				}
			]
		};
	},

	methods: {
		openItem(item) {
			item.visible = true;
		},
		open() {
			// this.$refs["popup"].open();
			console.log(11);
			this.visible = true;
		},
		close() {
			// this.$refs["popup"].close();
			this.visible = false;
		},
		onOpen() {
			console.log("open");
		},
		onClose() {
			console.log("close");
		},
		submit() {
			this.$refs["confirm"].open({
				title: "提示",
				message: "确定添加该条数据吗？",
				callback: ({ action }) => {
					if (action === "confirm") {
						this.visible = false;
					}
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.demo-popup {
	.f-26 {
		font-size: 26rpx;
	}

	.footer {
		margin-top: 20rpx;
		margin-bottom: 20rpx;
		display: flex;
		justify-content: flex-end;
	}
}
</style>
