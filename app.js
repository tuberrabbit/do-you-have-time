//app.js
App({
  onLaunch: function () {
    // todo: login to save openid in localStorage
    wx.setStorageSync('openid', 'openid');
  },
  globalData: {
    userInfo: null
  }
})