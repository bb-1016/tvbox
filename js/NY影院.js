muban.短视2.二级.title = '.slide-info-title&&Text;.hl-ma0&&Text';
muban.短视2.二级.img = '.detail-pic&&img&&data-src';
muban.短视2.二级.desc = '.fraction&&Text;;;.slide-info:eq(3)--strong&&Text;.slide-info:eq(2)--strong&&Text';
muban.短视2.二级.tab_text = 'body--i--span&&Text';
var rule={
    title:'NY影院',
    模板:'短视2',
    host:'https://www.nycvod.com',
    homeUrl:'/index.php/label/rb.html',
    // url: '/index.php/api/vod#type=fyfilter&page=fypage',
    // url:'/vodshow/fyfilter.html',
    detailUrl:'/voddetail/fyid.html',
	
    play_parse:true,
    lazy:`js:
        var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
        var url = html.url;
        if (html.encrypt == '1') {
            url = unescape(url)
        } else if (html.encrypt == '2') {
            url = unescape(base64Decode(url))
        }
        if (/\\.m3u8|\\.mp4/.test(url)) {
            input = {
                jx: 0,
                url: url,
                parse: 0
            }
        } else {
            input
        }
    `,
    推荐:'.public-list-box;a&&title;.lazy&&data-src;.public-prt&&Text;a&&href',
    double: false,
}
