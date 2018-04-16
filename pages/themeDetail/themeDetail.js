// pages/themeDetail/themeDetail.js
import ajax from '../../utils/ajax';
import  url from '../../utils/url'
import utils from '../../utils/totalUtil'
Page({

  /**
   * 页面的初始数据
   */
  data: {
      url:[
          { url: '../../pages/image/banner.png' },
          { url: '../../pages/image/banner.png' },
          { url: '../../pages/image/banner.png' }
      ],
      num:420,
      pageNum:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id=options.id;
      this.getDetail(id)
  },

    // 获取详情
    getDetail(id){
      ajax.promise(url.url.detail,{
        type:1,
          id:id
      }).then((json)=>{
        console.log(json);
          this.setData({
              url:json.data.images.photos
          })
      })
    },

    onPageScroll(e){
      // console.log(e)
        let scrollNum=e.scrollTop;
      let num;
        num=420-scrollNum*2;
        console.log(num);
        this.setData({

            num:num
        })
        if(e.scrollTop>210){
          this.setData({
              pageNum:true
          })
        }else{
          this.setData({
            pageNum:false
            })
        }
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
  onPullDownRefresh: function (e) {

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