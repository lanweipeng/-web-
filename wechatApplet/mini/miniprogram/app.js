//app.js
App({
  //生命周期(当小程序启动的时候)
  onLaunch: function () {
    wx.cloud.init({
      
      traceUser:true
    })
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // 此处请填入环境 ID, 环境 ID 可打开云控制台查看
        env: 'my-env-id',
        traceUser: true,
      })
    }

    this.globalData = {}
  },
  //从后台回到前台
  onShow(){},
  //缩成球
  onHide(){},
  onPageNotFound(){},
  //报错
  onError(){},
  //整个程序之内共享的
  a:12,
  user(){
    
  }
})
