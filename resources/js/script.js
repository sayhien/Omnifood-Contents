$(document).ready(function () {
    
    /* navigation   navigation   navigation */
    
    $('.js-section-start').waypoint(function(direction){
        if(direction=='down'){
            $('nav').addClass('sticky');
        }else{
                $('nav').removeClass('sticky');
        }
        
    }, {
  offset: '50px;'
    
});
    
    /* links   links   links */
    
    
    $('.btn-signup').click(function(){
        $('html,body').animate({scrollTop: $('.js-section-signup').offset().top}, 1000);
    });
    
    $('.btn-start').click(function(){
        $('html,body').animate({scrollTop: $('.js-section-start').offset().top}, 1000);
    });
    
    $('#features').click(function(){
        $('html,body').animate({scrollTop: $('.section-start').offset().top}, 1000);
    });
    
  
    /* links-driver   links-driver   links-driver */
    
    
    $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
    
    /* link transition   link transition  */
    
    $('.js-wp-1').waypoint(function(direction){
        $('.js-wp-1').addClass('animated fadeIn');
    },{
        offset:'60%;'
    })
    
    $('.js-wp-2').waypoint(function(direction){
        $('.js-wp-2').addClass('animated fadeInUp');
    },{
        offset:'70%;'
    })
    
    $('.js-wp-3').waypoint(function(direction){
        $('.js-wp-3').addClass('animated fadeIn');
    },{
        offset:'70%;'
    })
    
    $('.js-wp-4').waypoint(function(direction){
        $('.js-wp-4').addClass('animated tada');
    },{
        offset:'70%;'
    })
    

/* mobile menu expansion  mobile menu expansion */
    
    
    $('.js-mobile-nav-icon').click(function(){
        var nav = $('.js-main-nav');
        var navIcon = $('.js-mobile-nav-icon i')
        nav.slideToggle(200);
        
        if(navIcon.hasClass('ion-navicon-round')){
            navIcon.addClass('ion-close-round');
            navIcon.removeClass('ion-navicon-round');
        }else{
            navIcon.addClass('ion-navicon-round');
            navIcon.removeClass('ion-close-round');
        }
        
        
        
    })
    
    
}); /* end document */




/*var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window') 
}, {
  offset: '25%'
})*/