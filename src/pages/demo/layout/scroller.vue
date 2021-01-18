<template>
	<view class="demo-scroller">
		<cl-scroller ref="scroller" @up="onUp" @down="onDown">
			<view class="item" v-for="(item, index) in list" :key="index">
				<cl-list-item :label="`${index + 1}`"></cl-list-item>
			</view>

			<cl-loadmore v-if="list.length > 0" :loading="loading"></cl-loadmore>
		</cl-scroller>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [],
			loading: false
		};
	},

	created() {
		this.list = new Array(20).fill(1);
	},

	methods: {
		onUp() {
			this.loading = true;

			setTimeout(() => {
				this.list.push(...new Array(20).fill(1));
				this.loading = false;
			}, 1000);
		},

		onDown() {
			setTimeout(() => {
				this.list = new Array(20).fill(1);
				this.$refs["scroller"].end();
			}, 1000);
		}
	}
};
</script>

<style lang="scss">
page {
	height: 100%;
	overflow: hidden;
}

.demo-scroller {
	height: 100%;
	overflow: hidden;
	padding-bottom: env(safe-area-inset-bottom);
	box-sizing: border-box;

	.item {
		margin: 20rpx;
	}
}
</style>
