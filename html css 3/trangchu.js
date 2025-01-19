var anh = ["img/banner.jpg", "img/banner1.jpg", "img/banner2.jpg"];
var index = 0;
function prev() {
  index--;
  if (index < 0) index = anh.length - 1;
  document.getElementById("anh").src = anh[index];
}
function next() {
  index++;
  if (index == anh.length) index = 0;
  document.getElementById("anh").src = anh[index];
}
setInterval(next, 1000000000);
function changeImage1() {
  const changeImage = document.getElementById("sp1");
  changeImage.addEventListener("mouseover", function () {
    changeImage.src = "img/sp11.jpg";
  });
  changeImage.addEventListener("mouseout", function () {
    changeImage.src = "img/sp1.jpg";
  });
}
function changeImage2() {
  const changeImage = document.getElementById("sp2");
  changeImage.addEventListener("mouseover", function () {
    changeImage.src = "img/sp22.jpg";
  });
  changeImage.addEventListener("mouseout", function () {
    changeImage.src = "img/sp2.jpg";
  });
}
function changeImage3() {
  const changeImage = document.getElementById("sp3");
  changeImage.addEventListener("mouseover", function () {
    changeImage.src = "img/sp33.jpg";
  });
  changeImage.addEventListener("mouseout", function () {
    changeImage.src = "img/sp3.jpg";
  });
}
function changeImage4() {
  const changeImage = document.getElementById("sp4");
  changeImage.addEventListener("mouseover", function () {
    changeImage.src = "img/sp44.jpg";
  });
  changeImage.addEventListener("mouseout", function () {
    changeImage.src = "img/sp4.jpg";
  });
}
window.onload = function () {
  changeImage1();
  changeImage2();
  changeImage3();
  changeImage4();
};
