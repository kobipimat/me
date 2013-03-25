		(function($) {
        $(document).ready(function() {
			var rotation = 30; 
			var initrotation = rotation;
			var swingtime = 1603;
			var swings = 100;
			var swingcount = 0; 
			var startatcentre = true;
			
			
			if (startatcentre == true) {
				initrotation = 0;
			}
			
			function init() {
				$('.drop1-parent').animate({rotate: initrotation}, 0, function () {
					$('.drop1-parent').css("display", "block");
					rotation *= -1;
					swingcount++;
					pendulumswing();					
				});
			}
			
			function pendulumswing() {
				$('.drop1-parent').animate({rotate: rotation},swingtime, "swing", function(){
					 rotation *= -1;					 
					 if (swingcount >= swings) {
						pendulumrest();	
					} else {
						swingcount++;
						pendulumswing();						
					}
					
				});
			}	
			
			function pendulumrest() {
				$('.drop1-parent').animate({rotate: 0},(swingtime/1.5), "swing");	
			}
			
			$('#button-stop').click(function(){
				$('.drop1-parent').stop();
			})
			
			init();	
		});
	})(jQuery);