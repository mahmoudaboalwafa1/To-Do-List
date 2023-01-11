// All Variables
let input = document.querySelector("input");
let addTask = document.querySelector(".write-tasks span");
let taskEmpty = document.querySelector(".Noting span");
let form = document.forms[0];
let Noting = document.querySelector(".Noting");
let taskCount = document.querySelector(".Not span");
let complete = document.querySelector(".complete span");
let deleteAll = document.getElementById("delete-all");
let finsihAll = document.getElementById("finish-all");

window.onload = function () {
  input.focus();
};

form.onsubmit = (e) => {
  e.preventDefault();
};

addTask.onclick = () => {
  if (input.value.length >= 1) {
    taskEmpty.remove();
    // Creating Task
    createTask();
    // countTask
    taskCount.textContent = parseInt(taskCount.textContent) + 1;
    let allTasks = document.querySelectorAll("ul.boxes");
    // when click on button delete
    let del = document.querySelector(".delete");
    del.onclick = () => {
      del.parentElement.remove();
      taskCount.textContent = parseInt(taskCount.textContent) - 1;
    };
    input.value = "";
    // Task finsih
    allTasks.forEach(
      (ele) =>
        (ele.firstChild.onclick = () => {
          ele.firstChild.classList.add("finish");
          if (ele.firstChild.classList.contains("finish")) {
            complete.textContent = parseInt(complete.textContent) + 1;
            ele.firstChild.style.cssText = "pointer-events: none";
          }
        })
    );

    // Finish All Tasks
    let taskss = Array.from(document.querySelectorAll(".first"));
    finsihAll.onclick = () => {
      allTasks.forEach((ele) => {
        ele.firstChild.classList.add("finish");
        ele.firstChild.style.pointerEvents = "none";
        complete.textContent = taskss.length;
      });
    };

    // Delete All Tasks
    deleteAll.onclick = () => {
      allTasks.forEach((task) => task.remove());
    };
  } else {
    // creating sweetAlert
    let sweetAlert = document.createElement("div");
    let textAlert = document.createTextNode("You must fill in the field first");
    let closeAlert = document.createElement("p");
    let closeText = document.createTextNode("X");
    closeAlert.className = "iconX";
    // append sweetAlert
    document.body.appendChild(sweetAlert);
    closeAlert.appendChild(closeText);
    sweetAlert.appendChild(closeAlert);
    sweetAlert.appendChild(textAlert);

    // styling on sweetAlert
    sweetAlert.style.cssText =
      "background-image: url('./static/sweetAlert.png'); width: 600px; margin: -50px auto; height: 400px;font-weight: bold; position: relative;border: 3px solid #e91e63 ; border-radius: 7px ;display: flex; align-items: center; justify-content: center; padding-bottom: 120px";

    // stop click on addTask
    addTask.classList.add("stopClick");

    closeAlert.onclick = () => {
      closeAlert.parentElement.remove();
      addTask.classList.remove("stopClick");
    };
  }
};

// creating Task
let createTask = function () {
  let ul = document.createElement("ul");
  let task = document.createElement("li");
  let taskContent = document.createTextNode(input.value);
  Noting.appendChild(ul);
  ul.appendChild(task);
  ul.classList.add("boxes");
  task.classList.add("first");
  // Append task
  task.appendChild(taskContent);
  let del = document.createElement("li");
  del.classList.add("delete");
  ul.appendChild(del);
  del.textContent = "Delete";
};
