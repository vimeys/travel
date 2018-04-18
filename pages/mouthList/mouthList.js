// pages/mouthList/mouthList.js
import ajax from '../../utils/ajax'
import url from '../../utils/url'
import utils from '../../utils/totalUtil'
Page({

  /**
   * 页面的初始数据
   */
  data: {
      isTime:true,
      isShadow:true,
      Data:[
          {
              isTime:true,
          },
          {
              isTime:true
          }
      ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        this.getList()
  },
    getList(){
      ajax.promise(url.url.mouthList,{}).then((json)=>{
          let data=json.data;
          let arr=[]
          for(let key in data){
              arr.push(data[key])
          }
          arr.forEach((item)=>{
              item.published_time=utils.formatYear(item.published_time)
          })
          utils.pushHttp(arr,url.url.http,'cover_url','thumbnail')

          this.setData({
              Data:arr
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