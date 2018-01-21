//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  touchmove: function(event){
    this.setData({
      x: event.detail.x,
      y: event.detail.y,
    });
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
