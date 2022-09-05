import '../style/style.css'
import { dateAtTheMomment , _uuid  , userOnlineState , userBrowser} from "./taskinfo.js"

let taskTitleInput = document.querySelector(".taskgene-title");
let taskSubmitBtn = document.querySelector(".task-submitbtn");
let tasksParentContainer = document.querySelector(".taskparent-container");
let noTaskSvgSection = document.querySelector(".no-tasks-svg")
const listSection = document.querySelector(".list-section");
const hamBtn = document.querySelector(".listmenu-hambtn");
const hamBackBtn = document.querySelector(".listmenu-hambackbtn");
const blackOpacity = document.querySelector(".blakcscreen-overlay");

let isTaskCheckedState = false;
let isTaskImportantState = false;

let tasksArray = []

// sdkfsjdr9394: {
//   title: null,
//   discreption: null,
//   relativeLinks: null, 
//   labes: [],
//   tags: [],
//   checklist: null, 
//   creationDate: dateAtTheMomment,
//   isTaskChecked: false,
//   isTaskImportant: false,
// }, 
let userInfoObject = {
    user_name: null,
    user_id: _uuid, 
    user_email: null,
    user_pfp: null,
    user_creationDate: dateAtTheMomment(), 
    user_browser_version: userBrowser(), 
    isUserOnline: userOnlineState(),
    user_taskFolders: [],
}

// creating an object and saving it in array for localstorage
function taskObjectGenerator(title , discreption, relativeLinks, labes, tags, checklist) {
  let newTaskTitle = taskTitleInput.value

  if (newTaskTitle == '') {
    return alert("fill the input please")
  } else {
    let newTaskInfo = {
       task_title: title,
       task_discreption: discreption,
       task_relativeLinks: relativeLinks, 
       task_labes: labes,
       task_tags: tags,
       task_checklist: checklist, 
       task_creationDate: dateAtTheMomment(),
       isTaskChecked: false,
       isTaskImportant: false,
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
// removes task based on uuid
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
// function userIpAddressFetch(){ 

//   let url = "https://api.ipify.org/?format=json"

//   fetch(url)
//   .then((results) => (results.json()))
//   .then((data) => {
//     userLocationFetch(data.ip)
//   })
// }

// function userLocationFetch(ip){
//   let url = `http://ip-api.com/json/document{ip}?fields=status,message,continent,country,countryCode,region,regionName,city,zip,lat,lon,timezone,currency,isp,org,as,proxy,query`
//   let user_ip = ip
//   fetch(url)
//   .then((results) => results.json())
//   .then((data)=> console.log(data))

//   return(user_ip)
// }
hamBtn.addEventListener("click", ()=>{
  listSection.classList.add("listmenu-hamburgeractive");
  // to make the list section appear
  hamBackBtn.style.display = "inline-block";
  blackOpacity.style.display = "block";
})
hamBackBtn.addEventListener("click", ()=>{
  listSection.classList.remove("listmenu-hamburgeractive");
  listSection.style.left = "-100%"
  // to make the list section go left and out of the screen
  hamBtn.style.display = "inline-block"
  blackOpacity.style.display = "none" 
})
taskSubmitBtn.addEventListener("click", taskObjectGenerator)
window.addEventListener("load", ()=>{
  localStorageTaskReciver()
})
document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    taskObjectGenerator()
    
  }
})
