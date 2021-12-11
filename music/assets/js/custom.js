$(document).ready(function(){

	$(document).on('click','.play',function(){

		var watch = $(this).attr('data-watch'),
			scope = $(this).parents('.intro');

		$(this).remove();
		$(scope).append('<div class="loading" data-watch="nvWsuI5PKZY"></div>');
		window.location.replace("https://youtu.be/"+watch);

	});

	$('.link').attr('target','_blank');
	
});