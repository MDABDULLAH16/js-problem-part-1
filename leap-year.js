function checkLeapYear(year) {
  if (year % 400 === 0) {
    console.log("this is leap year", year);
  } else if (year % 100 === 0) {
    console.log("this is not leap year", year);
  } else if (year % 4 === 0) {
    console.log("this is  leap yer", year);
  } else {
    console.log("this is not leap year");
  }
}

checkLeapYear(2024);
