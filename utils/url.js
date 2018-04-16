const Url='http://172.200.1.132:1201/api/TourismIndex/';
const url={};
url.banner=Url+'Bannerlist';//轮播图片
url.Index='http://172.200.1.132:1201/api/tourismindex/mainlist';//首页所有请求
url.detail="http://172.200.1.132:1201/api/tourismindex/detail";//详情
url.prevList=Url+'caseList'//案例详情





url.http='http://172.200.1.132:1201/upload/';//图片前缀
module.exports={
    url
}