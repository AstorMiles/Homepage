$(window).load(function() {
  $("body").removeClass("preload");
});

const foldera = document.getElementById("foldera")
const namea = document.getElementById("folderah1")
const background = document.body

 foldera.addEventListener("mouseenter", function () {
  namea.style = "color: #fdfff5"
 })

foldera.addEventListener("mouseleave", function () {
  namea.style.color = "black"
 
})

const folderb = document.getElementById("folderb")
const nameb = document.getElementById("folderbh1")

folderb.addEventListener("mouseenter", function () {
  nameb.style.color = "white"
})

folderb.addEventListener("mouseleave", function () {
  nameb.style.color = "black"
})

const folderc = document.getElementById("folderc")
const namec = document.getElementById("folderch1")

folderc.addEventListener("mouseenter", function () {
  namec.style.color = "white"
})

folderc.addEventListener("mouseleave", function () {
  namec.style.color = "black"
})


