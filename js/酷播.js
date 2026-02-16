muban.海螺3.二级.title = '.hl-dc-title&&Text;li.hl-col-xs-12:eq(6)--em&&Text';
muban.海螺3.二级.desc = 'li.hl-col-xs-12:eq(1)&&Text;;;li.hl-col-xs-12:eq(2)--em&&Text;li.hl-col-xs-12:eq(3)--em&&Text';
var rule = {
	title:'KUBO影视[飞]',
	模板:'海螺3',
	host:'https://123kubo.tv',
	url:'/type/fyclass-fypage.html',
	// url:'/show/fyclass/page/fypage.html',
	// url:'/show/fyfilter.html',
	// filterable:1,//是否启用分类筛选,
	// filter_url:'{{fl.cateId}}{{fl.area}}{{fl.by or "/by/time"}}{{fl.class}}{{fl.lang}}{{fl.letter}}/page/fypage{{fl.year}}',
	searchUrl:'/search/page/fypage/wd/**.html',
	searchable: 2,//是否启用全局搜索,
 quickSearch: 0,//是否启用快速搜索,
	//class_name:'电影&电视剧&动漫',
//    class_url:'1&2&4',
//    play_parse:true,
	//class_parse: 'li.hl-type-child a;a&&Text;a&&href;(\\d+).html',
//	cate_exclude:'專題',
	lazy:`js:
		var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
		var url = html.url;
		if (html.encrypt == '1') {
			url = unescape(url)
		} else if (html.encrypt == '2') {
			url = unescape(base64Decode(url))
		}
		if (/m3u8|mp4/.test(url)) {
			input = url
		} else {
			input
		}
	`,
}
