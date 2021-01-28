<template>
	<view class="demo-tabs">
		<cl-card label="选项栏">
			<cl-tabs ref="tabs" v-model="current" :labels="labels"> </cl-tabs>
		</cl-card>

		<cl-card label="带内容">
			<view class="box">
				<cl-tabs v-model="current" :labels="labels" :border="false">
					<!-- 自定义内容区域 -->
					<swiper class="container" @change="onChangeSwiper" :current="current">
						<swiper-item v-for="(item, index) in list" :key="index">
							<!-- 是否预加载 -->
							<template v-if="item.loaded || index == current">
								<cl-scroller :ref="`scroller-${index}`" @down="onDown" @up="onUp">
									<!-- 首次加载框，可有可无 -->
									<cl-loading-mask :loading="loading" text="加载中">
										<!-- 列表 -->
										<view class="list">
											<cl-list-item
												v-for="(item2, index2) in item.data"
												:key="index2"
												:label="`${item.label} - ${index2}`"
											>
												<cl-icon name="cl-icon-arrow-right"></cl-icon>
											</cl-list-item>

											<!-- 加载更多 -->
											<cl-loadmore
												v-if="item.data.length > 0"
												:loading="item.loading"
												:finish="item.finished"
												:divider="false"
											></cl-loadmore>
										</view>
									</cl-loading-mask>
								</cl-scroller>
							</template>
						</swiper-item>
					</swiper>
				</cl-tabs>
			</view>
		</cl-card>
	</view>
</template>

<script>
export default {
	data() {
		const labels = [
			{
				label: "热门",
				value: 1,
				loaded: true
			},
			{
				label: "猜你喜欢",
				value: 2
			},
			{
				label: "女装",
				value: 3
			},
			{
				label: "美妆个护",
				value: 4
			},
			{
				label: "食品",
				value: 5
			},
			{
				label: "母婴",
				value: 6
			},
			{
				label: "数码家电",
				value: 7
			},
			{
				label: "家居家装",
				value: 8
			},
			{
				label: "内衣",
				value: 9
			}
		];

		const list = labels.map(e => {
			return {
				...e,
				status: e.value,
				data: [],
				finished: false,
				loading: false,
				pagination: {
					page: 1,
					size: 20
				}
			};
		});

		return {
			current: 0,
			labels,
			list,
			loading: true
		};
	},

	mounted() {
		this.refresh();
	},

	methods: {
		onDown() {
			this.refresh({
				page: 1
			}).done(() => {
				this.$refs[`scroller-${this.current}`][0].end();
			});
		},

		onUp() {
			const { pagination, finished } = this.list[this.current];

			if (!finished) {
				this.refresh({
					page: pagination.page + 1
				});
			}
		},

		onChangeSwiper(e) {
			this.current = e.detail.current;

			if (!this.list[this.current].loaded) {
				this.loading = true;
				this.list[this.current].loaded = true;
			}

			setTimeout(() => {
				this.refresh({
					page: 1
				});
			}, 500);
		},

		refresh(params = {}) {
			const item = this.list[this.current];

			let data = {
				...item.pagination,
				status: item.status,
				sort: "desc",
				order: "createTime",
				...params
			};

			return new Promise(resolve => {
				item.loading = true;

				console.log("Refresh");

				setTimeout(() => {
					item.data = new Array(data.page == 1 ? 10 : data.page * 10).fill(1);
					item.pagination.page = data.page;
					item.finished = false;
					item.loading = false;
					this.loading = false;
					resolve();
				}, 500);
			});
		}
	}
};
</script>

<style lang="scss">
page {
	// #ifdef H5
	height: 100%;
	// #endif

	// #ifndef H5
	height: 100vh;
	// #endif
}

.demo-tabs {
	height: 100%;
	overflow: hidden;

	.box {
		height: 800rpx;

		.container {
			height: 100%;
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
}
</style>
