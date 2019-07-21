// miniprogram/pages/page2/page2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    b: true
  },
  fn() {

    if (this.data.b) {
      wx.showLoading({
        title: '请等待',
      })
    } else {
      wx.hideLoading()
    }
    this.setData({
      b: !this.data.b
    })
  },
  toast() {
    wx.showToast({
      title: 'hhh',
      duration: 1000
    })
  },
  btn3() {
    wx.showActionSheet({
      itemList: ['北京', '上海'],
      itemColor: 'f00',
      success(index) {
        console.log(index)
      }
    })
  },
  share() {
    wx.showShareMenu({
      withShareTicket: true,
      success: function(res) {
        console.log('分享成功')
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  login(){
    wx.getUserInfo({
      success(res){
        console.log(res)
      }
    })
  },
  scan(){
    wx.scanCode({
      success(res) {
        console.log(res)
      }
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})