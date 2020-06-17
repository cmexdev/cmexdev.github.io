var out = document.getElementById('footer-table')

if (out != undefined) {
    //ELEMENT EXISTS, CONTINUE
    var table = document.createElement('table')

    //HEADER ROW
    var tr0 = document.createElement('tr')

    var thSrc = document.createElement('th')
    thSrc.textContent = 'Resources'
    tr0.appendChild(thSrc)

    var thPrv = document.createElement('th')
    thPrv.textContent = 'Privacy'
    tr0.appendChild(thPrv)

    table.appendChild(tr0)

    //CONTENT ROWS

    //ROW1
    var tr1 = document.createElement('tr')

    var srcGit = document.createElement('td')
    srcGit.textContent = 'GitHub repository'
    tr1.appendChild(srcGit)

    var prvSum = document.createElement('td')
    prvSum.textContent = 'Summary'
    tr1.appendChild(prvSum)

    table.appendChild(tr1)

    //ROW2
    var tr2 = document.createElement('tr')

    var srcBoot = document.createElement('td')
    srcBoot.textContent = 'Bootstrap'
    tr2.appendChild(srcBoot)

    table.appendChild(tr2)

    //APPEND TABLE
    out.append(table)
}
else {
    //ELEMENT DOES NOT EXIST, ALERT ERROR
    console.error('Element "' + out + '" (#footer-table) does not exist')
}