// pages/mouthDetail/mouthDetail.js
import ajax from '../../utils/ajax';
import  url from '../../utils/url'
import utils from '../../utils/totalUtil'
import wxParse from "../../utils/wxParse/wxParse";
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
    this.getDetail(options.id)
  },
  getDetail(id){
    ajax.promise(url.url.detail,{
      type:3,
        id:id
    }).then((json)=>{
      let src=url.url.http+json.data.video_url.files[0].url;

      let image=[{
          cover_url:url.url.http+json.data.cover_url.thumbnail,
          title:    json.data.title,
          published_time:utils.formatYear(json.data.published_time)
      }];
        wxParse.wxParse('content','html',json.data.content,this,5)
      this.setData({
          Data:json.data,
          image:image,
          src:src
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