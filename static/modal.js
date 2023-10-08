$('.button').click(function(){
  var buttonId = $(this).attr('id');
  $('#modal-container').removeAttr('class').addClass(buttonId);
  $('body').addClass('modal-active');
  //$('body').css("overflow", "hidden");
})

$('#modal-return').click(function(){
  $('#modal-container').addClass('out');
  $('body').removeClass('modal-active');
  $("#modal-data").empty();
});

$('.modal-bg').click(function(){
  $('.modal-bg').addClass('out');
  $('body').removeClass('modal-active');
  $("#modal-data").empty();
});
