// pages/5-request/5-request.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datalist:[]
  },
  // 没有跨域限制
  // 有安全域名
  handleAjax(){
    // console.log("ajax")
    wx.request({
      url:'https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E5%8D%97%E6%98%8C&ci=83&channelId=4',
      method:'GET',
      data:{

      },
      success:(res)=>{
        console.log(res.data.data.hot)
        this.setData({
            datalist:res.data.data.hot
        })
      },
      fail:(res)=>{
        console.log(res)
      }
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
    this.handleAjax()
    console.log("show")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log("hide")
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