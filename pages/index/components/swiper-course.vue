<template>
	<list-box :name="name" :word="word">
		<swiper class="list-swiper" :style="{height:`${row*200}rpx`}" :interval="3000" :duration="1000">
			<swiper-item v-for="(n,i) in column">
				<view class="swiper-item">
					<course-item v-for="(item,index) in coursDate.slice(row*i,(i+1)*row)" :item="item" :key="index">
					</course-item>
				</view>
			</swiper-item>
		</swiper>
	</list-box>
</template>

<script>
	import listBox from '@/pages/index/components/list-box.vue'
	import courseItem from '@/pages/index/components/course-item.vue'
	import courseDate from '@/mock/courseData.js'
	export default {
		props: {
			name: {
				type: String,
				default: ""
			},
			word: {
				type: String,
				default: ""
			},
			column: {
				type: [Number,String],
				default: 2
			},
			row: {
				type: Number,
				default: 5
			},
			coursDate: {
				type: Array,
				default: () => courseDate
			}
		},
		data() {
			return {
			}
		},
		components: {
			listBox,
			courseItem
		}
	}
</script>

<style>
</style>