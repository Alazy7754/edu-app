<template>
	<view class="list-box">
		<!-- 标题区域 -->
		<view class="title row space-between center">
			<view class="center">
				<text class="name">{{name}}</text>
				<text class="word" v-if="word">{{word}}</text>
			</view>
			<view class="all">
				<text>全部</text>
				<text class="iconfont icon-right"></text>
			</view>
		</view>
		<!-- 课程列表区域 -->
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props: {
			name: {
				type: String,
				default: ""
			},
			word: {
				type: String,
				default: null
			}
		}
	}
</script>

<style lang="scss">
	.list-box {
		margin-top: 60rpx;

		.title {
			margin-bottom: 10rpx;


			.name {
				font-size: 38rpx;
				font-weight: bold;
				margin-right: 10rpx;
			}

			.word {
				background-image: linear-gradient(to right, $i-color-orange, $i-text-color-red);
				color: #fff;
				font-size: 17rpx;
				border-radius: 20rpx 20rpx 20rpx 0;
			}

			.all {
				font-size: 28rpx;
				font-weight: normal;
				color: $i-text-color-grey;

				.iconfont {
					font-size: 25rpx;
				}
			}
		}
	}
</style>