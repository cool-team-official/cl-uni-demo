<template>
	<view class="demo-swiper">
		<cl-card label="默认">
			<cl-swiper :list="list"> </cl-swiper>
		</cl-card>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [
				"/static/images/banner1.png",
				"/static/images/banner2.png",
				"/static/images/banner3.png"
			]
		};
	}
};
</script>
