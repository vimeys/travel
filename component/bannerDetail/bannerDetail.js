// component/bannerDetail.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      url:{
          type:Array
      },
      pageNum:{
          type:Boolean,
          value:false
      },
      num:{
          type:Number,
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
      url: [
          { url: '../../pages/image/banner.png' },
          { url: '../../pages/image/banner.png' },
          { url: '../../pages/image/banner.png' }
      ]
  },
    // 滚动获取下标和总数量

  /**
   * 组件的方法列表
   */
  methods: {
      swiper(e){
          console.log(e);
          let index=e.detail.index+1;
          let length=e.detail.length;
          console.log(index, length);
          this.setData({
              index:index,
              length:length
          })
      },
  }
})
