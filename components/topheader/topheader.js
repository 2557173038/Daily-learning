// components/topheader/topheader.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isShow:{
      type:Boolean,
      value:true
    }
  },
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多 slot 支持
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
    handle6(evt){
      console.log(evt.currentTarget.dataset.isshow)
      this.triggerEvent("Slot")
    }
  }
})
