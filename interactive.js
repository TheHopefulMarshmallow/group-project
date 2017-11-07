/*this will be the countdown bar*/
var countDownDate = new Date("November 1, 2018").getTime();
var days = setInterval (function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   document.getElementById("countDown").innerHTML = days;
   if (distance < 0) {
  clearInterval(x);
  document.getElementById("countDown").innerHTML = "EXPIRED";
}
}, 1000);
/*working on burger bar here*/
