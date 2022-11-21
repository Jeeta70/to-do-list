//input field wrapper selectors
const lis = document.querySelectorAll("ul > li");
const icons = document.querySelectorAll("ul > li .fa-circle-xmark");
const plusIcon = document.getElementsByClassName("fa-plus")[0];
const inputField = document.querySelector('input[type="text"]');
const testListTag = document.getElementById("task-list");

const tasksList = [];
let currentTask = "";


for (let i = 0; i < lis.length; i++) {
  let element = lis[i];
  element.addEventListener("mouseover", function () {
    icons[i].style.visibility = "visible";
  });
  element.addEventListener("mouseout", function () {
    icons[i].style.visibility = "hidden";
  });
}


function updateValue(e) {
  if (e.target.value) {
    currentTask = `${e.target.value}`;
    plusIcon.style.visibility = "visible";
  } else {
    plusIcon.style.visibility = "hidden";
  }
}

function addTask(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    tasksList.push(currentTask);
    console.log(tasksList);
    //create li tag
    const li = document.createElement("li");
    //create left icon
    const leftIcon = document.createElement("i");
    leftIcon.classList.add("fa-regular", "fa-circle", "text-center");
    //create span
    const span = document.createElement("span");
    span.innerText = currentTask;

    //create right icon
    const rightIcon = document.createElement("i");
    rightIcon.classList.add(
      "fa-regular",
      "fa-circle-xmark",
      "text-center",
      "hide"
    );
    li.appendChild(leftIcon);
    li.appendChild(span);
    li.appendChild(rightIcon);
    testListTag.appendChild(li);
  }
}

inputField.addEventListener("input", updateValue);
inputField.addEventListener("keypress", addTask);

