<template>
	<view class="search-box">
		<input class="search-input" type="text" placeholder="请输入想要搜索的内容" disabled>
	</view>
</template>

<script>
	export default {
		name:"search-input"
	}
</script>

<style lang="scss" scoped>
.search-box {
	width: 100%;
	position: absolute;
	left: 0;
	top: 30rpx;
	z-index: 9999;
	.search-input {
		background-color: #f8f8f8;
		border-radius: 30rpx;
		height: 70rpx;
		line-height: 70rpx;
		margin: 0 20rpx;
		text-align: center;
	}
}
</style>