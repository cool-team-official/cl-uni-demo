<template>
	<view class="demo-countdown">
		<cl-card label="10分钟倒计时">
			<cl-countdown :minute="10"></cl-countdown>
		</cl-card>

		<cl-card label="距离圣诞节还有">
			<cl-countdown datetime="2020-12-25"></cl-countdown>
		</cl-card>

		<cl-card label="中文">
			<cl-countdown :minute="10" splitor="cn"></cl-countdown>
		</cl-card>

		<cl-card label="英文">
			<cl-countdown :minute="5" splitor="en"></cl-countdown>
		</cl-card>

		<cl-card label="自定义">
			<cl-countdown :minute="10" :splitor="['Tian', 'Shi', 'Fen', 'Miao']"></cl-countdown>
		</cl-card>

		<cl-card label="精简模式">
			<cl-countdown :hour="1" :minute="0" :second="5" mode="simple"></cl-countdown>
		</cl-card>

		<cl-card label="添加毫秒">
			<cl-countdown :hour="1" :splitor="[':', ':', ':', ':']" is-millisecond></cl-countdown>
		</cl-card>

		<cl-card label="只显示分秒">
			<cl-countdown
				datetime="2020-12-31"
				:layout="['minute', 'second']"
				:splitor="['分', '秒']"
			></cl-countdown>
		</cl-card>

		<cl-card label="分秒倒序">
			<cl-countdown
				datetime="2020-12-31"
				:layout="['second', 'minute']"
				:splitor="['秒', '分']"
			></cl-countdown>
		</cl-card>

		<cl-card label="监听">
			<cl-countdown
				:second="countdown"
				:layout="['second']"
				:splitor="['s']"
				ref="cd"
				@change="onChange"
				@done="onDone"
			></cl-countdown>

			<cl-progress
				:value="progress"
				:color="['#F56C6C', '#E6A23C', '#67C23A']"
				:show-text="false"
			></cl-progress>
		</cl-card>

		<cl-card label="操作">
			<cl-countdown :hour="2" ref="op"></cl-countdown>

			<cl-row :margin="[20, 0, 0, 0]">
				<cl-button size="mini" type="success" round @tap="start">开始</cl-button>
				<cl-button size="mini" type="error" round @tap="stop">暂停</cl-button>
			</cl-row>
		</cl-card>

		<cl-card label="自定义样式">
			<cl-countdown
				:hour="2"
				:number-style="{
					'background-color': '#000',
					color: '#fff',
					margin: '0 10rpx',
					'border-radius': '10rpx'
				}"
			></cl-countdown>
		</cl-card>

		<cl-toast ref="toast"></cl-toast>
	</view>
</template>

<script>
export default {
	data() {
		return {
			progress: 100,
			countdown: 5
		};
	},

	methods: {
		onChange([s]) {
			this.progress = parseInt((s * 100) / 10);
		},

		onDone() {
			this.$refs["toast"].open("Game Over");
			this.$refs["cd"].start({ second: 10 });
		},

		start() {
			this.$refs.op.next();
		},

		stop() {
			this.$refs.op.stop();
		}
	}
};
</script>

<style lang="scss">
.demo-countdown {
	.font-24 {
		font-size: 24rpx;
		margin-bottom: 10rpx;
	}

	.cs-countdown {
		/deep/.cl-countdown__number {
			height: 100rpx;
			line-height: 100rpx;
			min-width: 80rpx;
			font-size: 50rpx;
			font-weight: bold;
			background-color: #fff;
			border: 1rpx solid #eee;
			border-radius: 10rpx;
			color: $uni-color-primary;
		}
	}
}
</style>
