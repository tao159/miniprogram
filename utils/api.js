import { globalUrl } from 'urls.js'
const methods = {
    getMovies: function(params) {
        params.type = 'movie';
        methods.getItemList(params)
    },
    getTvs: function(params) {
        params.type = 'tvs';
        methods.getItemList(params)
    },
    getShows: function(params) {
        params.type = 'show';
        methods.getItemList(params)

    },
    getItemList: function(params) {
        var url = "";
        var count = params.count ? params.count : 7;
        if (params.type == "movie") {
            url = globalUrl.moviesUrl
        } else if (params.type == "tvs") {
            url = globalUrl.tvsUrl
        } else if (params.type == "show") {
            url = globalUrl.showsUrl
        }
        wx.request({
            url: url,
            data: {
                count: count
            },
            success: function(res) {
                var items = res.data.subject_collection_items;
                if (params && params.success) {
                    params.success(items)
                }
            }
        })
    }
}
export { methods }