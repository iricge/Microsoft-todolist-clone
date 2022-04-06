
let taskTitleInput = $.querySelector(".taskgene-title");
const taskSubmitBtn = $.querySelector(".task-submitbtn");
const taskHolder = $.querySelector(".taskparent-container");
const noTaskSection = $.querySelector(".no-tasks-svg");
// Identifiers

let taskCheckedStatus = false
let taskImportantStatus = false

let taskInfoObject = {};

function taskGenerator(){
  
  noTaskSection.style.display = "none";
  
  // idCounter++;
  
  // var newTaskObject = {
  //   taskTitle: taskTitleInput.value,
  //   isTaskChecked: false,
  //   isTaskImportant: false,
  //   taskId : idCounter
  // }

  taskInfoObject.taskTitl = taskTitleInput.value;
  taskInfoObject.isTaskChecked = taskCheckedStatus;
  taskInfoObject.isTaskImportant =  taskImportantStatus;

  var tasksJsonObject = JSON.stringify(taskInfoObject);
  let taskLocalStorage = localStorage.setItem("taskInformationSave", tasksJsonObject)
  var tasksInformation = JSON.parse(localStorage.getItem("taskInformationSave"))
  
  let taskLiCreator = document.createElement("li");
  taskLiCreator.classList.add("tasklist-container")
  taskHolder.appendChild(taskLiCreator)

  let taskDoneCheckbox = document.createElement("input")
  taskDoneCheckbox.setAttribute("type", "checkbox")
  taskDoneCheckbox.classList.add("task-checker")
  taskLiCreator.appendChild(taskDoneCheckbox)

  let taskTitleCreator = document.createElement("h3")
  taskTitleCreator.innerText = tasksInformation.taskTitle
  taskTitleCreator.classList.add("task-title")
  taskLiCreator.appendChild(taskTitleCreator)

  let taskImportantCheckbox = document.createElement("input")
  taskImportantCheckbox.setAttribute("type", "checkbox")
  taskImportantCheckbox.classList.add("task-addtoimportant")
  taskLiCreator.appendChild(taskImportantCheckbox)


  // console.log(newTaskObject.taskTitle);
  console.log(taskInfoObject);

  taskTitleInput.value = ''
}
taskSubmitBtn.addEventListener("click", taskGenerator)

