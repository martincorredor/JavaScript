"use strict";
//Coding challenge #1
function print_forecast(arr) {
  if (typeof arr == "number" || typeof arr == "string") {
    console.log(`${arr}°C in 1 days`);
  } else if (typeof arr == "object") {
    for (let i in arr) {
      console.log(`${arr[i]}°C in ${i} days`);
    }
  } else {
    console.log(`Is not a correct value`);
  }
}

const temperatures = [17, 21, 23];
const temp_single = 20;
const not_temp = true;
/*
console.log(typeof temperatures);
if (typeof temperatures == "object") {
  console.log("yes");
}
*/
print_forecast(temperatures);
print_forecast(temp_single);
print_forecast(not_temp);