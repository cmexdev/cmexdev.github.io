window.onload = pageR()
function pageR() {
  console.log("redirecting...")
  setTimeout(function() {window.location = "../main.html"}, 4000)
  console.log("redirected")
}
