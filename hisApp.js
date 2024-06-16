/*
https://www.youtube.com/watch?v=3PHXvlpOkf4&list=RDCMUC8butISFwT-Wl7EV0hUK0BQ&start_radio=1&t=7768s

4:59

5:05 end of HTML and start of JS

5:08 after getting the 1st 3 DOM elements

5:16 after the 3 easy items for giveaway sentence

5:25 start of countdown calculations: difference

5:44 to make the countdown always work so we don't have to
refresh 

ends at 5:56

https://github.com/john-smilga/javascript-basic-projects/tree/master/12-countdown-timer/setup

*/

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = [...document.querySelectorAll(".deadline h4")];

//we want to add 10 days always when someone opens up this project
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

//let futureDate = new Date(2024, 5, 15, 10, 30, 0);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 8, 00, 0);

const year = futureDate.getFullYear();
const date = futureDate.getDate();
const day = futureDate.getDay();
const actualDay = weekdays[day];
const month = futureDate.getMonth();
const actualMonth = months[month];
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();

giveaway.textContent = `Giveaway Ends on ${actualDay}, ${date} ${actualMonth} ${year}, ${hours}:${mins}`;

//future time in ms
const futureTime = futureDate.getTime();
console.log(futureTime);

const getRemainingTime = () => {
  const today = new Date().getTime();
  const t = futureTime - today;

  //1s = 1000ms
  //1min = 60s
  //1hour = 60mins
  //1 day = 24hrs

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  console.log(oneDay);

  const days = Math.floor(t / oneDay);
  console.log(days);

  //const hours = t / oneHour; BUT THIS SHOWS ALL HOURS
  //BUT WE JUST WANT THE HOURS LEFT AFTER THE amount of days
  //const hours = days % 1; gives us the remainder
  const hours = Math.floor((t % oneDay) / oneHour);
  console.log(hours);

  const minutes = Math.floor((t % oneHour) / oneMinute);
  console.log(minutes);

  const seconds = Math.floor((t % oneMinute) / 1000);
  console.log(seconds);

  /* MY WAY:
  items.forEach((item) => {
    if (item.classList.contains("days")) {
      item.textContent = Math.floor(days);
    }
    if (item.classList.contains("hours")) {
      item.textContent = hours;
    }
    if (item.classList.contains("mins")) {
      item.textContent = minutes;
    }
    if (item.classList.contains("secs")) {
      item.textContent = seconds;
    }
  });
*/

  //we want a 0 to preceed if there is less than 10 digits
  const format = (item) => {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  };

  const values = [days, hours, minutes, seconds];

  items.forEach((item, index) => {
    item.textContent = format(values[index]);
  });
  //now if the future time is expired we want to display a note
  //remember t is the difference between the future and current time
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Sorry, time has expired! </h4>`;
    //we cannot use .textContent here it MUST be .innerHTML
  }
};

//countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();

//https://www.youtube.com/watch?v=3PHXvlpOkf4&list=RDCMUC8butISFwT-Wl7EV0hUK0BQ&start_radio=1&t=7768s

//5:37
