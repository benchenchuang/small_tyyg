// pages/information/information.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sexData: ['男', '女'],
    name:'',
    certify:'',
    sex:'男',
    date: '',
    address:''
  },
  nameChange:function(e){
    this.setData({
      name:e.detail.value
    });
  },
  certifyChange: function (e) {
    this.setData({
      certify: e.detail.value
    });
  },
  pickerSex: function (e) {
    var sexData = this.data.sexData;
    this.setData({
      sex: sexData[e.detail.value]
    })
  },
  dateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  getCenterLocation:function(){
    var that=this;
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
  saveInfo:function(){
    
    wx.redirectTo({
      url: '../index/index'
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