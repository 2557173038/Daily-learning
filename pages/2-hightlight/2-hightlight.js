// pages/2-hightlight/2-hightlight.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    datalist:["衣服","裤子","鞋子"],
    active:'',
    id:0
  },
handleClass(evt){
  // console.log(evt.target.dataset.myid)
  // evt.target 事件源
  // evt.currentTarget 绑定事件的元素
  this.setData({
   id:evt.currentTarget.dataset.myid
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})