var mdiena = new Date("Jul 31, 2022 08:00:00").getTime();

var x = setInterval(function(){

  var now = new Date().getTime();

  var distance = mdiena - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("timer").innerHTML = days + "  " + hours +"  " + minutes +"  "+ seconds + "  ";

if (distance < 0) {
  clearInterval(x);
  document.getElementById("timer").innerHTML = "EXPIRED";
}
}, 1000);
