<template>
	<view class="demo-tabs">
		<cl-tabs v-model="tabIndex" swipeable>
			<cl-tab-pane
				v-for="(item, index) in list"
				:key="index"
				:name="index"
				:label="item.label"
				:refresher-enabled="item.refresherEnabled"
				@pull-refresh="onPullRefresh(item, $event)"
				@loadmore="onLoadmore(item)"
			>
				<view class="list">
					<cl-list>
						<cl-list-item
							v-for="(item2, index2) in item.children"
							:key="index2"
							:label="`${item.label} - ${item2}`"
						>
							<cl-icon name="cl-icon-arrow-right"></cl-icon>
						</cl-list-item>
					</cl-list>
				</view>
			</cl-tab-pane>
		</cl-tabs>
	</view>
</template>

<script>
import Test from "@/components/test";

export default {
	components: {
		Test
	},

	data() {
		return {
			tabIndex: 0,
			list: [
				{
					label: "抖音视频",
					refresherEnabled: true
				},
				{
					label: "热点"
				},
				{
					label: "直播"
				},
				{
					label: "图片",
					"suffix-icon": "cl-icon-image"
				},
				{
					label: "科技"
				},
				{
					label: "娱乐"
				},
				{
					label: "游戏"
				},
				{
					label: "体育"
				},
				{
					label: "财经"
				},
				{
					label: "数码"
				}
			]
		};
	},

	created() {
		this.list.map((e, i) => {
			this.$set(e, "children", this.rdList(15));
		});
	},

	methods: {
		rdList(n) {
			return new Array(n).fill(1).map(() => parseInt(Math.random() * 100));
		},

		onPullRefresh(item, { done }) {
			item.children = this.rdList(15);
			done();
		},

		onLoadmore(item) {
			item.children.push(...this.rdList(10));
		}
	}
};
</script>

<style lang="scss">
page {
	height: 100%;
}
.demo-tabs {
	height: 100%;
	overflow: hidden;

	/deep/.cl-tabs__container {
		background-color: #f7f7f7;
	}

	.list {
		padding: 20rpx;

		/deep/.cl-list-item {
			margin-bottom: 20rpx;
			border-radius: 10rpx;
		}
	}
}
</style>
