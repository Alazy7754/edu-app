<template>
	<view class="banner-box">
		<view class="banner-bg"
			:style="{'background-image': `linear-gradient(${backgroundBg||'#345dc2' } 50%, #F8F9FB)`}">
		</view>
			<swiper
			class="banner-swiper"
			@change="handelChageCurrnet" 
			circular :indicator-dots="true"
			indicator-color="rgba(255,255,255,0.3)"
			indicator-active-color="#fff"
			:autoplay="true" :interval="3000"
			:duration="1000">
				<swiper-item class="swiper-item" v-for="(item,index) in bannerList" :key="item.id">
					<image :src="item.imageUrl" mode="widthFix"></image>
				</swiper-item>
			</swiper>
		</view>
</template>

<script>
	export default {
		name: "i-banner",
		props: {
			bannerList: {
				type: Array,
				default: () => [{
						id: 1,
						imageUrl: "/static/images/banner1.jpg",
						background: "#45328c",
						advertUrl: '/pages/course/course-details'
					},
					{
						id: 2,
						imageUrl: "/static/images/banner2.jpg",
						background: "#006C00",
						advertUrl: '/pages/course/course-details'
					},
					{
						id: 3,
						imageUrl: "/static/images/banner3.jpg",
						background: "#0072B7",
						advertUrl: '/pages/course/course-details'
					}
				]
			}
		},
		data() {
			return {
				current: 0,
				backgroundBg: ''
			}
		},
		methods: {
			handelChageCurrnet(e) {
				this.current = e.detail.current
				this.backgroundBg = this.bannerList[this.current].background
			}
		}
	}
</script>

<style lang="scss">
	.banner-box {
		position: relative;
		padding-top: 100rpx;
		/* #ifdef APP-PLUS*/
		padding-top: calc(var(--status-bar-height) + 120rpx);
		/* #endif */
		.banner-bg {
			position: absolute;
			top: 0;	
			width: 100%;
			height: 430rpx;
			transition: .5s;
			/* #ifdef APP-PLUS*/
			height: calc(var(--status-bar-height)+470rpx);
			/* #endif */
		}
		.banner-swiper {
			height: 330rpx;
			width: 100%;
			.swiper-item{
				padding: 0 30rpx;
				width: 100%;
				height: 100%;
				overflow: hidden;
				image {
					width: 100%;
					height: 100%;
					border-radius: 15rpx;
				}
			}
		}
	}
</style>