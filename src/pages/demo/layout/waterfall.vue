<template>
	<view class="demo-waterfall">
		<view class="header">
			<cl-button
				size="small"
				v-for="(item, index) in columns"
				:key="index"
				@tap="setColumn(item)"
				>{{ item }}列</cl-button
			>
		</view>

		<view class="container">
			<cl-waterfall ref="waterfall" :column="column">
				<template v-slot="{ item, index }">
					<view :class="['h', `h-${item.index}`]">
						<text>{{ index }} - {{ item.index }} </text>
					</view>
				</template>
			</cl-waterfall>
		</view>

		<cl-loadmore background-color="#fff" :loading="loading" :finish="finish"></cl-loadmore>
	</view>
</template>

<script>
export default {
	data() {
		return {
			columns: [2, 3, 4, 5],
			list: [],
			loading: false,
			finish: false,
			page: 1,
			column: 2
		};
	},

	mounted() {
		this.$refs["waterfall"].refresh(this.rdList());
	},

	onReachBottom() {
		this.append();
	},

	methods: {
		append() {
			this.loading = true;

			if (this.page > 3) {
				this.finish = true;
			} else {
				this.page += 1;

				setTimeout(() => {
					this.$refs["waterfall"].append(this.rdList());
					this.loading = false;
				}, 1000);
			}
		},

		rdList() {
			return new Array(5 * this.column).fill(1).map((e, i) => {
				let d = {
					index: parseInt(Math.random() * 7) + 3,
					url: ""
				};

				return d;
			});
		},

		setColumn(index) {
			this.column = index;
			this.$refs["waterfall"].refresh(this.rdList());
		}
	}
};
</script>

<style lang="scss">
page {
	background-color: #fff;
}
</style>

<style lang="scss" scoped>
.demo-waterfall {
	.header {
		padding: 0 20rpx;
		margin-bottom: 20rpx;
	}

	.container {
		padding: 0 10rpx;
	}

	.h {
		width: 100%;
		background-color: #e5e9f2;
		border-radius: 10rpx;
		padding: 10rpx;
		box-sizing: border-box;
		word-break: break-all;
		margin-bottom: 20rpx;

		image {
			display: block;
			width: 100%;
		}
	}

	@for $i from 0 through 10 {
		.h-#{$i} {
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 28rpx;
			padding: 20rpx;
			box-sizing: border-box;
			height: 60rpx * $i;
			width: 100%;
			background-color: #e5e9f2;
			border-radius: 6rpx;
		}
	}
}
</style>
