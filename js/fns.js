$(document).ready(function(){  	    
    $('.feature-title').click(function() {
        $target =  $(this).parent();
        if($target.hasClass('feature_on')) $target.removeClass('feature_on');
        else $target.addClass('feature_on');
    });
            
    // Carousel 
    $(".carousel-items").jCarouselLite({
        visible: 1,
        start: 0,
        btnNext: ".carousel .i-next",
        btnPrev: ".carousel .i-prev"
    });    
});