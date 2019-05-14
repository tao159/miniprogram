// pages/list/list.js
import { methods } from '../../utils/api.js'
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        const type = options.type;
        const _this = this;
        var title = "";
        if (type == 'movie') {
            title = "电影"
            methods.getMovies({
                count: 1000,
                success: function(items) {
                    _this.setData({
                        items: items
                    })
                }
            })
        } else if (type == "tv") {
            title = "电视剧"
            methods.getTvs({
                count: 1000,
                success: function(items) {
                    _this.setData({
                        items: items
                    })
                }
            })
        } else {
            title = "综艺"
            methods.getShows({
                count: 1000,
                success: function(items) {
                    _this.setData({
                        items: items
                    })
                }
            })
        }
        wx.setNavigationBarTitle({
            title: title
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})