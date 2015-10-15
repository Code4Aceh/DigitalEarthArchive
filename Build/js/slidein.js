$(function(){
var menu = $('#slide_menu'),
	menuBtn = $('#c_place'),
	body = $(document.body),	
	menuWidth = menu.outerWidth();	            
		
	menuBtn.on('click', function(){
	body.toggleClass('open');
		if(body.hasClass('open')){
			menu.animate({'right' : 8 }, 120);
		} else {
			menu.animate({'right' : -200 }, 120);
		}		     
	});
});    

$(function(){
var check = $('#check_bar'),
	checkBtn = $('#menu_check'),
	body = $(document.body),	
	checkWidth = check.outerWidth();	            
		
	checkBtn.on('click', function(){
	body.toggleClass('open');
		if(body.hasClass('open')){
			check.animate({'left' : 8 }, 120);
		} else {
			check.animate({'left' : -400 }, 120);
		}		     
	});
});    

$(function(){
var about = $('#setsumei'),
	aboutBtn = $('#menu_about'),
	body = $(document.body),	
	aboutWidth = about.outerWidth();	            
		
	aboutBtn.on('click', function(){
	body.toggleClass('open');
		if(body.hasClass('open')){
			about.animate({'right' : 8 }, 120);
		} else {
			about.animate({'right' : -1500 }, 120);
		}		     
	});
}); 

/*
$(function(){
var scene = $('#scene_mode'),
	sceneBtn = $('#scene_32c'),
	body = $(document.body),	
	sceneWidth = scene.outerWidth();	            
		
	sceneBtn.on('click', function(){
	body.toggleClass('open');
		if(body.hasClass('open')){
			scene.animate({'right' : 8 }, 120);
		} else {
			scene.animate({'right' : -150 }, 120);
		}		     
	});
});    
*/   