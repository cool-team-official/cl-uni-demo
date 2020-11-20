<template>
	<view class="demo-topbar">
		<cl-card label="默认">
			<cl-topbar title="标题"></cl-topbar>
		</cl-card>

		<cl-card label="带描述">
			<cl-topbar title="标题" description="描述"></cl-topbar>
		</cl-card>

		<cl-card label="右侧图标">
			<cl-topbar title="标题">
				<view class="cl-topbar__icon" slot="append">
					<text class="cl-icon-question-fill"></text>
				</view>
			</cl-topbar>
		</cl-card>

		<cl-card label="不需要返回键">
			<cl-topbar title="标题" :show-back="false"></cl-topbar>
		</cl-card>

		<cl-card label="其他颜色">
			<cl-topbar title="标题" color="#fff" background-color="#000"></cl-topbar>
		</cl-card>

		<cl-card label="复杂">
			<cl-topbar title="标题">
				<template slot="prepend">
					<view class="cl-topbar__icon">
						<text class="cl-icon-question"></text>
					</view>
				</template>

				<template slot="append">
					<cl-button size="mini">设置</cl-button>
				</template>
			</cl-topbar>
		</cl-card>
	</view>
</template>
