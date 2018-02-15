//index.js
//获取应用实例
import { formatTime } from '../../utils/util.js';
const app = getApp()

Page({
  data: {
    list: [{
      id: 0,
      title: '海底捞约饭',
      date: formatTime(new Date())
    }, {
      id: 1,
      title: '海底捞约饭',
      date: formatTime(new Date())
    }, {
      id: 2,
      title: '海底捞约饭',
      date: formatTime(new Date())
    }, {
      id: 3,
      title: '海底捞约饭',
      date: formatTime(new Date())
    }, {
      id: 4,
      title: '海底捞约饭',
      date: formatTime(new Date())
    }, {
      id: 5,
      title: '海底捞约饭',
      date: formatTime(new Date())
    }],
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad');
  },
  onShow: function () {
    console.log('onShow');
  },
  onReady: function () {
    console.log('onReady');
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
