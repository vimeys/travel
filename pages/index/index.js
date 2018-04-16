//index.js
//获取应用实例
const app = getApp();
import ajax from '../../utils/ajax';
import  url from '../../utils/url'
import utils from '../../utils/totalUtil'
Page({
  data: {
      title:['主体推荐',"每月推荐","酒店推荐",'往期回顾'],
      themeSrc:'../themeList/themeList',
      mouthSrc:'../mouthList/mouthList',
      prevList:'../prevList/prevList',
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
      banner:[
          {url:'../pages/image/banner.png'},
          {url:'../pages/image/banner.png'},
          {url:'../pages/image/banner.png'}
      ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // 获取组件
  swiper(e){

  },
  onLoad: function () {
      wx.showLoading({
        title: '加载中'
      })
      this.getBanner();
      this.getIndex();
      let str='1'
      let Str=str.repeat(2)
      let orStr=str.repeat(5-2)
      this.setData({
          str:Str,
          orStr:orStr
      })

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

    // 获取banner
    getBanner(){
      ajax.promise(url.url.banner,{'position':1}).then((json)=>{
          let data=json.data;
          let arr=[]
          for(let  key in data){
              // let image=JSON.parse(data[key].image);
              let http=url.url.http+JSON.parse(data[key].image).thumbnail
              arr.push({url:http})
          }
          console.log(arr);
          wx.hideLoading();
          this.setData({
              banner:arr
          })
      })
    },
    // 获取首页
    getIndex(){
      ajax.promise(url.url.Index,{}).then((json)=>{
          console.log(json)
          let data=json.data;
          let [theme,mouths,hotel,prev]=[[],[],[],[]];
          for(let key in data){
              switch (key){
                  case 'theme':
                      for(let keys in data[key]){
                          let Data=data[key][keys]
                          // console.log(Data);
                          theme.push(Data);
                      }
                      utils.pushHttp(theme,url.url.http,'logo','thumbnail');
                      break;
                  case 'hotel':
                      for(let keys in data[key]){
                          let Data=data[key][keys];
                          hotel.push(Data)
                      }
                      utils.pushHttp(hotel,url.url.http,'cover_url','thumbnail');
                      // utils.pushHttp(hotel,url.url.http,'')
                      console.log(hotel);
                      break;
                  case 'month':
                      for(let keys in data[key]){
                          let Data=data[key][keys]
                          mouths.push(Data)
                      }
                      utils.pushHttp(mouths,url.url.http,'cover_url','thumbnail');
                      mouths[0].published_time=utils.formatYear(mouths[0].published_time);
                      // mouths[0].

                      break;
                  case 'case':
                      for(let keys in data[key]){
                          let Data=data[key][keys]
                          prev.push(Data)
                      }
                      utils.pushHttp(prev,url.url.http,'cover_url','thumbnail')

              }
          }
          
          this.setData({
              theme:theme,
              mouths:mouths,
              hotel:hotel,
              prev:prev
          })
      })
    },
  getUserInfo: function(e) {
    console.log(e);
    app.globalData.userInfo = e.detail.userInfo;
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
