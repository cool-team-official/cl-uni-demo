a<template>
	<view class="demo-tabbar">
		<cl-text :size="50" :value="active" :margin="[20, 0, 0, 20]"></cl-text>

		<view class="footer">
			<cl-tabbar ref="tabbar" v-model="active" border-style="#eee">
				<cl-tabbar-item
					text="首页"
					name="home"
					icon-path="/static/icon/tabbar/home.png"
					selected-icon-path="/static/icon/tabbar/home-hl.png"
				></cl-tabbar-item>

				<cl-tabbar-item
					text="活动"
					name="activity"
					icon-path="/static/icon/tabbar/activity.png"
					selected-icon-path="/static/icon/tabbar/activity-hl.png"
				></cl-tabbar-item>

				<cl-tabbar-item name="add">
					<view class="add">
						<image src="/static/icon/tabbar/add.png" />
					</view>
				</cl-tabbar-item>

				<cl-tabbar-item
					text="购物车"
					name="cart"
					:badge="8"
					icon-path="/static/icon/tabbar/shopping-cart.png"
					selected-icon-path="/static/icon/tabbar/shopping-cart-hl.png"
				></cl-tabbar-item>

				<cl-tabbar-item
					text="我的"
					name="my"
					icon-path="/static/icon/tabbar/my.png"
					selected-icon-path="/static/icon/tabbar/my-hl.png"
				></cl-tabbar-item>
			</cl-tabbar>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			active: "home"
		};
	}
};
</script>

<style lang="scss" scoped>
.footer {
	position: fixed;
	bottom: 0;
	width: 100%;
	padding-bottom: env(safe-area-inset-bottom);

	.add {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		height: 70rpx;
		width: 70rpx;

		image {
			height: 60rpx;
			width: 60rpx;
		}
	}
}
</style>
