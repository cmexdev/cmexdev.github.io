var out = document.getElementById('news-in')

var newsTitleTxt = 'News panel!'
var newsDescTxt = 'piccolowen.github.io is going to support a form of API! (if we can figure it out)'

var newsCss = document.createElement('link')
newsCss.href = 'news.css'
newsCss.rel = 'stylesheet'
out.appendChild(newsCss)

var newsTitle = document.createElement('div')
newsTitle.className = 'news-title'
newsTitle.textContent = newsTitleTxt
out.appendChild(newsTitle)

var newsDesc = document.createElement('div')
newsDesc.className = 'news-desc'
newsDesc.textContent = newsDescTxt
out.appendChild(newsDesc)

$.getJSON("test.json", function (data) {
    var items = [];
    $.each(data, function (key, val) {
        items.push("<li id='" + key + "'>" + val + "</li>");
    });

    $("<ul/>", {
        "class": "my-new-list",
        html: items.join("")
    }).appendTo("body");
});

var newsHr = document.createElement('hr')
out.appendChild(newsHr)