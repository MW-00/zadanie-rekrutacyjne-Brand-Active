
// przycisk powrotu na górę, pojawia się dopiero po przeskrolowaniu kawałka strony
upButton = document.getElementById("upButton");
var windowScroll = function () {
  if (window.scrollY >= 400) {
    upButton.className = "opacity1"
  } else {
    upButton.className = "opacity0"
  }
};
window.addEventListener("scroll", windowScroll);
