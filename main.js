$( document ).ready(function() {

	$(".burger-button").click(function(){
		$(".burger-button").toggleClass("active");
		$(".mobile-menu").fadeToggle(100);
		$("this").toggleClass('active');
	});     
	  

	$(".juli-zip").click(function() {
		var password = prompt('Enter the password to download the file:');
		if(password.toLowerCase() == "test"){
		window.open("downloads/juli-2023.zip")    
		}else{
		alert("incorrect password!! please try again");
		}
	});

	$(".august-zip").click(function() {
		var password = prompt('Enter the password to download the file:');
		if(password.toLowerCase() == "teacher"){
		window.open("downloads/juli-2023.zip")    
		}else{
		alert("incorrect password!! please try again");
		}
	});
	  

});








//  Image Lazy loading
document.addEventListener("DOMContentLoaded", function() {
	var lazyloadImages;
  
	if ("IntersectionObserver" in window) {
	  lazyloadImages = document.querySelectorAll(".lazy");
	  var imageObserver = new IntersectionObserver(function(entries, observer) {
		entries.forEach(function(entry) {
		  if (entry.isIntersecting) {
			var image = entry.target;
			image.src = image.dataset.src;
			image.classList.remove("lazy");
			imageObserver.unobserve(image);
		  }
		});
	  });
  
	  lazyloadImages.forEach(function(image) {
		imageObserver.observe(image);
	  });
	} else {
	  var lazyloadThrottleTimeout;
	  lazyloadImages = document.querySelectorAll(".lazy");
  
	  function lazyload () {
		if(lazyloadThrottleTimeout) {
		  clearTimeout(lazyloadThrottleTimeout);
		}
  
		lazyloadThrottleTimeout = setTimeout(function() {
		  var scrollTop = window.pageYOffset;
		  lazyloadImages.forEach(function(img) {
			  if(img.offsetTop < (window.innerHeight + scrollTop)) {
				img.src = img.dataset.src;
				img.classList.remove('lazy');
			  }
		  });
		  if(lazyloadImages.length == 0) {
			document.removeEventListener("scroll", lazyload);
			window.removeEventListener("resize", lazyload);
			window.removeEventListener("orientationChange", lazyload);
		  }
		}, 20);
	  }
  
	  document.addEventListener("scroll", lazyload);
	  window.addEventListener("resize", lazyload);
	  window.addEventListener("orientationChange", lazyload);
	}
  })
  
  // Background image lazy load
  document.addEventListener("DOMContentLoaded", function() {
	var lazyloadImages;
  
	if ("IntersectionObserver" in window) {
	  lazyloadImages = document.querySelectorAll(".lazy");
	  var imageObserver = new IntersectionObserver(function(entries, observer) {
		entries.forEach(function(entry) {
		  if (entry.isIntersecting) {
			var image = entry.target;
			image.classList.remove("lazy");
			imageObserver.unobserve(image);
		  }
		});
	  });
  
	  lazyloadImages.forEach(function(image) {
		imageObserver.observe(image);
	  });
	} else {
	  var lazyloadThrottleTimeout;
	  lazyloadImages = document.querySelectorAll(".lazy");
  
	  function lazyload () {
		if(lazyloadThrottleTimeout) {
		  clearTimeout(lazyloadThrottleTimeout);
		}
  
		lazyloadThrottleTimeout = setTimeout(function() {
		  var scrollTop = window.pageYOffset;
		  lazyloadImages.forEach(function(img) {
			  if(img.offsetTop < (window.innerHeight + scrollTop)) {
				img.src = img.dataset.src;
				img.classList.remove('lazy');
			  }
		  });
		  if(lazyloadImages.length == 0) {
			document.removeEventListener("scroll", lazyload);
			window.removeEventListener("resize", lazyload);
			window.removeEventListener("orientationChange", lazyload);
		  }
		}, 20);
	  }
  
	  document.addEventListener("scroll", lazyload);
	  window.addEventListener("resize", lazyload);
	  window.addEventListener("orientationChange", lazyload);
	}
  })