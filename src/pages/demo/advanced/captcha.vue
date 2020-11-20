<template>
	<view class="demo-captcha">
		<cl-card label="默认">
			<cl-captcha v-model="val" @done="done"></cl-captcha>
		</cl-card>

		<cl-card label="设置高度">
			<cl-captcha v-model="val1" :height="150" @done="done"></cl-captcha>
		</cl-card>

		<cl-card label="设置位数">
			<cl-captcha v-model="val2" :length="6" :gutter="10" @done="done"></cl-captcha>
		</cl-card>

		<cl-toast ref="toast"></cl-toast>
	</view>
</template>

<script>
export default {
	data() {
		return {
			val: "",
			val1: "1",
			val2: "123"
		};
	},

	methods: {
		done(v) {
			this.$refs["toast"].open(v);
		}
	}
};
</script>

<style lang="scss">
.demo-captcha {
}
</style>
