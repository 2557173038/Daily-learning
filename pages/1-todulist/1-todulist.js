// pages/1-todulist/1-todulist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mytext: '',
    list: ["111", "2222", "33"],
    myValue: ''
  },
  //Add->点击事件
  handleAdd() {
    // console.log(666)
    if(!this.data.mytext) return
    console.log(this.data.mytext)
    this.setData({
      list: [...this.data.list, this.data.mytext],
      myValue: '',
      mytext: '',
    })
  },
  // input输入改变执行
  handleInput(evt) {
    console.log("input", evt.detail.value)
    this.setData({
      mytext: evt.detail.value,
    })
  },
  // 删除->点击事件
  handleDel(evt) {
    // console.log(evt.target.dataset.myid)
    this.data.list.splice(evt.target.dataset.myid,1)
    this.setData({
      list:this.data.list
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

