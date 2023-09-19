// ===> Question : 1 <===
let showDate = document.getElementById("date");
let now = new Date();
let month = now.getMonth() + 1;
let day = now.getDate() + 1;
let year = now.getFullYear();
showDate.innerHTML = day + " / " + month + " / " + year;

// ===> Question : 2 <===
function dobCheck() {
  let date = document.getElementById("userInput");
  let userDob = new Date(date.value);
  let now = new Date();
  let difference = now.getFullYear() - userDob.getFullYear();
  console.log(difference);
  let countdown = document.getElementById("userAge");
  countdown.innerHTML = difference;
}

// ===> Question : 3 <===
// let daysName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// let userInput = prompt("Enter the Date")
// let now = new Date(userInput)
// let day = now.getDay()
// let days = daysName[day]
// if (!isNaN(now) && day >= 0 && day < daysName.length) {
//     alert(`The day of the week for ${userInput} is ${days}.`);
// } else {
//     alert("Invalid date format or date.");
// }

// ===> Question : 4 <===
function checkCountdown() {
  let event = document.getElementById("eventDate");
  let now = new Date();
  let eventDate = new Date(event.value);
  let difference = eventDate.getTime() - now.getTime();
  let difToDay = Math.round(difference / 1000 / 60 / 60 / 24);
  let countdown = document.getElementById("countdown");
  countdown.innerText = difToDay;
}

// ===> Question : 5 <===
function isWeekend() {
  let inputDate = document.getElementById("inputDate");
  let dateStr = inputDate.value;
  const date = new Date(dateStr);
  const dayOfWeek = date.getDay();
  return dayOfWeek === 0 || dayOfWeek === 6;
}
function dateChecker() {
  let changeTag = document.getElementById("changeValue");
  if (isWeekend()) {
    changeTag.innerHTML = `date falls on a weekend (Saturday or Sunday).`;
  } else {
    changeTag.innerHTML = `date does not fall on a weekend.`;
  }
}

// ===> Question : 6 <===
function futureTimeChecker() {
  let userInputDate = document.getElementById("userInputDate");
  let futureDate = new Date(userInputDate.value);
  let currentDate = new Date();
  let future = futureDate - currentDate;
  let hours = Math.floor(future / (1000 * 60 * 60));
  let minutes = Math.floor((future % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((future % (1000 * 60)) / 1000);

  let futureTime = `${hours} hours ${minutes} minutes ${seconds} seconds`;
  console.log(futureTime);
  let showFutureDate = document.getElementById("result");
  showFutureDate.innerHTML = futureTime;
}

// ===> Question : 7 <===
function seasonChecker() {
  let season = document.getElementById("seasonDate");
  let seasonDate = new Date(season.value);
  let monthsArray = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = seasonDate.getMonth();
  console.log(monthsArray[month]);

  let displaySeason = document.getElementById("displaySeason");

  if (month === 0 || month === 1 || month === 11) {
    displaySeason.innerHTML = `${monthsArray[month]} is Winter season`;
  }

  if (month === 2 || month === 3 || month === 4) {
    displaySeason.innerHTML = `${monthsArray[month]} is Spring season`;
  }

  if (month === 5 || month === 6 || month === 7 || month === 8) {
    displaySeason.innerHTML = `${monthsArray[month]} is Summer Rainy season`;
  }

  if (month === 9 || month === 10) {
    displaySeason.innerHTML = `${monthsArray[month]} is Fall season`;
  }
}

// ===> Question : 8 <===
function dobCheck() {
  let date = document.getElementById("birthDate");
  let userDob = new Date(date.value);

  let futureDate = document.getElementById("futureDate");
  let userFuture = new Date(futureDate.value);

  let difference = userFuture.getFullYear() - userDob.getFullYear();
  console.log(difference);
  let countdown = document.getElementById("futureAge");
  countdown.innerHTML = `You will be ${difference} years old on ${userFuture.getFullYear()}  `;
}

// ===> Question : 9 <===
function daysChecker() {
  let date1 = document.getElementById("date1");
  let firstDate = new Date(date1.value);
  
  let date2 = document.getElementById("date2");
  let secDate = new Date(date2.value);
  let difference = secDate.getTime() - firstDate.getTime() ;
  let difToDay = Math.round(difference / 1000 / 60 / 60 / 24);
  let countdown = document.getElementById("calculatedDays");
  countdown.innerText =`${difToDay} days is Remaining`;
}