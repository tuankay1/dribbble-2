$(document).ready(function() {
	$(".welcome-maine.owl-carousel").owlCarousel({
	  	items: 4,
	  	margin: 30,
	  	loop: true,
          nav: true,
          navText: [
			  "<a class='control'><i class='fa fa-chevron-left owl-prev'></i></a>",
			  "<a class='control'><i class='fa fa-chevron-right owl-next'></i></a>"
			],
	  	dots: false,
	  	autoplay: true,
	  	autoplayTimeout: 5000,
	  	responsive:{
	        0:{
	            items:1,
	        },
	        600:{
	            items:1,
	        },
	        1200:{
	            items:1,
	        }
	    }
	});
	
	$(".test-maine.owl-carousel").owlCarousel({
		items: 4,
		margin: 30,
		loop: true,
		nav: true,
		dots: true,
		autoplay: true,
		autoplayTimeout: 5000,
		responsive:{
		  0:{
			  items:1,
		  },
		  600:{
			  items:1,
		  },
		  1200:{
			  items:1,
		  }
	  }
  });
})

window.setTimeout(loader, 1500);;
function loader(){
	document.getElementById('loader').style.display = 'none';
}