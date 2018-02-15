// pages/days/days.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  handleSelect: function (event) {
    const values = event.currentTarget.dataset.value.split('-');
    const { table } = this.data;
    const cell = table[values[0]];
    cell[values[1]] = !cell[values[1]];
    this.setData({
      table,
      disabled: !table.some(cell => cell.morning || cell.afternoon),
    });
  },

  submit: function (event) {
    const { table, disabled } = this.data;
    if (disabled) {
      return;
    }
    console.log(table, event.detail.signature, event.detail.userInfo);
    wx.navigateTo({
      url: '../result/result',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id, options.openid);
    // request history vote by id & openid
    const table = [{
      value: '一',
      morning: true,
      afternoon: false,
    }, {
      value: '二',
      morning: false,
      afternoon: false,
    }, {
      value: '三',
      morning: true,
      afternoon: false,
    }, {
      value: '四',
      morning: false,
      afternoon: false,
    }, {
      value: '五',
      morning: false,
      afternoon: false,
    }, {
      value: '六',
      morning: false,
      afternoon: false,
    }, {
      value: '日',
      morning: false,
      afternoon: false,
    }];
    this.setData({
      table,
      disabled: !table.some(cell => cell.morning || cell.afternoon),
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