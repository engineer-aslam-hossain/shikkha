window.onscroll = function () {
  stickyNav();
};

var header = document.getElementById("navigation");
header.addEventListener("click", function () {
  console.log("aaaaa");
});
var sticky = header.offsetTop;

function stickyNav() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
