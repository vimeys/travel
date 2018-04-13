// component/banner.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      url:{
        type:Array
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
    autoplay:true,
    interval:2000,
    duration:1000,
      banner: [
          { url: '../../pages/image/banner.png' },
          { url: '../../pages/image/banner.png' },
          { url: '../../pages/image/banner.png' }
      ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
      hrefProduct(){
            console.log(this.data.interval)
      },
      swiper(e){
          var myEventDetail = {index:e.detail.current} // detail对象，提供给事件监听函数
          var myEventOption = {} // 触发事件的选项
          this.triggerEvent('swiper', myEventDetail, myEventOption)
      }
  }
})
