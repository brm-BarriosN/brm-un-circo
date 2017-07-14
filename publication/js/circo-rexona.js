jQuery(document).ready(function($) {
	 
$('.input input').focusin(function() {
    $(this).parent().find('label').addClass('active');
  }).focusout(function() {
    var self;
    self = $(this);
    if ($(this).val() !== '') {
      self.parent().find('label').addClass('active');
    } else {
      self.parent().find('label').removeClass('active');
    }
});

$('.toogle-menu').click(function(event) {
	event.preventDefault();
	$('.menu').toggleClass('active');
});


 if( $(window).width() > 768 ){

    $('.enviar.home.separador').detach().appendTo('.botones-registro');

 }

});
