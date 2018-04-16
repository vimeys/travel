// component/mouthItem.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        isTime: {
            type: Boolean
        },
        isShadow: {
            type: Boolean
        },
        Data: {
            type: Array,
            value: [1]
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        isShadow: false,
        // isTime:false
    },

    /**
     * 组件的方法列表
     */
    methods: {}
});
