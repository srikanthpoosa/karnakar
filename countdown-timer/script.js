const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutsEl = document.getElementById("mins");
const secsEl = document.getElementById("sec");

function getDifferenceInTimes() {
  var today = new Date().getTime();
  var newyear = new Date("1 january 2021").getTime();
  var difference = newyear - today;

  days = Math.floor(difference / (1000 * 60 * 60 * 24));
  daysms = difference % (24 * 60 * 60 * 1000);
  hours = Math.floor(daysms / (60 * 60 * 1000));
  hoursms = difference % (60 * 60 * 1000);
  minutes = Math.floor(hoursms / (60 * 1000));
  minutesms = difference % (60 * 1000);
  secs = Math.floor(minutesms / 1000);

  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minutsEl.innerHTML = formatTime(minutes);
  secsEl.innerHTML = formatTime(secs);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

getDifferenceInTimes();

setInterval(getDifferenceInTimes, 1000);
