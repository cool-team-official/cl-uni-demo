<template>
	<view class="demo-upload">
		<cl-toast ref="toast"></cl-toast>

		<cl-card label="单图上传">
			<cl-upload v-model="form.url1" :action="action"></cl-upload>
		</cl-card>

		<cl-card label="多图上传">
			<cl-upload v-model="form.url2" multiple :action="action"></cl-upload>
		</cl-card>

		<cl-card label="上传校验（图片大小不能大于50K）">
			<cl-upload
				v-model="form.url3"
				:before-upload="onBeforeUpload"
				:action="action"
			></cl-upload>
		</cl-card>

		<cl-card label="禁用状态">
			<cl-upload v-model="form.url4" disabled></cl-upload>
		</cl-card>
	</view>
</template>

<script>
export default {
	data() {
		return {
			form: {
				url: "",
				url2: ["https://cool-comm.oss-cn-shenzhen.aliyuncs.com/show/imgs/avatar.jpeg"],
				url3: "",
				url4: ""
			},
			action: "/pro/admin/comm/upload"
		};
	},

	methods: {
		onBeforeUpload(file, index) {
			if (file.size > 51200) {
				this.$refs["toast"].open("图片大小不能大于50K");
				return false;
			}
		}
	}
};
</script>
