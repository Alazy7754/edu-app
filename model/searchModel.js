class searchModel {
	// 动态切换app端搜索框提示文本信息
	static handelUpdatePlaceholderText(_this) {
		//定义切换信息
		const arr = ['APP·小程序', 'Java·SprinBoot', 'JavaScript·HTML', '乐途·黄金叶']
		let i = 0
		// 调用设置的方法
		searchModel.handelSetPlaceholderText(_this, arr[i])
		// 动态切换搜索文本框的内容
		setInterval(() => {
			i = i < 3 ? ++i : 0
			searchModel.handelSetPlaceholderText(_this, arr[i])
		}, 3000)
	}
	static handelSetPlaceholderText(_this, data) {
		// 获取页面实例
		const webView = _this.$scope.$getAppWebview()
		webView.setStyle({
			"titleNView": {
				"searchInput": {
					"placeholder": data
				}
			}
		})
	}
}
export default searchModel