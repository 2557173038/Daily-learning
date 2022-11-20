// components/nacbar/navbar.js
// 注册一个组件
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: ["正在热映", "即将上映"],
    },
    current:{
      type:Number,
      value:0
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    // datalist: ["正在热映", "即将上映"],
    // id: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick(evt) {
      // console.log(evt.currentTarget.dataset.index)
      // this.setData({
      //   current: evt.currentTarget.dataset.index
      // })
      this.triggerEvent("ParentEvent",evt.currentTarget.dataset.index)//触发父事件,后者传参
    },
  }
})