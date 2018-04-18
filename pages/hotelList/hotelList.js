// pages/hotelList/hotelList.js
import  ajax from '../../utils/ajax'
import  url from '../../utils/url'
import  utils from '../../utils/totalUtil'
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
    this.getBanner();
    this.getList()
  },
    // 获取酒店列表
    getList(){
      ajax.promise(url.url.hotelList,{}).then((json)=>{
          console.log(json);
          let hotel=[];
          for(var key in json.data){
              hotel.push(json.data[key])
          }
          utils.pushHttp(hotel,url.url.http,'cover_url','thumbnail');
          hotel.forEach((item)=>{
              let star=item.star;
              let a='a'
              let orStar=5-star
              item.star=a.repeat(star)
              item.orStar=a.repeat(orStar)
          })
          this.setData({
              hotel:hotel
          })
      })
    },
    // 轮播图片
    getBanner(){
        ajax.promise(url.url.banner,{position:2}).then((json)=>{
          let arr=[]
            for(var key in json.data){
                // console.log(json.data[key]['image']);
                arr.push(json.data[key])
            }
            utils.pushHttp(arr,url.url.http,'image','thumbnail');
          let arr2=[]
            arr.forEach((item)=>{
                arr2.push({url:item.image})
            })
            this.setData({
                banner:arr2
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