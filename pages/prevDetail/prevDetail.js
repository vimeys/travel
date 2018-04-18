// pages/prevDetail/prevDetail.js
import ajax from '../../utils/ajax'
import url from '../../utils/url'
import utils from '../../utils/totalUtil'
import wxParse from "../../utils/wxParse/wxParse";
Page({

  /**
   * 页面的初始数据
   */
  data: {
      index:1,
      length:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id=options.id
      wx.showLoading({
          title:'加载中'
      })
      this.getDetail(id)
  },
  getDetail(e){
    ajax.promise(url.url.detail,{
        type:4,
        id:e
    }).then((json)=>{
      json.data.add_time=utils.formatYear(json.data.add_time)
      let banner=json.data.images.photos;
        banner.forEach(function (item) {
            item.url=url.url.http+item.url
        });
        wxParse.wxParse('content','html',json.data.content,this,5)
        this.setData({
            banner:banner,
            Data:json.data,
            length:banner.length
        })
        wx.hideLoading()
    })
  },
    // 轮播数字
  swiper(e){
    let idx=e.detail.index;
    let len=e.detail.length;
      // console.log(idx);
      this.setData({
          index:idx,
          length:len
      })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
});