// pages/themeList/themeList.js
import ajax from '../../utils/ajax'
import url from '../../utils/url'
import  utils from '../../utils/totalUtil'
Page({

  /**
   * 页面的初始数据
   */
  data: {
      index:0,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id=options.id;
    if(id){
      this.getList3(id)
    }else{
        this.getList()
    }

  },
      // 三个主题跳转的
    getList3(abc){
        ajax.promise(url.url.themeListDetail,{theme_id:abc}).then((json)=>{
            let data=json.data;
            let arr=[]
            for(let key in data){
                arr.push(data[key])
            }
            utils.pushHttp(arr,url.url.http,'cover_url','thumbnail');
            this.setData({Data:arr})
        });
        ajax.promise(url.url.themeList,{}).then((json)=>{
            let data=json.data;
            let list=[];
            for(var key in data){
                list.push(data[key])
            }
            list.forEach((item,index)=>{
                if(item.id==abc){
                    let image=url.url.http+JSON.parse(list[index].logo).thumbnail
                  this.setData({
                      index:index,
                      image:image
                  })
                }
            });
            this.setData({
                themeList:list
            })
        })
    },
    // 获取列表详情
    getListDetail(id){
        ajax.promise(url.url.themeListDetail,{theme_id:id}).then((json)=>{
            let data=json.data;
            let arr=[]
            for(let key in data){
                arr.push(data[key])
            }
            utils.pushHttp(arr,url.url.http,'cover_url','thumbnail');
            this.setData({Data:arr})
        })
    },
    // 获取主题列表
    getList(){
      ajax.promise(url.url.themeList,{}).then((json)=>{
          let data=json.data
          let list=[]
          for(var key in data){
            list.push(data[key])
          }
          let image=url.url.http+JSON.parse(list[0].logo).thumbnail
          let id=list[0].id;
          this.getListDetail(id)
          this.setData({
              themeList:list,
              image:image
          })
      })
    },

    chooseTheme(e){
      let idx=e.currentTarget.dataset.index;
      this.setData({
          index:idx
      })
        let list=this.data.themeList;
        let image=url.url.http+JSON.parse(list[idx].logo).thumbnail
        this.setData({
            image:image
        })
        let id=this.data.themeList[idx].id
        this.getListDetail(id)
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