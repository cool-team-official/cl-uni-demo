<template>
	<view class="demo-filter-bar">
		<!-- 下拉框 -->
		<text class="label">下拉框</text>
		<cl-filter-bar @change="onChange">
			<cl-filter-item
				v-model="arr1"
				label="多选"
				:options="list"
				type="dropdown"
				multiple
				prop="m1"
			></cl-filter-item>

			<cl-filter-item
				v-model="arr2"
				label="多选 Grid 主题"
				:options="list"
				type="dropdown"
				theme="grid"
				multiple
				prop="m2"
			></cl-filter-item>

			<cl-filter-item
				v-model="str1"
				label="单选"
				:options="list"
				type="dropdown"
				prop="s1"
			></cl-filter-item>
		</cl-filter-bar>

		<!-- 排序 -->
		<text class="label">排序</text>
		<cl-filter-bar order-type="single" @change="onChange">
			<cl-filter-item
				v-model="order1"
				label="价格"
				type="order"
				prop="price"
			></cl-filter-item>
			<cl-filter-item
				v-model="order2"
				label="销售额"
				type="order"
				prop="sales"
			></cl-filter-item>
		</cl-filter-bar>

		<!-- 开关 -->
		<text class="label">开关</text>
		<cl-filter-bar>
			<cl-filter-item v-model="swi1" label="是否自营" type="switch"></cl-filter-item>
			<cl-filter-item v-model="swi2" label="7天无理由退货" type="switch"></cl-filter-item>
		</cl-filter-bar>

		<!-- 混合 -->
		<text class="label">混合</text>
		<cl-filter-bar @change="onChange">
			<cl-filter-item
				v-model="str2"
				label="单选"
				:options="list"
				type="dropdown"
				prop="rank"
			></cl-filter-item>

			<cl-filter-item
				prop="price"
				v-model="order3"
				label="价格"
				type="order"
			></cl-filter-item>

			<cl-filter-item
				prop="isRefund"
				v-model="swi3"
				label="7天无理由退货"
				type="switch"
			></cl-filter-item>
		</cl-filter-bar>

		<!-- 自定义 -->
		<text class="label">自定义</text>
		<cl-filter-bar ref="filter-bar">
			<cl-filter-item v-model="str3" label="单选" :options="list" type="dropdown">
				<template #dropdown>
					<cl-row type="flex" align="middle" justify="space-between" :margin="20">
						<cl-text value="亲，提交肤质信息帮你挑选更合适的宝贝哦！"></cl-text>
						<cl-button size="mini" type="text">添加</cl-button>
					</cl-row>
				</template>
			</cl-filter-item>

			<view class="cl-filter-item">
				<cl-button size="mini" type="primary" @tap="toAdvSearch">高级搜索</cl-button>
			</view>
		</cl-filter-bar>

		<!-- 高级搜索 -->
		<cl-popup :visible.sync="adv.visible" direction="right" size="60%">
			<cl-form size="mini" label-position="top">
				<cl-form-item label="姓名">
					<cl-input v-model="adv.form.name" placeholder="请填写姓名"></cl-input>
				</cl-form-item>

				<cl-form-item label="价格">
					<cl-input-number v-model="adv.form.price" :min="1"></cl-input-number>
				</cl-form-item>
			</cl-form>
		</cl-popup>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{
					label: "综合排序",
					value: 1
				},
				{
					label: "距离最近",
					value: 2,
					disabled: true
				},
				{
					label: "好评优先",
					value: 3
				},
				{
					label: "起送价最低",
					value: 4
				},
				{
					label: "配送最快",
					value: 5
				},
				{
					label: "通用排序",
					value: 6
				}
			],
			adv: {
				visible: false,
				form: {
					name: "",
					price: 1
				}
			},
			arr1: [4],
			arr2: [3, 6],
			str1: "",
			str2: 2,
			str3: "",
			order1: "desc",
			order2: "",
			order3: "asc",
			order4: "",
			swi1: false,
			swi2: true,
			swi3: true
		};
	},

	methods: {
		onChange(d) {
			console.log(d);
		},

		toAdvSearch() {
			this.$refs["filter-bar"].close();
			this.adv.visible = true;
		}
	}
};
</script>

<style lang="scss" scoped>
.demo-filter-bar {
	.label {
		display: inline-block;
		font-size: 28rpx;
		margin: 20rpx;
	}
}
</style>
