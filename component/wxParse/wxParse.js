// component/wxParse/wxParse.js
import wxParse from '../../utils/wxParse/wxParse'
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        detail: {
            type: String,
            value:'"<p><span style="font-family: 楷体, 楷体_GB2312, SimKai;"></span><img src="http://172.200.1.9:900/upload/children/20180408/80829eab81af542393d1dc7c610e57f8.jpg" title="case.jpg" alt="case.jpg"/></p><p><br/></p><p style="text-align: center;"><strong>冯川</strong><br/></p><p>发UI舒服丢阿巴斯的覅U币赛的百分比撒我啥都发你傻科达洁能烂的弗兰克</p><p>asdf&nbsp;</p><p><br/></p><p><br/></p><p><br/></p><p><br/></p><p><br/></p><p><br/></p><p><br/></p><p><br/></p><p><br/></p><p><br/></p><p><br/></p><p><br/></p><p><br/></p><p><br/></p><p><br/></p><p><br/></p><p><img src="http://172.200.1.9:900/upload/default/20180408/dcdb42e601161237c291bf6947da5780.jpg" title="bg.jpg" alt="bg.jpg"/>sadfasf</p><p>asdfasdfas啊是的发生地方说的阿斯顿发是的反对发斯蒂芬阿斯顿发</p><p><span style="font-size: 36px;"></span></p>"\n'
        }
    },

    /**
     * 组件的初始数据
     */
    data: {},
    ready(abc){
        wxParse.wxParse('content','html',this.properties.detail,this,5)
    },
    /**
     * 组件的方法列表
     */
    methods: {
        // wxParse.wxParse('content',)


    }
})
