var lat = ''
var lon = ''
var msg = ''
window.onload = function getLoc() {
    navigator.geolocation.getCurrentPosition(storeLoc)
}

function storeLoc(position) {
    lat = position.coords.latitude
    lon = position.coords.longitude
    msg = 'Getting weather from your current location (' + lat + ',' + lon + ')'
    document.getElementById('loc-msg').textContent = msg
}