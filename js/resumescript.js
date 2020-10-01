
/*Butonun scrollda gelip gitmesini sağlıyor*/ 
$(window).scroll(function() {
  if ($(this).scrollTop() > 150 && $(this).scrollTop() < 250){
      $(".fixed-bottom").css('visibility', 'visible');
  
  }
  else if ($(this).scrollTop() <=0){
    $(".fixed-bottom").css('visibility', 'hidden');}
  });


