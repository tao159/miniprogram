import { globalUrl } from '../../utils/urls.js'
const methods = {
    getMovies: function(params) {
        wx.request({
            url: globalUrl.moviesUrl,
            data: {
                count: 7
            },
            success: function(res) {
                var movies = res.data.subject_collection_items;
                if (params && params.success) {
                    params.success(movies)
                }
            }
        })
    },
    getTvs: function(params) {
        wx.request({
            url: globalUrl.tvsUrl,
            data: {
                count: 7
            },
            success: function(res) {
                var tvs = res.data.subject_collection_items;
                if (params && params.success) {
                    params.success(tvs)
                }
            }
        })
    },
    getShows: function(params) {
        wx.request({
            url: globalUrl.showsUrl,
            data: {
                count: 7
            },
            success: function(res) {
                var shows = res.data.subject_collection_items;
                if (params && params.success) {
                    params.success(shows)
                }
            }
        })
    }
}
export { methods }