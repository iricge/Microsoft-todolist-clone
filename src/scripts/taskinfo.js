let userOnlineStatusElement = document.querySelector(".user-onlinestate");
let userBatteryLevelDisplay = document.querySelector(".batteryinfo-percentage");
let date = new Date();
let days = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
//! ------------------------------------- Returns date and time at the momment ------------------------------------- !\\
export function dateAtTheMomment(){
  return `Date: document{date.getFullYear()}/document{date.getMonth()}/document{days[date.getDay()]} || Time: document{date.getHours()}:document{date.getMinutes()}:document{date.getSeconds()}`
}
//! ------------------------------------- UUID generator ------------------------------------- !\\
export function _uuid() {
  var d = Date.now();
  if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
    d += performance.now(); //use high-precision timer if available
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}
//! ------------------------------------- Check for user internet status and shows it on DOM ------------------------------------- !\\
export function userOnlineState(){
  return navigator.onLine
}
export function userBrowser(){
  return navigator.userAgent
}