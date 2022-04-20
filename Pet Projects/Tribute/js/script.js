const s1 = document.getElementById("s1")
const s2 = document.getElementById("s2")
const s3 = document.getElementById("s3")

const s4 = document.getElementById("s4")
const s5 = document.getElementById("s5")
const s6 = document.getElementById("s6")

const s7 = document.getElementById("s7")
const s8 = document.getElementById("s8")
const s9 = document.getElementById("s9")

const trig5 = document.getElementById("trigfaiv")

const squares = document.querySelectorAll('.square')
let klikpik = false
let klikpik2 = false
let klikpik3 = false

// s1.addEventListener("click",()=>{

// })

$('#s1').click(function() {

   if (klikpik===false) { 
 
      $(".square:not(#s1)").removeAttr('style');
      $(this).css('z-index','3');
      $(this).css("opacity", "1");
      $("#s2").css("opacity", "0");
      $("#s6").css("opacity", "0");
      $("#s7").css({"opacity": "0"}); 
      $('#s1').css('box-shadow', '1px 1px 18px 4px rgba(33,128,222,1)');
      $(this).css("transform", "scale(2.05");
      $(this).css("background-size", "100%");
      $("#s1").css({"grid-row": "1/3"});
      $("#s1").css({"grid-column": "1/3"});
      $(this).css("filter","sepia(0)");
      klikpik = true 
 
 
   } else if(klikpik === true ) {
      $(".square:not(#s1)").removeAttr('style');

 
      $("#s2").css("opacity", "1");
      $("#s6").css("opacity", "1");
      $("#s7").css({"opacity": "1"}); 
      $(this).removeAttr('style');
                 $("#s2").css({"z-index": "1"});
                 $("#s6").css({"z-index": "1"});
                 $("#s7").css({"z-index": "1"});

                 klikpik = false 
   }
  
 });




$('#s2').click(function() {
   if (klikpik2===false) { 

     $(".square:not(#s2)").removeAttr('style');
     $(this).css('z-index','3');
     $(this).css("opacity", "1");
     $("#s3").css("opacity", "0");
     $("#s7").css("opacity", "0");
     $("#s8").css({"opacity": "0"});
     $(this).css("background-size", "200%");
     $(this).css("background-position", "40% 50%");
     $('#s2').css('box-shadow', '1px 1px 18px 4px rgba(33,128,222,1)');
     $(this).css("transform", "scale(2.05");
     $("#s2").css({"grid-row": "1/3"});
     $("#s2").css({"grid-column": "2/4"});
     $(this).css("filter","sepia(0)");
     klikpik2 = true 


   } else if(klikpik2 === true ) {

      $(".square:not(#s2)").removeAttr('style');
  

                $("#s3").css("opacity", "1");
                $("#s7").css("opacity", "1");
                $("#s8").css({"opacity": "1"});
                $(this).css({"z-index": "2"});
                $("#s3").css({"z-index": "1"});
                $("#s5").css({"z-index": "1"});
                $("#s6").css({"z-index": "1"});
                $(this).removeAttr('style');
                klikpik2 = false 

  }

});


$('#s3').click(function() {
   if (klikpik3===false) { 


     $(".square:not(#s3)").removeAttr('style');
     $(this).css('z-index','3');
     $(this).css("opacity", "1");
     $(this).css("transform", "scale(2.05");
     $(this).css("background-position", "30% 20%");

     $("#s2").css("opacity", "0");
     $("#s7").css("opacity", "0");
     $("#s8").css({"opacity": "0"});
     $('#s3').css('box-shadow', '1px 1px 18px 4px rgba(33,128,222,1)');
     $("#s3").css({"grid-row": "1/3"});
     $("#s3").css({"grid-column": "2/4"});
     $(this).css("filter","sepia(0)");

     klikpik3=true


   } else if(klikpik3===true) {

     $(".square:not(#s3)").removeAttr('style');

                $("#s2").css("opacity", "1");
                $("#s7").css("opacity", "1");
                $("#s8").css({"opacity": "1"});
                $(this).removeAttr('style');                       
                klikpik3=false;
  }
  
 
});



$('#s4').click(function() {
  var clicks = $(this).data('clicks');
  if (!clicks) {
     // odd clicks

     $(".square:not(#s4)").removeAttr('style');
     $(this).css('z-index','3');
     $(this).css("opacity", "1");
     $(this).css("background-size", "180%");
     $(this).css("background-position", "30% 50%");
     $("#s3").css("opacity", "0");
     $("#s8").css("opacity", "0");
     $("#s9").css({"opacity": "0"});
     $('#s4').css('box-shadow', '1px 1px 18px 4px rgba(33,128,222,1)');
     $(this).css("transform", "scale(2.05");
     $("#s4").css({"grid-row": "1/3"});
     $("#s4").css({"grid-column": "-2/-4"});
     $(this).css("filter","sepia(0)");



  } else {
     // even clicks

                $("#s3").css("opacity", "1");
                $("#s8").css("opacity", "1");
                $("#s9").css({"opacity": "1"});
                $("#s4").css({"z-index": "2"});
                $("#s3").css({"z-index": "1"});
                $("#s8").css({"z-index": "1"});
                $("#s9").css({"z-index": "1"});
                $("#s5").css({"z-index": "1"});
                $("#s10").css({"z-index": "1"});
                $(this).removeAttr('style');
  }
  $(this).data('clicks', !clicks);
});



$('#s5').click(function() {
  var clicks = $(this).data('clicks');
  if (!clicks) {
     // odd clicks

     $(".square:not(#s5)").removeAttr('style');
     $(this).css('z-index','3');
     $(this).css("opacity", "1");
     $("#s4").css("opacity", "0");
     $("#s9").css("opacity", "0");
     $("#s10").css({"opacity": "0"});
     $('#s5').css('box-shadow', '1px 1px 18px 4px rgba(33,128,222,1)');
     $(this).css("transform", "scale(2.05");
     $("#s5").css({"grid-row": "-3/-1"});
     $("#s5").css({"grid-column": "5/6"});
     $(this).css("background-position", "25% 50%");
     $(this).css("filter","sepia(0)");


  } else {
     // even clicks

                $("#s4").css({"opacity": "1"});
                $("#s9").css({"opacity": "1"});
                $("#s10").css({"opacity": "1"});                

                $(this).css({"z-index": "2"});
                $("#s4").css({"z-index": "1"});
                $("#s9").css({"z-index": "1"});
                $("#s10").css({"z-index": "1"});
                $(this).removeAttr('style');
  }
  $(this).data('clicks', !clicks);
});



$('#s6').click(function() {
  var clicks = $(this).data('clicks');
  if (!clicks) {
     // odd clicks

     $(".square:not(#s6)").removeAttr('style');
     $(this).css('z-index','3');
     $(this).css("opacity", "1");
     $("#s1").css("opacity", "0");
     $("#s2").css("opacity", "0");
     $("#s7").css({"opacity": "0"});
     $('#s6').css('box-shadow', '1px 1px 18px 4px rgba(33,128,222,1)');
     $(this).css("transform", "scale(2.05");
     $("#s6").css({"grid-row": "1/3"});
     $("#s6").css({"grid-column": "1/3"});
     $(this).css('background-size',"120%");
     $(this).css('background-position',"50% 50%"); 
     $(this).css("filter","sepia(0)");    


  } else {
     // even clicks
     $(".square:not(#s6)").removeAttr('style');

                $("#s1").css("opacity", "1");
                $("#s2").css("opacity", "1");
                $("#s7").css({"opacity": "1"});
                $(this).css({"z-index": "2"});
                $("#s1").css({"z-index": "1"});
                $("#s2").css({"z-index": "1"});
                $("#s7").css({"z-index": "1"});
                $(this).removeAttr('style');
  }
  $(this).data('clicks', !clicks);
});



$('#s7').click(function() {
  var clicks = $(this).data('clicks');
  if (!clicks) {
     // odd clicks

     $(".square:not(#s7)").removeAttr('style');
     $(this).css('z-index','3');
     $(this).css("opacity", "1");
     $("#s1").css("opacity", "0");
     $("#s2").css("opacity", "0");
     $("#s6").css({"opacity": "0"});
     $('#s7').css('box-shadow', '1px 1px 18px 4px rgba(33,128,222,1)');
     $(this).css("transform", "scale(2.05");
     $("#s7").css({"grid-row": "1/3"});
     $("#s7").css({"grid-column": "1/3"});
     $(this).css('background-size',"250%");
     $(this).css('background-position',"60% 50%");    
     $(this).css("filter","sepia(0)");




  } else {
     // even clicks

                $("#s1").css("opacity", "1");
                $("#s2").css("opacity", "1");
                $("#s6").css({"opacity": "1"});
                $(this).css({"z-index": "2"});
                $("#s4").css({"z-index": "1"});
                $("#s5").css({"z-index": "1"});
                $("#s8").css({"z-index": "1"});

                $(this).removeAttr('style');

  }
  $(this).data('clicks', !clicks);
});




$('#s8').click(function() {
  var clicks = $(this).data('clicks');
  if (!clicks) {
     // odd clicks

     $(".square:not(#s8)").removeAttr('style');
     $(this).css('z-index','3');
     $(this).css("opacity", "1");

     $("#s2").css("opacity", "0");
     $("#s3").css("opacity", "0");
     $("#s7").css({"opacity": "0"});
     $('#s8').css('box-shadow', '1px 1px 18px 4px rgba(33,128,222,1)');
     $(this).css("transform", "scale(2.05");
     $("#s8").css({"grid-row": "1/4"});
     $("#s8").css({"grid-column": "2/4"});
     $(this).css('background-size',"200%");
     $(this).css('background-position',"40% 72%");  
     $(this).css("filter","sepia(0)");  



  } else {
     // even clicks

                $("#s2").css("opacity", "1");
                $("#s3").css("opacity", "1");
                $("#s7").css({"opacity": "1"});

                $(this).css({"z-index": "2"});
                $("#s2").css({"z-index": "1"});
                $("#s3").css({"z-index": "1"});
                $("#s7").css({"z-index": "1"});
                $("#s9").css({"z-index": "1"});

                $(this).removeAttr('style');
  }
  $(this).data('clicks', !clicks);
});



$('#s9').click(function() {
  var clicks = $(this).data('clicks');
  if (!clicks) {
     // odd clicks

     $(".square:not(#s9)").removeAttr('style');
     $(this).css('z-index','3');
     $(this).css("opacity", "1");
     $("#s4").css("opacity", "0");
     $("#s5").css("opacity", "0");
     $("#s10").css({"opacity": "0"});
     $('#s9').css('box-shadow', '1px 1px 18px 4px rgba(33,128,222,1)');
     $(this).css("transform", "scale(2.05");
     $("#s9").css({"grid-row": "1/3"});
     $("#s9").css({"grid-column": "-1/-3"});

     $(this).css('background-size',"280%");
     $(this).css('background-position',"40% 50%");
     $(this).css("filter","sepia(0)");

  } else {
     // even clicks

                $("#s4").css("opacity", "1");
                $("#s5").css("opacity", "1");
                $("#s10").css({"opacity": "1"});       

                $(this).css({"z-index": "2"});
                $("#s4").css({"z-index": "1"});
                $("#s5").css({"z-index": "1"});
                $("#s10").css({"z-index": "1"});

                $(this).removeAttr('style');

  }
  $(this).data('clicks', !clicks);
});

$('#s10').click(function() {
   var clicks = $(this).data('clicks');
   if (!clicks) {
      // odd clicks
 
      $(".square:not(#s10)").removeAttr('style');
      $(this).css('z-index','3');
      $(this).css("opacity", "1");
      $("#s4").css("opacity", "0");
      $("#s5").css("opacity", "0");
      $("#s9").css("opacity", "0");
      $(this).css('box-shadow', '1px 1px 18px 4px rgba(33,128,222,1)');
      $(this).css("transform", "scale(2.05");
      $("#s10").css({"grid-row": "1/3"});
      $("#s10").css({"grid-column": "-1/-3"});
 
      $(this).css('background-size',"230%");
      $(this).css('background-position',"40% 45%");
      $(this).css("filter","sepia(0)");
 
   } else {
      // even clicks
 
                 $("#s4").css("opacity", "1");
                 $("#s5").css("opacity", "1");
                 $("#s9").css("opacity", "1"); 
                 $(this).css({"z-index": "2"});
                 $("#s4").css({"z-index": "1"});
                 $("#s5").css({"z-index": "1"});
                 $("#s9").css({"z-index": "1"});
 
                 $(this).removeAttr('style');
 
   }
   $(this).data('clicks', !clicks);
 });
