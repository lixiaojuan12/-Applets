const app = getApp()

Page({
  data: {
    show: false
  },
  show() {
    this.setData({
      show: true
    })
  },
  hide(){
    this.setData({
      show: false
    })
  },
  onLoad: function () {},
})