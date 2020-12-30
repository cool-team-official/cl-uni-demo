<template>
	<view class="demo-waterfall">
		<view class="header">
			<cl-row :gutter="20">
				<cl-col :span="6" v-for="(item, index) in columns" :key="index">
					<cl-button
						size="small"
						:type="item == column ? 'primary' : ''"
						fill
						@tap="setColumn(item)"
						>{{ item }}列</cl-button
					>
				</cl-col>
			</cl-row>
		</view>

		<view class="container">
			<cl-waterfall ref="waterfall" :column="column" v-model="list">
				<cl-waterfall-column v-for="(children, index) in list" :key="index">
					<view
						v-for="(item, index2) in children"
						:key="index2"
						:class="['h', `h-${item.index || 1}`]"
					>
						<text>{{ item.id }}</text>
					</view>
				</cl-waterfall-column>
			</cl-waterfall>
		</view>

		<cl-loadmore background-color="#fff" :loading="loading" :finish="finish"></cl-loadmore>
	</view>
</template>

<script>
let id = 0;

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
		id = 0;
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
					url: "",
					id: id++
				};

				return d;
			});
		},

		setColumn(index) {
			id = 0;
			this.column = index;

			this.$nextTick(() => {
				this.$refs["waterfall"].refresh(this.rdList());
			});
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
		padding: 20rpx;
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
