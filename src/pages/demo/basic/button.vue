<template>
	<view class="demo-button">
		<cl-card label="默认按钮">
			<cl-row>
				<cl-col v-for="(item, index) in list" :key="index" :span="8">
					<cl-button :type="item.value">
						<text>{{ item.label }}</text>
					</cl-button>
				</cl-col>
			</cl-row>
		</cl-card>

		<cl-card label="朴素按钮">
			<cl-row>
				<cl-col v-for="(item, index) in list" :key="index" :span="8">
					<cl-button :type="item.value" plain>
						<text>{{ item.label }}</text>
					</cl-button>
				</cl-col>
			</cl-row>
		</cl-card>

		<cl-card label="圆角按钮">
			<cl-row>
				<cl-col v-for="(item, index) in list" :key="index" :span="8">
					<cl-button :type="item.value" round>
						<text>{{ item.label }}</text>
					</cl-button>
				</cl-col>
			</cl-row>
		</cl-card>

		<cl-card label="图标按钮">
			<cl-button type="primary" icon="cl-icon-arrow-left">
				<text>上一页</text>
			</cl-button>
			<cl-button type="primary">
				<text>下一页</text>
				<text class="cl-icon-arrow-right"></text>
			</cl-button>
			<cl-button type="primary" icon="cl-icon-search">
				<text>搜索</text>
			</cl-button>
		</cl-card>

		<cl-card label="文字按钮">
			<cl-button type="text">
				<text>文字按钮</text>
			</cl-button>

			<cl-button type="text" disabled>
				<text>文字按钮</text>
			</cl-button>
		</cl-card>

		<cl-card label="按钮阴影">
			<cl-button type="primary" shadow>
				<text>图标按钮</text>
			</cl-button>
		</cl-card>

		<cl-card label="禁用">
			<cl-row>
				<cl-col v-for="(item, index) in list" :key="index" :span="8">
					<cl-button :type="item.value" disabled>
						<text>{{ item.label }}</text>
					</cl-button>
				</cl-col>
			</cl-row>
		</cl-card>

		<cl-card label="加载">
			<cl-row>
				<cl-col v-for="(item, index) in list" :key="index" :span="8">
					<cl-button :type="item.value" loading>
						<text>{{ item.label }}</text>
					</cl-button>
				</cl-col>

				<cl-button loading-theme="spin" loading>不同加载图标</cl-button>

				<cl-button
					loading-theme="spin"
					loading
					loading-mask
					loading-text="加载中"
					type="primary"
					>填充loading</cl-button
				>
			</cl-row>
		</cl-card>

		<cl-card label="按钮尺寸">
			<cl-button size="default">
				<text>默认按钮</text>
			</cl-button>

			<cl-button size="small">
				<text>小号按钮</text>
			</cl-button>

			<cl-button size="mini">
				<text>超小号按钮</text>
			</cl-button>
		</cl-card>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{
					label: "默认按钮",
					value: ""
				},
				{
					label: "主要按钮",
					value: "primary"
				},
				{
					label: "成功按钮",
					value: "success"
				},
				{
					label: "失败按钮",
					value: "error"
				},
				{
					label: "警告按钮",
					value: "warning"
				},
				{
					label: "信息按钮",
					value: "info"
				}
			]
		};
	}
};
</script>

<style lang="scss">
.demo-button {
	.cl-button {
		margin-bottom: 20rpx;
	}
}
</style>
