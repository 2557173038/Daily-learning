// pages/demo/demo.js
// 注册页面的方法
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myname:'huahua',
    ids:["aaa","bbb","ccc"],
    list:["kerwin","tiechui","ximen","tiezhu"],
    isCreated:true,
    isHidden:false,
  },//状态
  handleTap(){
    // console.log('click',this.data.myname)
    // this.data.myname='cjj'
    this.setData({
      myname:"cjj",
      isCreated:!this.data.isCreated,
      isHidden:!this.data.isHidden
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