$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

  $('#banner').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:true
        }
    }
})





    $('.counter h3.number').each(function() {
  var num = jQuery(this), 
      countFrom = num.attr("data-from"), 
      countTo = num.attr("data-count"), 
      countIncrement = num.attr("data-increment"), 
      countSpeed = num.attr("data-duration");
  var decimal = 0;
  if (countTo.indexOf(".") > 0) { 
    decimal = countTo.toString().split(".")[1].length; 
  }
  $({ countNum: countFrom }).animate({ countNum: countTo }, {
    duration: parseInt(countSpeed), 
    easing:"swing", 
    step: function() {
      var val = parseFloat(this.countNum);
        num.text((Math.ceil(val/countIncrement)*countIncrement).toFixed(decimal));
    }, complete: function() {
      num.text(this.countNum);
    }
  });
});




$('#our-service').owlCarousel({
  loop:true,
  margin:20,
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:true,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:false
      },
      600:{
          items:1,
          nav:false
      },
      1000:{
          items:4.5,
          nav:false,
          loop:false
      }
  }
})



$('#story').owlCarousel({
  loop:true,
  margin:10,
  dots:true,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:false
      },
      600:{
          items:1,
          nav:false
      },
      1000:{
          items:1,
          dots:true,
          loop:false
      }
  }
})



$('#address-s').owlCarousel({
  loop:true,
  margin:10,
  dots:true,
  nav:true,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:1,
          nav:true
      },
      1000:{
          items:1,
          dots:true,
          loop:false
      }
  }
})


