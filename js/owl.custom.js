$(document).ready(function() {

  $("#owl-demo").owlCarousel({

      autoPlay: 2000, //Set AutoPlay to 3 seconds
 	  loop: true,
      items : 5,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      pagination : false,
      stopOnHover : true

  });

});
