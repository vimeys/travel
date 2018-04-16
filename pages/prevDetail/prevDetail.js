// pages/prevDetail/prevDetail.js
import ajax from '../../utils/ajax'
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
    let id=options.id
      this.getDetail(id)
  },
  getDetail(e){
    ajax.promise(url.url.detail,{
        type:4,
        id:e
    }).then((json)=>{
      json.data.add_time=utils.formatYear(json.data.add_time)
      let banner=json.data.images.photos
        banner.forEach(function (item) {
            item.url=url.url.http+item.url
        })
        this.setData({
            banner:banner,
            Data:json.data
        })
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
});