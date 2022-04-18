let taskTitleInput = $.querySelector(".taskgene-title");
let taskSubmitBtn = $.querySelector(".task-submitbtn");
let tasksParentContainer = $.querySelector(".taskparent-container");
let noTaskSvgSection = $.querySelector(".no-tasks-svg")

let isTaskCheckedState = false;
let isTaskImportantState = false;

let tasksArray = []

// creating an object and saving it in array for localstorage
function taskObjectGenerator() {
  let newTaskTitle = taskTitleInput.value

  if (newTaskTitle == '') {
    return alert("fill the input please")
  } else {
    newTaskInfo = {
      tasktitle: newTaskTitle,
      isTaskChecked: isTaskCheckedState,
      isTaskImportant: isTaskImportantState,
      taskId: tasksArray.length + 1
    }
    tasksArray.push(newTaskInfo)

    taskTitleInput.value = '';

    // saving the data in localstorage
    taskLocalStorage(tasksArray)
    // creating the task in DOM
    newTaskGeneratorDom(tasksArray)

    taskTitleInput.focus()
  }
}
// saving the task info array into localstorage
function taskLocalStorage(newTodoInfo) {
  localStorage.setItem("TaskInfoArray", JSON.stringify(newTodoInfo))
  if (tasksArray.length > 0) {
    noTaskSvgSection.classList.remove("no-tasks-svgdeactive")
    noTaskSvgSection.classList.add("no-tasks-svgactive")
  } else {
    noTaskSvgSection.classList.remove("no-tasks-svgactive")
    noTaskSvgSection.classList.add("no-tasks-svgdeactive")
  }
}
// creating new task and adding it to DOM
function newTaskGeneratorDom(newTodoDom) {

  tasksParentContainer.innerHTML = ''

  newTodoDom.forEach(newTask => {
    tasksParentContainer.insertAdjacentHTML("beforeend", '<li class="tasklist-container"><label class="custom-checkbox" tab-index="0" aria-label="Checkbox Label"><input type="checkbox"> <span class="checkmark"></span></label> <h3 class="task-title"></h3>' + newTask.tasktitle + '<button type="button" class="taskdelete-btn" onclick="taskkRemover(' + newTask.taskId + ')"><i class="fa fa-times"></i></button><label class="custom-importantcheckbox" tabindex="0" aria-label="Checkbox label"><input type="checkbox" title="Mark as Important" class="task-addtoimportant"> <span class="important-checkmark"></span></label></li>')
  });
}

function taskkRemover(taskid) {
  let taskIdLocalStorage = JSON.parse(localStorage.getItem("TaskInfoArray"));

  tasksArray = taskIdLocalStorage

  let taskIdFinderLocalStorage = tasksArray.findIndex((taskIdSearch) => {
    return taskIdSearch.taskId === taskid;
  });

  tasksArray.splice(taskIdFinderLocalStorage, 1);

  taskLocalStorage(tasksArray)
  newTaskGeneratorDom(tasksArray)
}

function localStorageTaskReciver() {
  console.log(tasksArray);
  let localStorageData = JSON.parse(localStorage.getItem("TaskInfoArray"))

  if (localStorageData) {
    tasksArray = localStorageData
  } else {
    tasksArray = []
  }

  if (tasksArray.length > 0) {
    noTaskSvgSection.classList.remove("no-tasks-svgdeactive")
    noTaskSvgSection.classList.add("no-tasks-svgactive")
  } else {
    noTaskSvgSection.classList.remove("no-tasks-svgactive")
    noTaskSvgSection.classList.add("no-tasks-svgdeactive")
  }
  newTaskGeneratorDom(tasksArray)

}
taskSubmitBtn.addEventListener("click", taskObjectGenerator)
window.addEventListener("load", localStorageTaskReciver)
// document.addEventListener("keypress", (e) => {
//   if (e.key === 13) {
//     e.preventDefault();
//     taskObjectGenerator()
//   }
// })
