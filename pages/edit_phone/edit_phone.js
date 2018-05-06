// pages/edit_phone/edit_phone.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    old_phone:'13234567890',
    new_phone:'',
    is_old:true,
    flag1: false,
    codeDis1: false,
    flag2: false,
    codeDis2: false,
    phoneCode: "获取验证码",
    codePhone: ""
  },
  //是否用元手机
  checkChange:function(e){
    var isCheck=e.detail.value[0]?true:false;
    this.setData({
      is_old: isCheck
    });
  },
  getOldCode:function(e){
    var thisIndex=e.target.id;
    var oldPhone = this.data.old_phone;
    this.changeCode(thisIndex,oldPhone);
  }, 
  getNewCode: function (e) {
    var thisIndex = e.target.id;
    var newPhone = this.data.new_phone;
    this.changeCode(thisIndex,newPhone);
  },
  //手机号获取验证码
  changeCode(index,telephone) {
    var _this = this
    if (telephone.length != 11 || isNaN(telephone)) {
      wx.showToast({
        title: '请输入有效的手机号码',
        icon: "loading",
        duration: 2000
      })
      return
    }
    if(index==0){
      this.setData({
        codeDis1: true
      });
    }else{
      this.setData({
        codeDis2: true
      });
    }
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