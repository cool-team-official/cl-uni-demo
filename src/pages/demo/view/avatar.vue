<template>
	<view class="demo-avatar">
		<cl-card label="头像形状">
			<cl-row>
				<cl-col :span="6">
					<view @tap="onTap">
						<cl-avatar></cl-avatar>
					</view>
				</cl-col>

				<cl-col :span="6">
					<cl-avatar shape="square"></cl-avatar>
				</cl-col>
			</cl-row>
		</cl-card>

		<cl-card label="头像大小">
			<cl-row>
				<cl-col :span="6">
					<cl-avatar :size="70"></cl-avatar>
				</cl-col>
				<cl-col :span="6">
					<cl-avatar :size="80"></cl-avatar>
				</cl-col>
				<cl-col :span="6">
					<cl-avatar :size="90"></cl-avatar>
				</cl-col>
				<cl-col :span="6">
					<cl-avatar :size="100"></cl-avatar>
				</cl-col>
			</cl-row>
		</cl-card>

		<cl-card label="异常">
			<cl-avatar src="https://">
				<template #error>
					神仙
				</template>
			</cl-avatar>
		</cl-card>

		<cl-card label="文字头像">
			<cl-avatar :size="70">cool</cl-avatar>
		</cl-card>

		<cl-card label="头像组">
			<cl-avatar-group :urls="avatarGroup"></cl-avatar-group>
		</cl-card>
	</view>
</template>

<script>
export default {
	data() {
		return {
			avatarGroup: new Array(6).fill(1).map((e, i) => {
				return `https://cool-comm.oss-cn-shenzhen.aliyuncs.com/show/imgs/chat/avatar/${i +
					1}.jpg`;
			})
		};
	},

	methods: {
		onTap() {
			console.log(1111);
		}
	}
};
</script>

<style lang="scss" scoped>
.demo-avatar {
}
</style>
