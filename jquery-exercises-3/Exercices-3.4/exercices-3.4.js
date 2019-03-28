

$('.btn_increases').click(function () {
  if ($(".square").height()<100) {
  $('.square').height("+=10"); 
  
} else {
     $('.square').height(10) 
  }
});

$('.btn_green').click(function () {
    $('.square').css('backgroundColor','green');
});

$('.btn_original').click(function () {
    $('.square').css('backgroundColor',"");
});

$('.btn_removes').click(function () {
    $('.square').hide();
});

$('.btn_appears').click(function () {
    $('.square').show();
});

