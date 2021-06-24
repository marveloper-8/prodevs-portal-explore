window.onscroll = function() { myFunction() };

var navbar = document.getElementById("navbar");
var navbar2 = document.getElementById("navbar2");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar2.classList.add("sticky")
    } else{
        navbar2.classList.remove("sticky");
    }
}