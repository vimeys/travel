const Url='http://172.200.1.132:1201/api/';
const url={};
url.banner=Url+'TourismIndex/Bannerlist';//轮播图片
url.Index=Url+'tourismindex/mainlist';//首页所有请求
url.detail=Url+"tourismindex/detail";//详情
url.prevList=Url+'TourismIndex/caseList';//案例详情
url.hotelList=Url+'TourismIndex/hotelList';//酒店列表
url.themeList=Url+'TourismIndex/themeList';//获取主体列表
url.themeListDetail=Url+'tourismindex/travel';//获取分类
url.mouthList=Url+'TourismIndex/videolist';//每月推荐


url.http='http://172.200.1.132:1201/upload/';//图片前缀
module.exports={
    url
};