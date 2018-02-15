// pages/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  applyDate: function (event) {
    wx.showToast({
      title: '发起见面吧',
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id);
    // todo: request result by id;
    this.setData({
      list: [{
        value: '周一上午',
        count: 18,
      }, {
        value: '周二下午',
        count: 18,
      }, {
        value: '周三上午',
        count: 18,
      }, {
        value: '周四上午',
        count: 18,
      }],
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})