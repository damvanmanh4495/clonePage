$(document).ready(function(){
    $(window).scroll(function () { 
        console.log("da scroll");
        console.log($("html").scrollTop());
        if($("html").scrollTop() >= 1700){
            $(".left_discount").animate({left:"0", opacity:1}, "slow");
            $(".right_discount").animate({right:"0", opacity:1}, "slow");
        } 

    });
    
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('.back_to_top').fadeIn();; 
        } else { 
            $('.back_to_top').fadeOut(); 
        } 
    }); 
    $('.back_to_top').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
})