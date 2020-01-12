





function adjustImage()
{
	content_height = ($(window).height()-$('#header').height())
$(".center-fit").css('max-height',(content_height-30).toString().concat("px"));
$(".center-fit").css('margin-top',"15px")
}

adjustImage()
$(window).on('resize',adjustImage )


