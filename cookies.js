window.onload = checkCookie()
function closePopUp() {
    document.getElementsByClassName('popup')[0].style.display = "none"
}
function checkCookie() {
    var pagevisited = getCookie("pagevisited");
    if (pagevisited != "0") {
        document.getElementsByClassName('popup')[0].style.display = "none"
    } else {
        document.getElementById('popup').style.display = "block"
        document.cookie('pagevisited=1')
    }
}