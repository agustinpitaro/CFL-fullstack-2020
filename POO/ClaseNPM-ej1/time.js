let time = require('time-in-words');


let date = new Date;

let minutes = date.getMinutes();
let hour = date.getHours();
if (hour > 12)
  hour = hour - 12;


console.log("The time is "+time(hour, minutes));

