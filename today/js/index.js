const day = document.getElementsByClassName('day')[0];
const time = document.getElementsByClassName('time')[0];

function formate(data) {
  return data >= 10 ? data : `0${data}`
}

const DAY = new Date();
day.innerHTML = `${formate(DAY.getMonth() + 1)}月${formate(DAY.getDate())}日`;

setInterval(() => {
  const TIME = new Date();
  time.innerHTML = `${formate(TIME.getHours())}:${formate(TIME.getMinutes())}:${formate(TIME.getSeconds())}`;
}, 1000);

