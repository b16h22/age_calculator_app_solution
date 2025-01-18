const dayInput = document.getElementById("day-input");
const monthInput = document.getElementById("month-input");
const yearInput = document.getElementById("year-input");

const yearsDisplay = document.getElementById("years-display");
const monthsDisplay = document.getElementById("months-display");
const daysDisplay = document.getElementById("days-display");

const submitButton = document.getElementById("submit-button");

submitButton.onclick = displayAge;

let dayInputValid = false;
let monthInputValid = false;
let yearInputValid = false;
let isLeapyear = false;
let febLength = 28;

dayInput.oninput= function() {this.value = this.value.slice(0, this.maxLength)};
monthInput.oninput= function() {this.value = this.value.slice(0, this.maxLength)};
yearInput.oninput= function() {this.value = this.value.slice(0, this.maxLength)};

function displayAge() {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth();
  let currentDay = currentDate.getDate();
  let dayInputValue = Math.round(dayInput.value);
  let monthInputValue = Math.round(monthInput.value);
  let yearInputValue = Math.round(yearInput.value);

  function checkLeapYear() {
    if(yearInputValue % 4 == 0) {
      if(yearInputValue % 100 == 0) {
        if(yearInputValue % 400 == 0) {
          febLength = 29;
        } else {
          febLength = 28;
        }
      } else {
        febLength = 29;       
      }
    } else {
      febLength = 28;
    }
  }

  function checkDay() {
    let dayLabel = dayInput.closest(".input-section").querySelector(".input-label");
    let dayError = dayInput.closest(".input-section").querySelector(".error-message");

    if(dayInput.validity.valueMissing) {
      dayInput.style.setProperty("--input-border-color", "hsl(0, 100%, 67%)");
      dayLabel.style.color = "hsl(0, 100%, 67%)";
      dayError.innerHTML = "This field is required";
      dayInputValid = false;
    } else if(dayInputValue == 0) {
      dayInput.style.setProperty("--input-border-color", "hsl(0, 100%, 67%)");
      dayLabel.style.color = "hsl(0, 100%, 67%)";
      dayError.innerHTML = "Must be a valid day";
      dayInputValid = false;
    } else if(yearInputValue == currentYear && monthInputValue == (currentMonth + 1)) {
      if(dayInputValue > currentDay) {
        dayInput.style.setProperty("--input-border-color", "hsl(0, 100%, 67%)");
        dayLabel.style.color = "hsl(0, 100%, 67%)";
        dayError.innerHTML = "Must be a past date";
        dayInputValid = false;
        console.log("entered day higher than current");
      } else {
        dayInput.style.setProperty("--input-border-color", "hsl(0, 0%, 86%)");
        dayLabel.style.color = "hsl(0, 1%, 44%)";
        dayError.innerHTML = "";
        dayInputValid = true;        
      }
    } else if(monthInputValue == 4 || monthInputValue == 6 || monthInputValue == 9 || monthInputValue == 11) {
      if(dayInputValue > 30) {
        dayInput.style.setProperty("--input-border-color", "hsl(0, 100%, 67%)");
        dayLabel.style.color = "hsl(0, 100%, 67%)";
        dayError.innerHTML = "Must be a valid date";
        dayInputValid = false;      
      } else {
        dayInput.style.setProperty("--input-border-color", "hsl(0, 0%, 86%)");
        dayLabel.style.color = "hsl(0, 1%, 44%)";
        dayError.innerHTML = "";
        dayInputValid = true;
      }
    } else if(monthInputValue == 1 || monthInputValue == 3 || monthInputValue == 5 || monthInputValue == 7 ||
        monthInputValue == 8 || monthInputValue == 10 || monthInputValue == 12) {
      if(dayInputValue > 31) {
        dayInput.style.setProperty("--input-border-color", "hsl(0, 100%, 67%)");
        dayLabel.style.color = "hsl(0, 100%, 67%)";
        dayError.innerHTML = "Must be a valid date";
        dayInputValid = false;
      } else {
        dayInput.style.setProperty("--input-border-color", "hsl(0, 0%, 86%)");
        dayLabel.style.color = "hsl(0, 1%, 44%)";
        dayError.innerHTML = "";
        dayInputValid = true;
      }
    } else if(dayInputValue > 31) {
      dayInput.style.setProperty("--input-border-color", "hsl(0, 100%, 67%)");
      dayLabel.style.color = "hsl(0, 100%, 67%)";
      dayError.innerHTML = "Must be a valid day";
      dayInputValid = false;
    } else if(monthInputValue == 2) {
      if(dayInputValue > febLength) {
        dayInput.style.setProperty("--input-border-color", "hsl(0, 100%, 67%)");
        dayLabel.style.color = "hsl(0, 100%, 67%)";
        dayError.innerHTML = "Must be a valid date";
        dayInputValid = false;
      } else {
        dayInput.style.setProperty("--input-border-color", "hsl(0, 0%, 86%)");
        dayLabel.style.color = "hsl(0, 1%, 44%)";
        dayError.innerHTML = "";
        dayInputValid = true;
      }
    } else {
      dayInput.style.setProperty("--input-border-color", "hsl(0, 0%, 86%)");
      dayLabel.style.color = "hsl(0, 1%, 44%)";
      dayError.innerHTML = "";
      dayInputValid = true;
    }
  }
  
  function checkMonth() {
    let monthLabel = monthInput.closest(".input-section").querySelector(".input-label");
    let monthError = monthInput.closest(".input-section").querySelector(".error-message");

    if(monthInput.validity.valueMissing) {
      monthInput.style.setProperty("--input-border-color", "hsl(0, 100%, 67%)");
      monthLabel.style.color = "hsl(0, 100%, 67%)";
      monthError.innerHTML = "This field is required";
      monthInputValid = false;
    } else if(monthInputValue == 0) {
      monthInput.style.setProperty("--input-border-color", "hsl(0, 100%, 67%)");
      monthLabel.style.color = "hsl(0, 100%, 67%)";
      monthError.innerHTML = "Must be a valid month";
      monthInputValid = false;
    } else if(monthInputValue > 12) {
      monthInput.style.setProperty("--input-border-color", "hsl(0, 100%, 67%)");
      monthLabel.style.color = "hsl(0, 100%, 67%)";
      monthError.innerHTML = "Must be a valid month";
      monthInputValid = false;
    } else if(yearInputValue >= currentYear) {
      if(monthInputValue > (currentMonth + 1)) {
        monthInput.style.setProperty("--input-border-color", "hsl(0, 100%, 67%)");
        monthLabel.style.color = "hsl(0, 100%, 67%)";
        monthError.innerHTML = "Must be a past month";
        monthInputValid = false;
      } else {
        monthInput.style.setProperty("--input-border-color", "hsl(0, 0%, 86%)");
        monthLabel.style.color = "hsl(0, 1%, 44%)";
        monthError.innerHTML = "";
        monthInputValid = true;
      }
    } else {
      monthInput.style.setProperty("--input-border-color", "hsl(0, 0%, 86%)");
      monthLabel.style.color = "hsl(0, 1%, 44%)";
      monthError.innerHTML = "";
      monthInputValid = true;
    }
  }
  
  function checkYear() {
    let yearLabel = yearInput.closest(".input-section").querySelector(".input-label");
    let yearError = yearInput.closest(".input-section").querySelector(".error-message");

    if(yearInput.validity.valueMissing) {
      yearInput.style.setProperty("--input-border-color", "hsl(0, 100%, 67%)");
      yearLabel.style.color = "hsl(0, 100%, 67%)";
      yearError.innerHTML = "This field is required";
      yearInputValid = false;
    } else if(yearInputValue == 0) {
      yearInput.style.setProperty("--input-border-color", "hsl(0, 100%, 67%)");
      yearLabel.style.color = "hsl(0, 100%, 67%)";
      yearError.innerHTML = "Must be a valid year";
      yearInputValid = false;
    } else if(yearInputValue > currentYear) {
      yearInput.style.setProperty("--input-border-color", "hsl(0, 100%, 67%)");
      yearLabel.style.color = "hsl(0, 100%, 67%)";
      yearError.innerHTML = "Must be in the past";
      yearInputValid = false;
    } else {
      yearInput.style.setProperty("--input-border-color", "hsl(0, 0%, 86%)");
      yearLabel.style.color = "hsl(0, 1%, 44%)";
      yearError.innerHTML = "";
      yearInputValid = true;
    }
  }

  checkLeapYear();
  checkDay();
  checkMonth();
  checkYear();

  if(dayInputValid == true && monthInputValid == true && yearInputValid == true) {
    calculateAge();
  } else {
    console.log("invalid fields");
  }

  function calculateAge() {
    let ageDays;
    let ageYears;
    let ageMonths;

    if(dayInputValue > currentDay) {
      if(monthInputValue == (currentMonth + 1)) {
        ageYears = currentYear - (yearInputValue + 1);
        ageMonths = (12 - monthInputValue) + currentMonth;
      } else if(monthInputValue > (currentMonth + 1)) {
        ageYears = (currentYear - 1) - yearInputValue;
        ageMonths = (12 - monthInputValue) + currentMonth;
      } else {
        ageYears = currentYear - yearInputValue;
        ageMonths = currentMonth - monthInputValue;
      }
      if(monthInputValue == 1 || monthInputValue == 3 || monthInputValue == 5 || monthInputValue == 7 ||
        monthInputValue == 8 || monthInputValue == 10 || monthInputValue == 12) {
        ageDays = (31 - dayInputValue) + currentDay;
      } else if(monthInputValue == 4 || monthInputValue == 6 || monthInputValue == 9 || monthInputValue == 11) {
        ageDays = (30 - dayInputValue) + currentDay;
      } else if(monthInputValue == 2) {
        ageDays = (febLength - dayInputValue) + currentDay;
      }
      console.log("first one was executed");
    } else if(dayInputValue < currentDay) {
      if(monthInputValue > (currentMonth + 1)) {
        ageYears = (currentYear - 1) - yearInputValue;
        ageMonths = (12 - monthInputValue) + (currentMonth + 1);
      } else {
        ageYears = currentYear - yearInputValue;
        ageMonths = (currentMonth + 1) - monthInputValue;
      }
      ageDays = currentDay - dayInputValue;
      console.log("second one was executed");
    } else if(dayInputValue == currentDay) {
      if(monthInputValue == currentMonth + 1) {
        ageYears = currentYear - yearInputValue;
        ageMonths = monthInputValue - (currentMonth + 1);
      } else if(monthInputValue > (currentMonth + 1)) {
        ageYears = currentYear - (yearInputValue + 1);
        ageMonths = (12 - monthInputValue) + (currentMonth + 1);
      } else {
        ageYears = currentYear - yearInputValue;
        ageMonths = (12 - monthInputValue) - currentMonth;
      }
      ageDays = 0;
      console.log("third one was executed");
    }
    yearsDisplay.innerHTML = ageYears;
    monthsDisplay.innerHTML = ageMonths;
    daysDisplay.innerHTML = ageDays;
  }
}