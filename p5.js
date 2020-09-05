function openNav() {
  document.getElementById("nav-content").style.display = "block";
}
function closeNav() {
  document.getElementById("nav-content").style.display = "none";
}

function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}
