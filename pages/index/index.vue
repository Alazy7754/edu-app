<template>
	<view class="content">
		<!-- 小程序端搜索框 -->
		<!-- #ifdef MP-MP-WEIXIN -->
		<searchInput></searchInput>
		<!-- #endif -->
		<!-- 轮播图 -->
		<Banner></Banner>
		<!-- 分类 -->
		<Coursecategory></Coursecategory>
		<!-- 热门推荐 -->
		<view class="list-container">
			<swiper-course name="热门推荐" word="HOT"></swiper-course>
			<!-- 近期上新 -->
			<scroll-course name="近期上新" word="NEW"></scroll-course>
			<!-- 免费精品 -->
			<swiper-course column="1" name="免费精品" word="Free"></swiper-course>
		</view>
	</view>
</template>

<script>
	// 引入搜索框模型
	import searchInput from "@/components/common/search-input.vue"
	// 引入banner轮播图
	import Banner from '@/components/common/i-banner.vue'
	//引入分类模块
	import Coursecategory from '@/pages/index/components/course-category.vue'
	//热门推荐
	import swiperCourse from '@/pages/index/components/swiper-course.vue'
	// 引入近期上新组件
	import scrollCourse from '@/pages/index/components/scroll-course.vue'
	
	// 模块化搜索方法引入使用
	import searchModel from '@/model/searchModel.js'

	export default {
		name: "index",
		data() {
			return {}
		},
		onLoad() {
			// 这方法只在app端有效
			// #ifdef APP-PLUS
			searchModel.handelUpdatePlaceholderText(this)
			// #endif
		},
		methods: {},
		components: {
			searchInput,
			Banner,
			Coursecategory,
			swiperCourse,
			scrollCourse
		}
	}
</script>

<style lang="scss">
	.content {
		width: 100%;

		.list-container {
			padding: 0 30rpx;
		}
	}
</style>