// pages/prevList/prevList.js
import  ajax from '../../utils/ajax'
import url from '../../utils/url'
import utils from '../../utils/totalUtil'
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中'
    })
    this.getList()
  },

    getList(e){
      ajax.promise(url.url.prevList,{}).then((json)=>{
        utils.pushHttp(json.data,url.url.http,'cover_url','thumbnail')
          for(var key in json.data){
              json.data[key].add_time=utils.formatYear(json.data[key].add_time)
          }
          // json.data.forEach((item)=>{
          //   item.add_time=utils.formatYear(item.add_time);
          // })
        // json.data.add_time=utils.formatYear(json.data.add_time);
          wx.hideLoading();
        this.setData({
            Data:json.data
        })
      })
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