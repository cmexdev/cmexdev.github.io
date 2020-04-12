var rannum = Math.floor(Math.random() * 10)
var msg;
if (rannum === 0) {
    msg = "nerd extreme lite"
}
else if (rannum === 1) {
    msg = "hehe"
}
else if (rannum === 2) {
    msg = "EH"
}
else {
    msg = "sarcastic javascript error"
}
console.log(msg)
console.log(rannum)
const rantx = document.getElementById('rantxt');
const rantxt = document.createElement('p')
rantxt.className = 'logo-a2'
rantxt.textContent = msg
rantx.appendChild(rantxt)