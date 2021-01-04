$(document).ready(function() {
	$('.nav__burger').click(function(event) {
        $('.nav__burger,.nav__menu').toggleClass('nav__menu-active');
        //запрет скрола контента при открытом меню
		$('body').toggleClass('lock');
	});
});