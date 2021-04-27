var everyS = window.setInterval(printTime, 60000);

function printTime() {
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time)
}
