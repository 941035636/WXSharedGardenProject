const app = getApp()
Component({
  properties: {
    navbarData: {
      //navbarData 由父页面传递的数据，变量名字自命名
      type: Object,
      value: {},
      observer: function (newVal, oldVal) { }
    }
  },
  data: {
    height: '',
    textHeader: '',
    //默认值 默认显示左上角
    navbarData: {
      showCapsule: 1,
      weight: true, // true 加粗 
    },
    // imageWidth: '', // 背景图片的宽度
    //  imageWidth: 100% , // 背景图片的宽度
    imageWidth: wx.getSystemInfoSync().windowWidth, // 背景图片的高度
    imageHeight: '' // 背景图片的长度，通过计算获取
  },
  attached: function () {
    // 获取是否是通过分享进入的小程序
    this.setData({
      share: app.globalData.share
    })
    // 定义导航栏的高度 方便对齐

    wx.getSystemInfo({
      success: res => {
        this.setData({
          height: this.rpxTopx(res.statusBarHeight * 2 + 20),
          textHeader: this.rpxTopx(res.statusBarHeight * 2 + 44)
        })
      }
    })


  },
  methods: {
    // px单位处理为rpx单位
    rpxTopx(px) {
      let deviceWidth = wx.getSystemInfoSync().windowWidth; //获取设备屏幕宽度
      let rpx = (750 / deviceWidth) * Number(px);
      return Math.floor(rpx);
    },
    // 返回上一页面
    _navback() {
      var pages = getCurrentPages() // 获取栈实例
			let AtRoute = pages[pages.length - 1] ? pages[pages.length - 1].route : "" // 获取当前页面路由
			let PreviousPage = pages[pages.length - 2] ? pages[pages.length - 2].route : "" //当前页面路径(带参数)
			console.log("AtRoute PreviousPage", AtRoute, PreviousPage)


			if (AtRoute == "index/pages/dataParticulars/dataParticulars" && (PreviousPage == "pages/begin/begin" ||
				PreviousPage == "pages/logIn/logIn")) {
				wx.switchTab({
					url: '/pages/main/main'
				});
			} else if (AtRoute == "index/pages/dataParticulars/dataParticulars" && PreviousPage ==
				"pages/message/message") {
				wx.navigateBack({
					delta: 1 // 返回上一级页面。
				})
			} else if (AtRoute == "index/pages/dataParticulars/dataParticulars" && PreviousPage ==
				"") {
				wx.navigateTo({
					url: '/pages/begin/begin'
				});
			} else {
				wx.switchTab({
					url: '/pages/main/main'
				});
			}
    },
    // 计算图片高度
    imgLoaded(e) {
      this.setData({
        imageHeight: e.detail.height *
          (wx.getSystemInfoSync().windowWidth / e.detail.width),
      })
    }
    //返回到首页
    // _backhome() {
    // wx.switchTab({
    //  url: '/pages/index/index'
    // })
    // }
  }
})