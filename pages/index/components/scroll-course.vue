<template>
	<list-box :name="name" :word="word">
		<scroll-view class="scroll-view_H noScorll" scroll-x="true">
			<view class="scroll-view-item_H" v-for="(item,index) in courseDate" :key="item.id">
				<course-item :isColumn="true" :item="item"></course-item>
			</view>
		</scroll-view>
	</list-box>
</template>

<script>
	import listBox from '@/pages/index/components/list-box.vue'
	import courseItem from '@/pages/index/components/course-item.vue'
	import courseDate from '@/mock/courseData.js'
	export default {
		name: "scroll-course",
		props: {
			name: {
				type: String,
				default: ""
			},
			word: {
				type: String,
				default: null
			},
			courseDate: {
				type: Array,
				default: () => courseDate
			}
		},
		components: {
			listBox,
			courseItem
		}
	}
</script>

<style lang="scss" scoped>
	// .list-scroll {
	// 	white-space: normal;
	// 	height: 380rpx;

	// 	.list-scroll-view {
	// 		display: inline-block;
	// 		width: 310rpx;
	// 		background-color: #fff;
	// 		padding: 0 10rpx;
	// 		margin-right: 10rpx;
	// 		border-raduis: 20rpx;
	// 		box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
	// 	}
	// }
	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}
	.scroll-view-item_H {
		display: inline-block;
	}
</style>