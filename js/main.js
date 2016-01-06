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
    
});