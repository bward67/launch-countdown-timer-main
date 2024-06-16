const displayItems = [...document.querySelectorAll("h2")];
//console.log(displayItems);
const secsNumber = document.querySelector(".secs-number");
//console.log(secsNumber);

//we must start it at 14 days from now
const launchYear = new Date().getFullYear();
const launchMonth = new Date().getMonth();
const launchDay = new Date().getDate();

const launchDate = new Date(launchYear, launchMonth, launchDay + 14, 0, 0);
//console.log(launchDate);

//FUNCTIONS
//if there is only 1 digit we want to put a 0 in front of it
const addZero = (item) => {
  if (item < 10) {
    return (item = `0${item}`);
  } else {
    return item;
  }
};

const countdown = () => {
  const today = new Date().getTime();
  //console.log(today);

  const timeDiff = launchDate - today;
  //console.log(timeDiff); //ms
  /*
1000ms in a sec
60000ms in 1 min
3600000ms in an hour
86400000ms in a day
*/
  const daysDiff = Math.floor(timeDiff / 86400000);
  //console.log(daysDiff);
  const hoursDiff = Math.floor((timeDiff % 86400000) / 3600000);
  //console.log(hoursDiff);
  const minsDiff = Math.floor((timeDiff % 3600000) / 600000);
  //console.log(minsDiff);
  const secsDiff = Math.floor((timeDiff % 60000) / 1000);
  //console.log(secsDiff);
  displayItems.forEach((item) => {
    if (item.classList.contains("days-display")) {
      item.textContent = addZero(daysDiff);
    }
    if (item.classList.contains("hours-display")) {
      item.textContent = addZero(hoursDiff);
    }
    if (item.classList.contains("mins-display")) {
      item.textContent = addZero(minsDiff);
    }
    if (item.classList.contains("secs-display")) {
      item.textContent = addZero(secsDiff);
    }
  });
};

// set an interval so that the time updates every sec
setInterval(countdown, 1000);

//BONUS
//when a number changes the display-box flips from the middle
displayItems.forEach((item) => {
  //console.log(item);
  item.addEventListener("change", () => {
    //I guess "change" only works with input or textareas
    // console.log("item changed");
    secsNumber.style.transform = "rotateX(180deg)";
  });
});
