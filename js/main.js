jQuery("document").ready(function($){
	//toggle search form amd hide on click outside
	 $('#search-button').click( function(event){
        event.stopPropagation();
        $('#search-block-form').slideToggle("fast");
        $("#search-block-form").addClass("active");
        $("#search-button").addClass("hidden");
    });
    $(document).mouseup(function (e)
		{
	    var container = $("#search-block-form");
	    if (!container.is(e.target) // if the target of the click isn't the container...
	        && container.has(e.target).length === 0) // ... nor a descendant of the container
	    {
	        container.hide();
	        $("#search-button").removeClass("hidden");
    }});

     // Show more or less events
    $('.events').append('<div class="more-events"><i class="fa fa-angle-down"></i></div>');
    $('.more-events').click(function () {
      if ($('.events > .less-events').length > 0) {
        $('.events li:nth-child(n + 3)').css('display', 'none');
        $(this).removeClass('less-events');
      } else {
        $('.events li:nth-child(n + 3)').css('display', 'block');
        $(this).addClass('less-events');
      }
    });


    $( ".dropdown-toggle-effect" ).click(function() {

    // Toggle
    CurrentBlock = $(this).closest('.effect');
    if(CurrentBlock.hasClass('open')) {
      CurrentBlock.toggleClass('open');

    // Open
    } else {

      // Close Everything Else
      $('.effect').removeClass('open');

      // Open This One
        CurrentBlock.addClass('open');
    }

    });
    
});