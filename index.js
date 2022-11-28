//input field wrapper selectors
const totalTask = document.getElementById("total-task");
const plusIcon = document.getElementsByClassName("fa-plus")[0];
const inputField = document.querySelector('input[type="text"]');
const testListTag = document.getElementById("task-list");

const tasksList = [];

function handleHoverIcon() {
  // console.log(testListTag);
  const lis = document.querySelectorAll("ul > li");
  const icons = document.querySelectorAll("ul > li .fa-circle-xmark");
  for (let i = 0; i < lis.length; i++) {
    let element = lis[i];
    element.addEventListener("mouseover", function () {
      icons[i].style.visibility = "visible";
    });
    element.addEventListener("mouseout", function () {
      icons[i].style.visibility = "hidden";
    });
  }
}

function updateValue(e) {
  if (e.key === "Enter" && e.target.value !== "") {
    console.log(e.target.value);
    console.log("Enter key press");
    tasksList.push(e.target.value);
    //create li tag
    const li = document.createElement("li");
    //create left icon
    const leftIcon = document.createElement("i");
    leftIcon.classList.add("fa-regular", "fa-circle", "text-center");
    //create span
    const span = document.createElement("span");
    span.innerText = e.target.value;

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
    e.target.value = "";
    handleHoverIcon();
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

inputField.addEventListener("keypress", updateValue);
