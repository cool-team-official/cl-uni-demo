<template>
	<view class="demo-loading">
		<cl-card label="主题图标">
			<cl-row>
				<cl-col :span="6">
					<cl-loading></cl-loading>
				</cl-col>

				<cl-col :span="6">
					<cl-loading theme="spin"></cl-loading>
				</cl-col>
			</cl-row>
		</cl-card>

		<cl-card label="区域加载">
			<cl-loading-mask :loading="true" text="拼命加载中">
				<cl-form>
					<cl-form-item label="姓名">
						<cl-input placeholder="请填写名称"></cl-input>
					</cl-form-item>

					<cl-form-item label="手机号">
						<cl-input placeholder="请填写手机号"></cl-input>
					</cl-form-item>
				</cl-form>
			</cl-loading-mask>
		</cl-card>

		<cl-card label="自定义">
			<cl-loading-mask
				:loading="true"
				background="rgba(0, 0, 0, 0.6)"
				color="#fff"
				text="拼命加载中"
			>
				<cl-form>
					<cl-form-item label="姓名">
						<cl-input placeholder="请填写名称"></cl-input>
					</cl-form-item>

					<cl-form-item label="手机号">
						<cl-input placeholder="请填写手机号"></cl-input>
					</cl-form-item>
				</cl-form>
			</cl-loading-mask>
		</cl-card>

		<cl-card label="基本用法">
			<cl-loading-mask
				:loading="loading"
				color="red"
				text="数据配置中"
				fullscreen
			></cl-loading-mask>
			<cl-button @tap="open()" size="small">
				<text>全屏</text>
			</cl-button>
		</cl-card>
	</view>
</template>

<script>
export default {
	data() {
		return {
			loading: false
		};
	},

	methods: {
		open() {
			this.loading = true;

			setTimeout(() => {
				this.loading = false;
			}, 1500);
		}
	}
};
</script>

<style lang="scss">
.demo-loading {
	/deep/.cl-card__container {
		position: relative;
	}
}
</style>
