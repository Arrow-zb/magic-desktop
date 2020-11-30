const day = document.getElementsByClassName('day')[0];
const time = document.getElementsByClassName('time')[0];

function formate(data) {
  return data >= 10 ? data : `0${data}`
}

function getDay() {
  const DAY = new Date();
  day.innerHTML = `${formate(DAY.getMonth() + 1)}月${formate(DAY.getDate())}日`;
}

function getTime() {
  const TIME = new Date();
  time.innerHTML = `${formate(TIME.getHours())}:${formate(TIME.getMinutes())}:${formate(TIME.getSeconds())}`;
}

getDay();
getTime();

setInterval(getDay, 1000*60*60);
setInterval(getTime, 1000);

