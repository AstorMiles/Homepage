// var slideIndex = 0;
// function slideshow() {

//   var i;
//   var x = document.getElementsByClassName("test");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > x.length) {slideIndex = 1}
//   x[slideIndex-1].style.display = "block";
//   t = setTimeout(slideshow, 3000);
// }

// THE FIRST SHOW


const pet2 = document.getElementById("pet2")
const about1 = document.getElementById("aboutdemoscreen")
const linebox = document.querySelector("#linebox")


const demo1 = document.getElementById("demoscreen")
pet2.addEventListener("mouseenter", function () {
  demo1.style.opacity = "1"
  about1.style.display = "block"
  linebox.style.opacity="0";
})

pet2.addEventListener("mouseleave", function () {
  demo1.style = ""
  about1.style.display = "none"
  linebox.style.opacity="1";
})


//THE SECOND SHOW


const pet3 = document.getElementById("pet3")
const about2 = document.getElementById("aboutdemoscreen2")

const demo2 = document.getElementById("demoscreen2")
pet3.addEventListener("mouseenter", function () {
  demo2.style.opacity = "1"
  about2.style.display = "block"
  linebox.style.opacity="0";
})

pet3.addEventListener("mouseleave", function () {
  demo2.style = ""
  about2.style.display = "none"
  linebox.style.opacity="1";
})

// THE THIRD SHOW

let pet4 =document.querySelector("#pet4")
let about3 = document.querySelector("#aboutdemoscreen3")


const demo3 = document.getElementById("demoscreen3")
pet4.addEventListener("mouseenter", function () {
  demo3.style.opacity = "1"
  about3.style.display = "block"
  linebox.style.opacity="0";
})

pet4.addEventListener("mouseleave", function () {
  demo3.style = ""
  about3.style.display = "none"
  linebox.style.opacity="1";
})
