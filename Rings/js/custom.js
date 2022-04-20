

  $("#bklas").click(function(){
    $("#lux").hide();
    $("#klasikiniai").show();
  });

  $("#blux").click(function(){
    $("#klasikiniai").hide();
    $("#lux").show();
  });

  $('.fullring').mouseover ( function(){
      $(this).find('.shadow').stop().animate({width: '565px'});
      $(this).find('.shadow').stop().css('opacity','0.8');
      $(this).find('.ring').stop().css('bottom','4px');
      $(this).find('.text').stop().css('opacity','0.6');

  } )
  .mouseleave( function(){
      $(this).find('.shadow').stop().animate({width:'530px'});
      $(this).find('.shadow').stop().css('opacity','1');
      $(this).find('.ring').stop().css('bottom','0px');
      $(this).find('.text').stop().css('opacity','0');

  } );

  $("#spec").click(function(){
    const footer=document.querySelector('footer');
    footer.setAttribute('id', 'footer2')
  });
  $('#orig').click(function(){
    const footer=document.querySelector('footer');
    footer.setAttribute('id', 'footer1')
  })
  $("#pimp").click(function(){
    const footer=document.querySelector('footer');
    footer.setAttribute('id', 'footer3')
  })

  // $(this).find('.text').fadeToggle(600);
