<template>
	<view class="demo-swiper">
		<cl-card label="默认">
			<cl-swiper :list="list"> </cl-swiper>
		</cl-card>

		<cl-card label="卡片式">
			<cl-swiper type="card" :list="list"></cl-swiper>
		</cl-card>

		<cl-card label="链式">
			<cl-swiper type="chain" :list="list"></cl-swiper>
		</cl-card>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [
				"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604908445940&di=3e1e85184727d15d6d8518b229f50de6&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201804%2F28%2F20180428184808_bimcr.jpg",
				"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604908455986&di=b01bc4b5b1a37cef449a8b6ce2b12a0a&imgtype=0&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fa3fa8ad4f17122d85b3605761924bd35.jpeg",
				"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604908445936&di=4bb7b9ecec875fb1413c7eaf4237c5a1&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Ff%2F57f8508cd49cc.jpg"
			]
		};
	}
};
</script>
