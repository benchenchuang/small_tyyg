// pages/my_info/my_info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sexData:['男','女'],
    name:'某某某',
    phone:'1181729871982',
    certify:'52645253743625374652',
    sex:'男',
    date:'1980-01-01',
    address:'江苏省常州市新北区太湖东路9-2号'
  },
  pickerSex: function (e) {
    var sexData=this.data.sexData;
    this.setData({
      sex: sexData[e.detail.value]
    })
  },
  dateChange:function(e){
    this.setData({
      date: e.detail.value
    })
  },
  getCenterLocation: function () {
    var that = this;
    wx.chooseLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var address = res.address;
        that.setData({
          address: address
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})