const panels = document.querySelectorAll('.panel')


$(panels).each(function(){
$('.panel').click(function() {

	var clicks = $(this).data('clicks');

	if (clicks) {

	 $(this).addClass('active');
	 removeActiveClasses()

 } else {

	 removeActiveClasses()
	$(this).addClass('active');
 }

 $(this).data('clicks', !clicks);

})
});


function removeActiveClasses(){
panels.forEach(panel =>{
  panel.classList.remove('active')
})

}
