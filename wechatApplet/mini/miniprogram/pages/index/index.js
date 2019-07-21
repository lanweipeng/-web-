// miniprogram/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    b:false,
    name: 'lwp',
    age: 18,
    arr:[12,5,415],
    citys:['北京','上海','武汉'],
    selectedIndex:0,
    val:''
  },
  fn() {
    this.setData({b:!this.data.b})
  },
  selectedChange(e){
    this.setData({selectedIndex:e.detail.value})
    
  },
  input(e){
    this.setData({val:e.detail.value})
  },
  add(){
    this.setData({ arr: [...this.data.arr, this.data.val],val:'' })
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