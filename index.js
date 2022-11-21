//input field wrapper selectors
const lis = document.querySelectorAll("ul > li");
const icons = document.querySelectorAll("ul > li .fa-circle-xmark");


const tasksList = [];

for (let i = 0; i < lis.length; i++) {
  let element = lis[i];
  element.addEventListener("mouseover", function () {
    icons[i].style.visibility = "visible";
  });
  element.addEventListener("mouseout", function () {
    icons[i].style.visibility = "hidden";
  });
}
