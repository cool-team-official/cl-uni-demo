<template>
	<cl-popup border-radius="20rpx 20rpx 0 0" :visible.sync="visible" direction="bottom">
		<view class="cl-calendar">
			<view class="cl-calendar__header">
				<text class="cl-calendar__title">选择日期</text>
				<text class="cl-calendar__close cl-icon-close"></text>
			</view>

			<view class="cl-calendar__container">
				<view class="cl-calendar__selector">
					<!-- 左箭头 -->
					<view class="cl-calendar__selector-icon is-prev" @tap="prevMonth">
						<cl-icon :size="40" name="arrow-left"></cl-icon>
					</view>

					<!-- 当前日期 -->
					<text class="cl-calendar__selector-date">{{ date | format_date }}</text>

					<!-- 右箭头 -->
					<view class="cl-calendar__selector-icon is-next" @tap="nextMonth">
						<cl-icon :size="40" name="arrow-right"></cl-icon>
					</view>
				</view>

				<!-- 数据面板 -->
				<view class="cl-calendar__table">
					<view class="cl-calendar__tr">
						<view class="cl-calendar__td">一</view>
						<view class="cl-calendar__td">二</view>
						<view class="cl-calendar__td">三</view>
						<view class="cl-calendar__td">四</view>
						<view class="cl-calendar__td">五</view>
						<view class="cl-calendar__td">六</view>
						<view class="cl-calendar__td">日</view>
					</view>

					<!-- 行 -->
					<view
						class="cl-calendar__tr"
						v-for="(tr, trIndex) in table"
						:key="`tr-${trIndex}`"
					>
						<!-- 列 -->
						<view
							class="cl-calendar__td"
							v-for="(td, tdIndex) in tr"
							:key="`td-${tdIndex}`"
							:class="{
								'is-disabled': td.disabled,
								'is-start': selects.start ? selects.start.index == td.index : false,
								'is-end': selects.end ? selects.end.index == td.index : false,
								'is-through':
									(selects.start ? td.index >= selects.start.index : false) &&
									(selects.end ? td.index <= selects.end.index : false)
							}"
							@tap="selectDate(td)"
						>
							<view class="cl-calendar__value">
								{{ td.value }}
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class="cl-calendar__footer">
				<cl-button fill round type="primary">确定</cl-button>
			</view>
		</view>
	</cl-popup>
</template>

<script>
import dayjs from "@/utils/dayjs";

export default {
	data() {
		return {
			visible: true,
			table: [],
			date: dayjs(this.date)
				.subtract(1, "month")
				.format("YYYY-MM"),
			selects: {
				start: null,
				end: null
			}
		};
	},

	created() {
		this.setTable();
	},

	filters: {
		format_date(val, fmt) {
			return val ? dayjs(val).format(fmt || "YYYY年MM月") : "";
		}
	},

	methods: {
		open() {
			this.visible = true;
			this.setTable();
		},

		prevMonth() {
			this.date = dayjs(this.date)
				.subtract(1, "month")
				.format("YYYY-MM");
			this.setTable();
		},

		nextMonth() {
			this.date = dayjs(this.date)
				.add(1, "month")
				.format("YYYY-MM");
			this.setTable();
		},

		setTable() {
			// 月初是周几
			let start = dayjs(this.date).day();

			// 本月天数
			let days = dayjs(this.date)
				.endOf("month")
				.format("D");

			// 上个月天数
			let prevDays = dayjs(this.date)
				.endOf("month")
				.subtract(1, "month")
				.format("D");

			// 序号
			let index = 0;
			// 日期数据
			let arr = [];
			// 清空表格
			this.table = [];

			// 添加上月数据
			arr.push(
				...new Array(start).fill(1).map((e, i) => {
					return {
						index: index++,
						value: prevDays - start + i + 1,
						disabled: true
					};
				})
			);

			// 添加本月数据
			arr.push(
				...new Array(days - 0).fill(1).map((e, i) => {
					return {
						index: index++,
						value: i + 1
					};
				})
			);

			// 添加下个月
			arr.push(
				...new Array(42 - days - start).fill(1).map((e, i) => {
					return {
						index: index++,
						value: i + 1,
						disabled: true
					};
				})
			);

			// 分割数组
			for (let i = 0; i < arr.length; i += 7) {
				this.table.push(arr.slice(i, i + 7));
			}
		},

		selectDate(item) {
			// 选择当前日期
			if (this.selects.start && this.selects.end) {
				this.selects.start = item;
				this.selects.end = null;
			} else {
				if (!this.selects.start) {
					this.selects.start = item;
				} else if (!this.selects.end) {
					this.selects.end = item;
				}
			}

			// 调整开始和结束的位置
			if (this.selects.start && this.selects.end) {
				if (this.selects.start.index > this.selects.end.index) {
					let d = this.selects.start;
					this.selects.start = this.selects.end;
					this.selects.end = d;
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.cl-calendar {
	&__header {
		position: relative;
		padding-bottom: 20rpx;
		text-align: center;
	}

	&__title {
		font-size: 28rpx;
	}

	&__close {
		position: absolute;
		right: 0;
		top: 0;
		font-size: 36rpx;
	}

	&__container {
		margin-bottom: 20rpx;
	}

	&__selector {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 80rpx;

		&-icon {
			position: relative;
			top: 1rpx;
		}

		&-date {
			font-size: 30rpx;
			margin: 0 30rpx;
		}
	}

	&__table {
		display: flex;
		flex-direction: column;
	}

	&__tr {
		display: flex;
	}

	&__td {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex: 1;
		padding: 16rpx 0;
		margin: 10rpx 0;

		&.is-disabled {
			color: #999;
			background-color: rgba(249, 249, 249, 0.3);
		}

		&.is-through {
			background-color: #f2f6fc;

			&.is-start {
				border-radius: 50rpx 0 0 50rpx;
			}

			&.is-end {
				border-radius: 0 50rpx 50rpx 0;
			}
		}

		&.is-start,
		&.is-end {
			.cl-calendar__value {
				background-color: $cl-color-primary;
				color: #fff;
			}
		}
	}

	&__value {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 60rpx;
		width: 60rpx;
		border-radius: 60rpx;
	}
}
</style>
