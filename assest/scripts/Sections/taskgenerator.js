let taskTitleInput = $.querySelector(".taskgene-title");
let taskSubmitBtn = $.querySelector(".task-submitbtn");
let tasksParentContainer = $.querySelector(".taskparent-container");
let noTaskSvgSection = $.querySelector(".no-tasks-svg")

let isTaskCheckedState = false;
let isTaskImportantState = false;

let tasksArray = []

function taskObjectGenerator(){
  let newTaskTitle = taskTitleInput.value
  
  if(newTaskTitle == ''){
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
  
    
    taskLocalStorage(tasksArray)
    newTaskGeneratorDom(tasksArray)
     
    if (tasksArray.length > 0){
      noTaskSvgSection.style.display = "none"
    } else {
      noTaskSvgSection.style.display = "flex"
    }
  }
}
function taskLocalStorage(newTodoInfo) {
  localStorage.setItem("TaskInfoArray", JSON.stringify(newTodoInfo))
}
function newTaskGeneratorDom(newTodoDom){
  let newTaskLi, newTaskCheck, newTaskTitle, newTaskImportant

  tasksParentContainer.innerHTML = ''
  
  newTodoDom.forEach(newTask => {
    console.log(newTask);

    newTaskLi = $.createElement("li")
    newTaskLi.classList.add("tasklist-container")

    newTaskCheck = $.createElement("input")
    newTaskCheck.setAttribute("type", "checkbox")
    newTaskCheck.classList.add("task-checker")

    newTaskTitle = $.createElement("h3")
    newTaskTitle.classList.add("task-title")
    newTaskTitle.innerHTML = newTask.tasktitle

    newTaskImportant = $.createElement("input")
    newTaskImportant.setAttribute("type", "checkbox")
    newTaskImportant.classList.add("task-addtoimportant")

    newTaskLi.append(newTaskCheck,newTaskTitle,newTaskImportant)

    tasksParentContainer.appendChild(newTaskLi)

  });
}
function localStorageTaskReciver(){
  let localStorageData = JSON.parse(localStorage.getItem("TaskInfoArray"))

  if(localStorageData){
    tasksArray = localStorageData
  } else {
    tasksArray = []
  }

  newTaskGeneratorDom(tasksArray)

  if (tasksArray.length > 0){
    noTaskSvgSection.style.display = "none"
  } else {
    noTaskSvgSection.style.display = "flex"
  }
}
taskSubmitBtn.addEventListener("click", taskObjectGenerator)
window.addEventListener("load", localStorageTaskReciver)