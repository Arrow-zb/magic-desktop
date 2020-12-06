const deg = 6;
const hrWhite = document.querySelector('#hr-white');
const mnWhite = document.querySelector('#mn-white');
const scWhite = document.querySelector('#sc-white');
const hrDark = document.querySelector('#hr-dark');
const mnDark = document.querySelector('#mn-dark');
const scDark = document.querySelector('#sc-dark');

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;
  
  hrWhite.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
  hrDark.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;

  mnWhite.style.transform = `rotateZ(${mm}deg)`;
  mnDark.style.transform = `rotateZ(${mm}deg)`;

  scWhite.style.transform = `rotateZ(${ss}deg)`;
  scDark.style.transform = `rotateZ(${ss}deg)`;
})