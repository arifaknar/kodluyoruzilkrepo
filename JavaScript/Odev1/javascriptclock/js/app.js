const myName = document.querySelector("#myName");
const myClock = document.querySelector("#myClock");
const days = [
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
  "Pazar",
];

let nowDay,nowHour,nowMinute,nowSecond,time


myClock.innerHTML = time
const firstName = prompt("Adınızı giriniz");
function getName() {
  myName.innerHTML = firstName;
}

function showTime() {
const nowDate = new Date();
nowDay = days[nowDate.getUTCDay() - 1];
nowHour = nowDate.getHours();
nowMinute = nowDate.getMinutes();
if (nowMinute < 10) nowMinute = "0" + nowMinute;
nowSecond = nowDate.getSeconds();
if (nowSecond < 10) nowSecond = "0" + nowSecond;
time=nowHour + ":" + nowMinute + ":" + nowSecond + "  " + nowDay;
myClock.innerText = time;
myClock.textContent = time;
  setInterval(showTime, 1000);
}
getName();
showTime()
