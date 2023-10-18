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
let currentMonth = new Date().getMonth() ;
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
  } else  {
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

function calculate(e) {
  e.preventDefault();

  if (day.value && month.value && year.value !== "") {
    const dob=new Date(day.value, month.value - 1, year.value);
   /* const current =new Date()
     let dateMilli =current-dob;
     daydata= Math.floor(dateMilli/(24*60*60*1000))
      monthdata = Math.floor(daydata/30);*/

   let daydata = currentDay - day.value;
   let monthdata = currentMonth - month.value;
   let yeardata = currentYear - year.value;

    /* if (daydata < 0) {
      monthdata -= 1;
      daydata += 30;
    }
   else if (monthdate != 0) {
      yeardate -= 1;
      monthdate += 12;
    
    
  } else {
    error.textContent = "Enter a valid date";
  }*/
    day1.textContent = daydata + "days";
    month1.textContent = 12 - monthdata + "months";
    year1.textContent = yeardata + "years";
  }
} 





