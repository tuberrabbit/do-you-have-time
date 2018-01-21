Page({
  data: {
    x: 3,
    y:4,
  },
  touchmove: function (event) {
    this.setData({
      x: event.detail.x,
      y: event.detail.y,
    });
  },
  onLoad: function () {
  }
})
