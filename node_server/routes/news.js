exports.getNewsList = function(req, res) {
    setTimeout(() => {
        res.send( [
        {title:"New 1", detail: 'news Detail'},
        {title:"New 2", detail: 'news Detail'},
        {title:"New 3", detail: 'news Detail'},
        {title:"New 4", detail: 'news Detail'},
        {title:"New 5", detail: 'news Detail'},
        {title:"New 6", detail: 'news Detail'},
        {title:"New 7", detail: 'news Detail'},
    ])
}, 2000);
}