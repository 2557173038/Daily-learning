// components/count/count.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    count:10
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
    this.intervalId=setInterval(()=>{ // 定时器的唯一标识符
        if(this.data.count===0){
          //通知父组件移除自己
          this.triggerEvent("Click")
          return
        }
      this.setData({
        count:this.data.count-1
      })
      },1000)
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
      // console.log("22")
      clearInterval(this.intervalId)//清除定时器
    },
  }
})
