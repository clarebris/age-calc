let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let btn = document.getElementById("button");
let error = document.getElementById("invalid");
let form = document.querySelector("form");

let year1 = document.getElementById("year1");
let month1 = document.getElementById("month1");
let day1 = document.getElementById("day1");

let currentDay = new Date().getDate();
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

day.addEventListener("input", (e) => {
  e.preventDefault();
  let valueday = day.value;
  if (valueday >= 1 && valueday <= 31) {
    error.textContent = "";
  } else {
    error.textContent = "Enter a valid day";
  }
});

month.addEventListener("input", (e) => {
  e.preventDefault();
  let valuemonth = month.value;
  if (valuemonth >= 1 && valuemonth <= 12) {
    error.textContent = "";
  } else {
    error.textContent = "Enter a valid month";
  }
});

year.addEventListener("input", (e) => {
  e.preventDefault();
  let valueyear = year.value;

  if (valueyear <= currentYear && valueyear > 0) {
    error.textContent = "";
  } else {
    error.textContent = "Enter a valid year";
  }
});

form.addEventListener("submit", calculate);

// ...

function calculate(e) {
  e.preventDefault();

  // Check if all fields are filled
  if (day.value && month.value && year.value) {
    const dob = new Date(year.value, month.value - 1, day.value);

    // Calculate the age
    const ageInMilliseconds = new Date() - dob;
    const ageDate = new Date(ageInMilliseconds);

    // Extract years, months, and days from the age
    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;

    day1.textContent = days + " days";
    month1.textContent = months + " months";
    year1.textContent = years + " years";
  } else {
    // Provide feedback if any field is missing
    day1.textContent = "";
    month1.textContent = "";
    year1.textContent = "";
    error.textContent = "Please fill in all fields with valid data.";
  }
}
