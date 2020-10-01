

/*Modallar kapanınca videoların kapanmasını,sesin kesilmesini sağlıyor. */

  $('.modal').on('hide.bs.modal', function() {
  var memory = $(this).html();
  $(this).html(memory);})
/* *********** */
/* Scrollda fadein efekti*/
$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");}});});



