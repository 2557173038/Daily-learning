// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateItem:['衣服','裤子','帽子'],

    cateList:['衣服数据','裤子数据','帽子数据'],

    current:0
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

  },
  handleChange(evt){
    // console.log(evt.detail.current)
  this.setData({
    current:evt.detail.current
  })
  },
  handleEvent(evt){
    // console.log("父组件定义",evt.detail)
    this.setData({
      current:evt.detail
    })
  }
})