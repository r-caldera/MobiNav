(function($){
	$.fn.extend({ 
		mobiNav: function(options) {
/***********************************************
			Default Options
***********************************************/ 
			var defaults = {
                breakpoint: 0,
				position: 'top',
				theme: 'light',
            };
            var options = $.extend(defaults, options);
			return this.each(function() {
				var o = options;
				subNav_bind=false;
					$(window).bind('load resize', function(){
/***********************************************
			Menu Resets
***********************************************/ 						
						$('nav#mobiNav>ul li').unbind('mouseenter mouseleave click');
						$('nav#mobiNav .subNav').unbind('click').remove();
/***********************************************
			Stylesheet Call
***********************************************/ 
						if($(window).width()<= o.breakpoint && 
						($('link[rel*=style][href="css/mobinav.css"]').length==0)){
							$('<link rel="stylesheet" href="css/mobinav.css" type="text/css" />').appendTo('head');
							$('link[href="css/standardNav.css"]').remove();
							
							if (o.position=='top'){
								$('body').css('margin-top','50px');
							}
						}
						else if($(window).width() > o.breakpoint && 
						($('link[rel*=style][href="css/mobinav.css"]').length!=0)){ //Full mode
							$('link[href="css/mobinav.css"]').remove();
							$('<link rel="stylesheet" href="css/standardNav.css" type="text/css" />').appendTo('head');
							
							
								
							if (o.position=='top'){
								$('body').css('margin-top','0px');
							}	
						}
					if($(window).width()<= o.breakpoint){
							$('nav#mobiNav>ul').hide();
/***********************************************
			Theming and Styling
***********************************************/ 
						if($('nav#mobiNav>a.mobiNav_handle').length==0){
							$('nav#mobiNav').wrap('<div class="navWrap"/>');
							//Position
							if (o.position=='bottom'){
								$('nav#mobiNav').prepend('<a class="mobiNav_handle">Menu</a>');
								$('.navWrap').addClass('bottom'); 
							}
							else if (o.position=='top'){
								$('<a class="mobiNav_handle">Menu</a>').appendTo('nav#mobiNav');
								$('.navWrap').addClass('top'); 
							}													
							//Theming
							if (o.theme=='light'){ //Light theme
									$('nav#mobiNav ul li').addClass('light'); 
								}
							else if (o.theme=='dark'){ //Dark theme
									$('nav#mobiNav ul li').addClass('dark'); 
								}
							}    
							// Mobile handle toggle
							$('nav#mobiNav>a.mobiNav_handle').unbind('click');
							$('nav#mobiNav>a.mobiNav_handle').click(function(e){ 
							$('nav#mobiNav>ul').slideToggle(300); 
							e.preventDefault();
						});					
						if($('.subNav').length==0){// Adds arrows to subnav
							$('nav#mobiNav ul li').each(function(){
								if($(this).children('ul').length>0){ 
									$('<a class="subNav"><div class="arrowDown"></div></a>').appendTo(this); 
								}
							});
						}
						if(subNav_bind==false){ // Sub-Nav             
							$('nav#mobiNav>ul').delegate('.subNav', 'click', function(e) {
								$(this).siblings('ul').slideToggle(300);               
								if ($(this).children('div').hasClass('arrowDown')){
									$(this).children('div').attr('class', 'arrowUp');
								}else{
									$(this).children('div').attr('class', 'arrowDown');
								}
							});
							subNav_bind = true;
						}             
					}
					else {				
						$('nav#mobiNav>ul').show(); $('nav#mobiNav ul ul').hide();
					}
				});
				  
            });
        }
	});
})( jQuery );