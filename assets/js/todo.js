const btn = document.querySelector("#addBtn");

// Added the data
const addData = () => {
  const todoInput = document.querySelector("#todoInput");
  const taskInfo = JSON.parse(localStorage.getItem("task")) || [];
  taskInfo.push(todoInput.value);
  localStorage.setItem("task", JSON.stringify(taskInfo));
  getloadTaskData();
  // todoInput.value = ''
};

btn.addEventListener("click", addData);

// get the data form the localStoarge

const renderedArea = document.querySelector("#renderedArea");
function getloadTaskData() {
  renderedArea.innerHTML = "";
  const taskInfo = JSON.parse(localStorage.getItem("task")) || [];
  taskInfo.map((task, index) => {
    const div = document.createElement("div");
    div.classList = "bg-slate-200 p-3 rounded flex justify-between";
    const h1 = document.createElement("h1");
    h1.innerHTML = task;

    const div1 = document.createElement("div");
    div1.classList = "flex item-center gap-2";
    // delect Btn
    const button = document.createElement("button");
    button.innerHTML = "delect";
    button.classList = "bg-red-500 py-3 px-1 rounded text-white ";
    button.id = "delectBtn";
    button.setAttribute("data-index", `${index}`);
    // upate Btn
    const updateButton = document.createElement("button");
    updateButton.innerHTML = "update";
    updateButton.classList = "bg-green-500 py-3 px-1 rounded text-white ";
    updateButton.id = "updateBtn";
    updateButton.setAttribute("data-index", `${index}`);

    div1.append(button, updateButton);
    div.append(h1, div1);
    renderedArea.append(div);
  });

  document.addEventListener("click", (event) => {
    const target = event.target;

    if (target.id == "delectBtn") {
      // handle delect
      const index = target.dataset.index;
      const taskInfo = JSON.parse(localStorage.getItem("task")) || [];
      taskInfo.splice(index, 1);
      localStorage.setItem("task", JSON.stringify(taskInfo));
      getloadTaskData();
    } else if (target.id == "updateBtn") {
      //  handle update
      const index = target.dataset.index;
      const task = prompt("Enter a Task");
      const taskInfo = JSON.parse(localStorage.getItem("task")) || [];
      taskInfo.splice(index, 1, task);
      localStorage.setItem("task", JSON.stringify(taskInfo));
      getloadTaskData();
    }
  });
}

document.addEventListener("DOMContentLoaded", getloadTaskData);

// handeleCLick
