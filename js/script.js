$(".navicon").on("click", function(e) {
   e.preventDefault();
   $(this).toggleClass("navicon--active");
   $(".toggle").toggleClass("toggle--active");
});

// $(window).on("resize", checkPosition);
var xsMainLeft3 = $(".section3 .icon-xs-main-left").outerWidth();
var xsMainRight3 = $(".section3 .icon-xs-main-right").outerWidth();
var smMainRight3 = $(".section3 .icon-sm-main-right").outerWidth();

var xsMainLeft5 = $(".section5 .icon-xs-main-left").outerWidth();
var xsMainRight5 = $(".section5 .icon-xs-main-right").outerWidth();
var smMainRight5 = $(".section5 .icon-sm-main-right").outerWidth();

var xsMain6 = $(".section6 .icon-xs-main").outerWidth();
var smMain6 = $(".section6 .icon-sm-main").outerWidth();

$(window).outerWidth(function() {
   if ($(window).outerWidth() < 576) {
      $(".section3 .icon-xs-left").css("width", xsMainLeft3);
      $(".section3 .icon-xs-right").css("width", xsMainRight3);

      $(".section5 .icon-xs-left").css("width", xsMainLeft5);
      $(".section5 .icon-xs-right").css("width", xsMainRight5);

      $(".section6 .icon-xs").css("width", xsMain6);
      console.log(xsMain6);
      console.log("4");
   } else if ($(window).outerWidth() >= 576) {
      $(".section3 .icon-sm-left").css("width", xsMainLeft3);
      $(".section3 .icon-sm-center").css("width", xsMainRight3);
      $(".section3 .icon-sm-right").css("width", smMainRight3);

      $(".section5 .icon-sm-left").css("width", xsMainLeft5);
      $(".section5 .icon-sm-center").css("width", xsMainRight5);
      $(".section5 .icon-sm-right").css("width", smMainRight5);
      console.log(smMain6);
      $(".section6 .icon-sm").css("width", smMain6);
      console.log("5");
   }
});

$(window).resize(function() {
   var xsMain6 = $(".section6 .icon-xs-main").outerWidth();
   var smMain6 = $(".section6 .icon-sm-main").outerWidth();
   // var widthLeftIcon = $(".icon-xs-main").outerWidth();
   if (window.matchMedia("(max-width: 575px)").matches) {
      $(".section3 .icon-xs-left").css("width", xsMainLeft3);
      $(".section3 .icon-xs-right").css("width", xsMainRight3);

      $(".section5 .icon-xs-left").css("width", xsMainLeft5);
      $(".section5 .icon-xs-right").css("width", xsMainRight5);

      // $(".section6 .icon-sm").css("width", "");
      $(".section6 .icon-xs").css("width", xsMain6);
      console.log(xsMain6);

      console.log("1");
   } else if (window.matchMedia("(min-width: 576px)").matches) {
      $(".section3 .icon-xs-left").css("width", "");
      $(".section3 .icon-xs-right").css("width", "");
      $(".section3 .icon-sm-left").css("width", xsMainLeft3);
      $(".section3 .icon-sm-center").css("width", xsMainRight3);
      $(".section3 .icon-sm-right").css("width", smMainRight3);

      $(".section5 .icon-xs-left").css("width", "");
      $(".section5 .icon-xs-right").css("width", "");
      $(".section5 .icon-sm-left").css("width", xsMainLeft5);
      $(".section5 .icon-sm-center").css("width", xsMainRight5);
      $(".section5 .icon-sm-right").css("width", smMainRight5);

      // $(".section6 .icon-xs").css("width", "");
      $(".section6 .icon-sm").css("width", smMain6);
      console.log(smMain6);
      console.log("2");
   }
});

// var widthLeftIco = $(".icon-p-be").outerWidth();
// $(".icon-p-leftico").css("width", widthLeftIco);

// $(".nonloop").owlCarousel({
//    center: true,
//    items: 2,
//    loop: false,
//    margin: 10,
//    responsive: {
//       600: {
//          items: 4
//       }
//    }
// });

$(document).ready(function() {
   $("#lightgallery").lightGallery();
});

// $(document).ready(function() {
//    $("#lightSlider").lightSlider();
// });
$(document).ready(function() {
   $("#lightSlider").lightSlider({
      item: 2,
      loop: true,
      slideMove: 2,
      thumbItem: 10,
      slideMargin: 5,
      galleryMargin: 3,
      // mode: "fade",
      currentPagerPosition: "left",
      // adaptiveHeight: true,
      easing: "cubic-bezier(0.25, 0, 0.25, 1)",
      speed: 500,
      gallery: true,
      thumbMargin: 3,

      responsive: [
         {
            breakpoint: 960,
            settings: {
               item: 2,
               // slideMove: 2,
               thumbItem: 7
            }
         },
         {
            breakpoint: 576,
            settings: {
               item: 1,
               // slideMove: 1,
               thumbItem: 4
            }
         }
      ],
      onSliderLoad: function(el) {
         el.lightGallery({
            selector: "#lightSlider .lslide"
         });
      }
   });
});

var map;
function initMap() {
   var myLatLng = { lat: 47.07024, lng: 1.127979 };

   map = new google.maps.Map(document.getElementById("map"), {
      center: myLatLng,
      zoom: 14,
      mapTypeControl: false,
      styles: [
         {
            elementType: "geometry",
            stylers: [
               {
                  color: "#f5f5f5"
               }
            ]
         },
         {
            elementType: "labels.icon",
            stylers: [
               {
                  visibility: "off"
               }
            ]
         },
         {
            elementType: "labels.text.fill",
            stylers: [
               {
                  color: "#616161"
               }
            ]
         },
         {
            elementType: "labels.text.stroke",
            stylers: [
               {
                  color: "#f5f5f5"
               }
            ]
         },
         {
            featureType: "administrative",
            elementType: "geometry",
            stylers: [
               {
                  visibility: "off"
               }
            ]
         },
         {
            featureType: "administrative.land_parcel",
            elementType: "labels.text.fill",
            stylers: [
               {
                  color: "#bdbdbd"
               }
            ]
         },
         {
            featureType: "poi",
            stylers: [
               {
                  visibility: "off"
               }
            ]
         },
         {
            featureType: "poi",
            elementType: "geometry",
            stylers: [
               {
                  color: "#eeeeee"
               }
            ]
         },
         {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [
               {
                  color: "#757575"
               }
            ]
         },
         {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [
               {
                  color: "#e5e5e5"
               }
            ]
         },
         {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [
               {
                  color: "#9e9e9e"
               }
            ]
         },
         {
            featureType: "road",
            elementType: "geometry",
            stylers: [
               {
                  color: "#ffffff"
               }
            ]
         },
         {
            featureType: "road",
            elementType: "labels.icon",
            stylers: [
               {
                  visibility: "off"
               }
            ]
         },
         {
            featureType: "road.arterial",
            elementType: "labels.text.fill",
            stylers: [
               {
                  color: "#757575"
               }
            ]
         },
         {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [
               {
                  color: "#dadada"
               }
            ]
         },
         {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [
               {
                  color: "#616161"
               }
            ]
         },
         {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [
               {
                  color: "#9e9e9e"
               }
            ]
         },
         {
            featureType: "transit",
            stylers: [
               {
                  visibility: "off"
               }
            ]
         },
         {
            featureType: "transit.line",
            elementType: "geometry",
            stylers: [
               {
                  color: "#e5e5e5"
               }
            ]
         },
         {
            featureType: "transit.station",
            elementType: "geometry",
            stylers: [
               {
                  color: "#eeeeee"
               }
            ]
         },
         {
            featureType: "water",
            elementType: "geometry",
            stylers: [
               {
                  color: "#c9c9c9"
               }
            ]
         },
         {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [
               {
                  color: "#9e9e9e"
               }
            ]
         }
      ]
   });
   var image = {
      url: "../img/marker.png",
      scaledSize: new google.maps.Size(40, 40) // scaled size
   };

   var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: "Hello World!",
      icon: image,
      scale: 1.0
   });
}
// $(window).outerWidth(function() {
//    if ($(window).outerWidth() >= 992) {
//       $(window).scroll(function() {
//          var navTop = $(window).scrollTop();
//          if (navPosition < navTop) {
//             $(".toggle").addClass("fixed");
//          } else {
//             $(".toggle").removeClass("fixed");
//          }
//       });
//    }
// });
// var navPosition = $(".toggle").offset().top;
// $(window).resize(function() {
//    if ($(window).outerWidth() < 992) {
//       $(".toggle").removeClass("fixed");
//       console.log("rf");
//    } else {
//    }
// });
// $(window).scroll(function() {
//    var navTop = $(window).scrollTop();
//    if (navPosition < navTop) {
//       $(".toggle").addClass("fixed");
//    } else {
//       $(".toggle").removeClass("fixed");
//    }
// });
var navPosition = $(".toggle").offset().top;
$(window).scroll(function() {
   var navTop = $(window).scrollTop();

   var x = window.matchMedia("(min-width: 992px)");
   myFunction(x); // Call listener function at run time
   x.addListener(myFunction); // Attach listener function on state changes
   function myFunction(x) {
      if (x.matches) {
         // If media query matches

         console.log("scroll");

         if (navPosition < navTop) {
            $(".toggle").addClass("fixed");
         } else if (navPosition >= navTop) {
            $(".toggle").removeClass("fixed");
            console.log("remove");
         }
      } else {
         console.log("noscroll");
         $(".toggle").removeClass("fixed");
      }
   }
});

var headerHeight = $(".menu").outerHeight();
$(".nav-animate").click(function(e) {
   var linkHref = $(this).attr("href");
   if ($(window).outerWidth() >= 992) {
      $("html, body").animate(
         {
            scrollTop: $(linkHref).offset().top - headerHeight + 11
         },
         1000
      );
   } else {
      $("html, body").animate(
         {
            scrollTop: $(linkHref).offset().top
         },
         1000
      );
   }
   e.preventDefault();
});
var atraction = $(".section5.order-7").outerHeight();
var gallery = $(".lSSlideOuter").outerHeight();
console.log(gallery);
$(window).outerWidth(function() {
   var gallery = $(".lSSlideOuter").outerHeight();
   if (window.matchMedia("(min-width: 1200px)").matches) {
      $(".map").css("height", atraction);
      $(".section6.order-9").css("height", atraction);
      $(".section4.order-5").css("height", gallery);
   }
});
$(window).resize(function() {
   var atraction = $(".section5.order-7").outerHeight();
   var gallery = $(".lSSlideOuter").outerHeight();
   console.log(gallery);
   if ($(window).outerWidth() >= 1200) {
      $(".map").css("height", atraction);
      $(".section6.order-9").css("height", atraction);
      $(".section4.order-5").css("height", gallery);
   } else if ($(window).outerWidth() < 1200) {
      $(".map").css("height", "");
      $(".section6.order-9").css("height", "");
      $(".section4.order-5").css("height", "");
   }
});
