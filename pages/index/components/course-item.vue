<template>
	<view class="course-item" :class="{'column' : isColumn}">
		<view class="item-left">
			<image class="course-cover" :src="item.mainImage"></image>
			<view class="course-time">
				{{item.totalTime}}
			</view>
		</view>
		<view class="item-right column">
			<view class="title text-ellipsis">
				{{item.title}}
			</view>
			<view class="info">
				<view class="nikname iconfont icon-laoshi2">
					<text>{{item.nickName}}</text>
				</view>
				<view class="count">
					<view class="money iconfont icon-moneybag">
						<text v-if="item.isFree===0">免费</text>
						<text v-else-if="item.isFree===1">{{item.priceDiscount || item.priceOriginal}}</text>
					</view>
					<view class="iconfont icon-video">
						<text>{{item.studyTotal}}人在学</text>
					</view>
				</view>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: {
				type: Object,
				default: () => {
					return {
						id: 1,
						mainImage: 'http://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLAWb3qFGBhykjmcTvz9CWmwib2Qj7c3Vxjia4y5fgSoNdrMYIdH11Dl1OCraibA7u0mts/600',
						totalTime: '00:59:08',
						title: 'SpringBoot项目实战教程SpringCloud OAuth2 Vue分布式微服务架构',
						nickName: '梦老师1', // 课程老师
						isFree: 0, //是否免费：0收费，1免费
						priceOriginal: 999, // 原价
						priceDiscount: 699.9, // 优惠价
						studyTotal: 899
					}
				}
			},
			isColumn: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {}
		}
	}
</script>

<style lang="scss">
	.course-item {
		display: flex;
		padding: 20rpx 0;
		// flex-direction: column;
		// border-bottom: 1px solid #f60;

		.item-left {
			position: relative;
			height: 160rpx;
			width: 290rpx;
			margin-right: 20rpx;
			overflow: hidden;

			.course-time {
				position: absolute;
				right: 5rpx;
				bottom: 5rpx;
				color: #fff;
				background-color: rgba(51, 51, 51, 0.4);
				border-radius: 20rpx;
				font-size: 22rpx;
				padding: 0 6rpx;
			}

			.course-cover {
				width: 100%;
				height: 100%;
				border-radius: 10rpx;

			}
		}

		.item-right {
			justify-content: space-between;
			height: 160rpx;
			padding-top: 5rpx;
			padding-left: 5rpx;

			.title {
				max-width: 365rpx;
				font-size: 28rpx;
				height: 70rpx;
			}

			.info {
				.nikname {
					color: #999;
					font-size: 23rpx;
				}

				.count {
					display: flex;
					align-items: center;

					.iconfont {
						font-size: 23rpx;
						color: #222222;
					}

					.money {
						font-size: 28rpx;
						color: $i-color-orange;
						padding-right: 30rpx;
						width: 130rpx;

						.is-free {}
					}
				}
			}
		}
	}
</style>