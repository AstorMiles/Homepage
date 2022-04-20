
const textspace = document.querySelector("#textspace")

var slideIndex = 0;

function slideshow() {

  var i;
  var x = document.getElementsByClassName("MGplan");
  for (i = 0; i < x.length; i++) {

    x[i].style.opacity = "0";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.opacity = "1";  
  t = setTimeout(slideshow, 2000);
}


const porta = document.getElementById("porta")
const about1 = document.getElementById("aboutdemoscreen")


const demo1 = document.getElementById("demoscreen")

porta.addEventListener("mouseenter", function () {

  demo1.style.visibility = "visible"
  demo1.style.opacity = "1"
  about1.style.display = "block"
  textspace.style="opacity:0"
  slideIndex = 0
  slideshow()
})

porta.addEventListener("mouseleave", function () {

  demo1.style=""
  demo1.style.visibility = "hidden"
  about1.style.display = "none"
  textspace.style="opacity:1"
  slideIndex = -5
  clearInterval(t)
})

function back2Black(){

}


//SECOND SHOW


var slideIndex2 = 0;

function slideshow2() {

  var i2;
  var x2 = document.getElementsByClassName("Rings");
  for (i2 = 0; i2 < x2.length; i2++) {
    x2[i2].style.opacity = "0";
  }
  slideIndex2++;
  if (slideIndex2 > x2.length) {slideIndex2 = 1}
  x2[slideIndex2-1].style.opacity = "1";  
  t2 = setTimeout(slideshow2, 2000);
}

const portb = document.getElementById("portb")
const about2 = document.getElementById("aboutdemoscreen2")

const demo2 = document.getElementById("demoscreen2")
portb.addEventListener("mouseenter", function () {

  demo2.style.visibility = "visible"
  demo2.style.opacity = "1"
  about2.style.display = "block"
  textspace.style="opacity:0"
  slideIndex2 = 0
  slideshow2()
})

portb.addEventListener("mouseleave", function () {

  demo2.style = ""
  demo2.style.visibility = "hidden"
  about2.style.display = "none"
  textspace.style="opacity:1"
  slideIndex2 = -5
  clearInterval(t2)
})


//THIRD SHOW


var slideIndex3 = 0;

function slideshow3() {

  var i3;
  var x3 = document.getElementsByClassName("Marathon");
  for (i3 = 0; i3 < x3.length; i3++) {
    x3[i3].style.opacity = "0";
  }
  slideIndex3++;
  if (slideIndex3 > x3.length) {slideIndex3 = 1}
  x3[slideIndex3-1].style.opacity = "1";  
  t3 = setTimeout(slideshow3, 2000);
}

const portc = document.getElementById("portc")
const about3 = document.getElementById("aboutdemoscreen3")

const demo3 = document.getElementById("demoscreen3")
portc.addEventListener("mouseenter", function () {

  demo3.style.opacity = "1"
  demo3.style.visibility = "visible"
  about3.style.display = "block"
  textspace.style="opacity:0"
  slideIndex3 = 0
  slideshow3()
})

portc.addEventListener("mouseleave", function () {

  demo3.style = ""
  demo3.style.visibility = "hidden"
  about3.style.display = "none"
  textspace.style="opacity:1"
  slideIndex3 = -5
  clearInterval(t3)
})
