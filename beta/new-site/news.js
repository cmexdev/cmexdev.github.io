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

var items = []

$.getJSON("news.json", function (data) {
    var dataarr = 0
    var datalen = Object.keys(data).length
    while (dataarr < datalen) {
        var newsTitle = document.createElement('div')
        newsTitle.textContent = data[dataarr].title
        newsTitle.className = 'news-title'
        out.appendChild(newsTitle)

        var newsAuthor = document.createElement('div')
        newsAuthor.textContent = data[dataarr].author
        newsAuthor.className = 'news-author'
        out.appendChild(newsAuthor)

        var newsContent = document.createElement('div')
        newsContent.textContent = data[dataarr].content
        newsContent.className = 'news-content'
        out.appendChild(newsContent)

        var newsWritten = document.createElement('div')
        if (data[dataarr].date == undefined) {
            newsWritten.textContent = 'No "written-on" date provided'
        }
        else {
            newsWritten.textContent = 'Written on: ' + data[dataarr].date
        }
        newsWritten.className = 'news-date'
        out.appendChild(newsWritten)

        dataarr++
    }
});

var newsHr = document.createElement('hr')
out.appendChild(newsHr)