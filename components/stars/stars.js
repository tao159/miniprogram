// components/stars/stars.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        rate: {
            type: Number,
            value: 0
        },
        size: {
            type: Number,
            value: 20
        },
        fontSize: {
            type: Number,
            value: 20
        },
        fontColor: {
            type: String,
            value: "#ccc"
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {

    },
    lifetimes: {
        attached: function() {
            var that = this;
            var rate = this.properties.rate;
            var intrate = parseInt(rate);
            var light = parseInt(intrate / 2);
            var href = intrate % 2;
            var gray = 5 - light - href;
            var lightArr = [],
                hrefArr = [],
                grayArr = [];
            for (var i = 1; i <= light; i++) {
                lightArr.push(i)
            }
            for (var i = 1; i <= href; i++) {
                hrefArr.push(i)
            }
            for (var i = 1; i <= gray; i++) {
                grayArr.push(i)
            }
            var rateText = rate && rate > 0 ? rate.toFixed(1) : '未评分'
            this.setData({
                lightArr: lightArr,
                hrefArr: hrefArr,
                grayArr: grayArr,
                rateText: rateText
            })

        }
    }
})