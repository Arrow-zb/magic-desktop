const day = document.getElementsByClassName('month-day')[0];
const time = document.getElementsByClassName('hour-minutes')[0];

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


const body = document.getElementsByTagName('body')[0];

let num = 0;
setInterval(() => {
  if(num === 600) {
    body.style.opacity = 0;
  }else if(num === 630) {
    body.style.display = 'none';
    num = -1;
  }else if(num === 0) {
    body.style.display = 'flex';
    body.style.opacity = 1;
  }
  num++;
}, 100);

