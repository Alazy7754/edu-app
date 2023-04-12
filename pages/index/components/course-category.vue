<template>
	<view class="category-box">
		<view v-for="(item,index) in courseList.slice(0,7)" :key="item.id">
			{{item.name }}
		</view>
		<view>全部</view>
	</view>
</template>

<script>
	export default {
		name: "course-category",
		props: {
			courseList: {
				type: Array,
				default: () => [{
						id: '1',
						name: 'java'
					},
					{
						id: '2',
						name: 'html'
					},
					{
						id: '3',
						name: 'javaScript'
					},
					{
						id: '4',
						name: 'UI'
					},
					{
						id: '5',
						name: '运维'
					},
					{
						id: '6',
						name: 'python'
					},
					{
						id: '8',
						name: "人工智能"
					},
					{
						id: '9',
						name: "大数据"
					},
					{
						id: '10',
						name: "前端"
					},
					{
						id: '11',
						name: "后端"
					}
				]
			}
		}
	}
</script>

<style lang="scss">
	.category-box {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		padding: 20rpx 30rpx 0 30rpx;
		justify-content: space-between;
		>view {
			width: 160rpx;
			height: 70rpx;
			line-height: 70rpx;
			border-radius: 20rpx;
			font-size: 26rpx;
			background-color: $i-color-grey;
			margin-top: 15rpx;
			text-align: center;
		}
	}
</style>