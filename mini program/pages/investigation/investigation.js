var app = getApp()
Page({
  data: {
    navbar: ['宣传内容', '成果展示'],
    currentTab: 0
  },
  navbarTap: function(e){
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  }
})