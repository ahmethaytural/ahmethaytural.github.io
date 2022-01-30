$(document).ready(function(){

	$(document).on('click','.play',function(){
/*
		var watch = $(this).attr('data-watch'),
			scope = $(this).parents('.intro');

		$(this).remove();
		$(scope).append('<div class="loading" data-watch="nvWsuI5PKZY"></div>');
		window.location.replace("https://youtu.be/"+watch);*/

		var watch = $(this).attr('data-watch'),
			scope = $(this).parents('.intro');

			$(this).parent('.intro').html('<iframe width="450" height="253" src="https://www.youtube.com/embed/'+watch+'" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

	});

	$('.link').attr('target','_blank');

});