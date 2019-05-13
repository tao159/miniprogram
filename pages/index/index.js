import { methods } from 'api.js';
Page({
    data: {

    },
    onLoad: function(options) {
        var that = this;

        //电影
        methods.getMovies({
            success: function(movies) {
                that.setData({
                    movies: movies
                })
            }
        })

        //电视剧
        methods.getTvs({
            success: function(tvs) {
                that.setData({
                    tvs: tvs
                })
            }
        })

        //综艺
        methods.getShows({
            success: function(shows) {
                that.setData({
                    shows: shows
                })
            }
        })
    }
})