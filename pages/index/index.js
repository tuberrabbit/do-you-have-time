//index.js
//获取应用实例
import { formatTime } from '../../utils/util.js';
const app = getApp()

Page({
  data: {
  },
  //事件处理函数
  openVote: function (evt) {
    const type = evt.currentTarget.dataset.type;
    const id = evt.currentTarget.dataset.id;
    const openid = wx.getStorageSync('openid');
    if (type === 'days') {
      wx.navigateTo({
        url: `../days/days?id=${id}&openid=${openid}`,
      });
    } else if (type === 'hours') {
      wx.showToast({
        title: '调整去小时区',
      })
    }
  },
  onLoad: function () {
  },
  onShow: function () {
    // request: history list data
    this.setData({
      list: [{
        id: 0,
        type: 'days',
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
    });
  },
  onReady: function () {
  },
})
