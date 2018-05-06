// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:'',
    flag: false,
    codeDis: false,
    phoneCode: "获取验证码",
    codePhone: ""
  },
  phoneChange:function(e){
    var thisVal=e.detail.value;
    this.setData({
      phone:thisVal
    })
  },
  codeChange:function(e){
    var thisVal = e.detail.value;
    this.setData({
      codePhone: thisVal
    })
  },
  getCode:function() {
    var _this = this;
    var telephone=this.data.phone;
    if (telephone.length != 11 || isNaN(telephone)) {
      wx.showToast({
        title: '请输入有效号码',
        icon: "loading",
        duration: 2000
      })
      return
    }
    this.setData({
      codeDis: true
    });
    wx.request({
      url: "******************",
      data: {
        phone: telephone
      },
      success: function (res) {
        let data = res.data
        if (data.respCode != "000") {
          _this.setData({
            codeDis: false
          })
          wx.showToast({
            title: data.respMessage,
            icon: "loading",
            duration: 2000
          })
        } else {
          _this.setData({
            phoneCode: 60
          })
          let time = setInterval(() => {
            let phoneCode = _this.data.phoneCode
            phoneCode--
            _this.setData({
              phoneCode: phoneCode
            })
            if (phoneCode == 0) {
              clearInterval(time)
              _this.setData({
                phoneCode: "获取验证码",
                flag: true
              })
            }
          }, 1000)
        }
      }
    });
  },
  //登录
  submitLogin:function(e){
    wx.navigateTo({
      url: '../information/information'
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