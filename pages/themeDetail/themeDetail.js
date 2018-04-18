// pages/themeDetail/themeDetail.js
import ajax from '../../utils/ajax';
import  url from '../../utils/url'
import utils from '../../utils/totalUtil'
import wxParse from "../../utils/wxParse/wxParse";
Page({

  /**
   * 页面的初始数据
   */
  data: {
      index:1,
      length:1,
      active:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.showLoading({
          title:'加载中'
      })
    var that=this;
      wx.getSystemInfo({
          success(res){
              that.setData({
                  windowWidth:res.windowHeight
              })
          }
      })
    let id=options.id;
      this.getDetail(7)
  },

    // 获取详情
    getDetail(id){
      ajax.promise(url.url.detail,{
        type:1,
          id:id
      }).then((json)=>{
        console.log(json);
        let arr=json.data.images.photos
        arr.forEach(function (item) {
            item.url=url.url.http+item.url
        });
        let price=json.data.price;

        let array=price.split('.');
          wxParse.wxParse('content','html',json.data.desc,this,5)
          wxParse.wxParse('content2','html',json.data.intro,this,5)
          this.setData({
              banner:arr,
              price:array[0],
              Data:json.data,
              length:arr.length
          })
          wx.hideLoading()
      })
    },

    // 轮播滚动数字变化
    swiper(e){
        let idx=e.detail.index;
        let len=e.detail.length;
        // console.log(idx);
        this.setData({
            index:idx,
            length:len
        })
    },

    //点击
    click(e){
      let id=e.currentTarget.dataset.type;
        if(id==0){
            this.setData({
                currentTab:0,
                active:0
            })
        }else if(id==1){
            this.setData({
                active:1,
                currentTab:1
            })
        }
    },
    // 能容切换
    bindchange(e){
        console.log(e.detail.current);
        let id=e.detail.current;
        if(id==0){
            this.setData({
                active:0
            })
        }else if(id==1){
          this.setData({
              active:1
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