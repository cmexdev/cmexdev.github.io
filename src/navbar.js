var navbar = '<div class="navbar" id="navbar"><h1 class="navbar-content" ><style>html{font-family:arial}.navbar {height:100px;display: block;text-align: center;border: black;border-radius: 10px;border-style: solid;}.navbar-content {font - size: 60px;}.navbar-content: hover {cursor: default ;}.navbar-links {padding: 0px;}.navbar-link {text-decoration: none;color: black;font-size: 50px;border: black;border-radius: 5px;border-style: solid;padding: 2px;box-shadow: 4px 4px grey;transition: all 300ms;}.navbar-link:hover {background-color: darkblue;color: white;font-size: 60px;}.navbar-link:active {color: black;}</style ><div class="navbar-links"><a href="../index.html" class="navbar-link" title="home page">piccolowen</a> <a href="../code/code.html" class="navbar-link" title="check out code i have written">code</a> <a href="../music.html" class="navbar-link" title="music i make and like">music</a> <a href="../status.html" class="navbar-link" title="check the status of the internet">status</a> <a href="../404.html" class="navbar-link" title="unsorted pages">other</a></div></h1>';
var el = document.getElementById('navbar');
el.innerHTML = navbar;