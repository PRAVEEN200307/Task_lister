// get the data form the localStoarge

document.addEventListener("DOMContentLoaded", () => {
  // Added the data
  const addData = () => {
    const todoInput = document.querySelector("#todoInput");
    const taskInfo = JSON.parse(localStorage.getItem("task")) || [];
    taskInfo.push(todoInput.value);
    localStorage.setItem("task", JSON.stringify(taskInfo));
    getloadTaskData();
  };

  const btn = document.querySelector("#addBtn");
  btn.addEventListener("click", addData);

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

    // handle a delect
    const delectBtn = document.querySelectorAll("#delectBtn");
    delectBtn.forEach((btn) => {
      btn.addEventListener("click", (target) => {
        const index = target.target.dataset.index;
        const taskInfo = JSON.parse(localStorage.getItem("task")) || [];
        taskInfo.splice(index, 1);
        localStorage.setItem("task", JSON.stringify(taskInfo));
        getloadTaskData();
      });
    });

    // handle a update
    const updateBtn = document.querySelectorAll("#updateBtn");
    updateBtn.forEach((btn) => {
      btn.addEventListener("click", (target) => {
        const index = target.target.dataset.index;
        const task = prompt("Enter a Task Name");
        const taskInfo = JSON.parse(localStorage.getItem("task")) || [];
        taskInfo.splice(index, 1, task);
        localStorage.setItem("task", JSON.stringify(taskInfo));
        getloadTaskData();
      });
    });
  }

  getloadTaskData();
});
