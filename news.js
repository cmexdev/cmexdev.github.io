var out = document.getElementById('news-in')

var newsTitleTxt = 'News panel!'
var newsDescTxt = '<code>piccolowen.github.io</code> suports API! Visit the <a style="font-size:20px;" href="https://github.com/Piccolowen/piccolowen.github.io/wiki/API">wiki</a> for more info.'

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
newsDesc.innerHTML = newsDescTxt
out.appendChild(newsDesc)

var newsOut = document.createElement('div')
newsOut.className = 'news-article'

var items = []

$.getJSON("news.json", function (data) {
    var dataarr = 0
    var datalen = Object.keys(data).length
    while (dataarr < datalen) {
        var newsTitle = document.createElement('div')
        newsTitle.textContent = data[dataarr].title
        newsTitle.className = 'news-title'
        newsOut.appendChild(newsTitle)

        var newsAuthor = document.createElement('div')
        newsAuthor.textContent = data[dataarr].author
        newsAuthor.className = 'news-author'
        newsOut.appendChild(newsAuthor)

        var newsContent = document.createElement('div')
        newsContent.innerHTML = data[dataarr].content
        newsContent.className = 'news-content'
        newsOut.appendChild(newsContent)

        var newsWritten = document.createElement('div')
        if (data[dataarr].date == undefined) {
            newsWritten.textContent = 'No "written-on" date provided'
        }
        else {
            newsWritten.textContent = 'Written on: ' + data[dataarr].date
        }
        newsWritten.className = 'news-date'
        newsOut.appendChild(newsWritten)

        dataarr++
    }
    var mainOut = document.getElementById('news-in').appendChild(newsOut)
});

var newsHr = document.createElement('hr')
out.appendChild(newsHr)