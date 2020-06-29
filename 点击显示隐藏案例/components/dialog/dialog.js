// components/dialog/dialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  options: {
    multipleSlots: true
  },
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    hide() {
      console.log("11")
      this.triggerEvent("xxx")
    }
  }
})