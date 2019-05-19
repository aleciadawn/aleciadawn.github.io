// var myElement = document.getElementById('hero');

// window.onscroll = function() {fader()};

// function fader() {
//   var st = window.pageYOffset;
//   myElement.style.opacity = 1 - st/300;
// }



// 			window.onscroll = function() {scrollAnimations()};

// 			function scrollAnimations() {
//         var tBox = document.getElementById('hero');
//         var lBox1 = document.getElementById('about-me-container');
//         var rBox1 = document.getElementById('photo-container');
// 				var ypos = window.pageYOffset;
// 				var wh = window.innerHeight;
//         var pScroll = ypos/wh;

// 				tBox.style.opacity = 1 - pScroll;

// 				var offper = 100 - ( 100 * pScroll);

// 				if( pScroll > 1 ) {
// 					var offper = 0;
// 				}
// 				lBox1.style.transform = "translateX(-" + offper + "%)";
// 				rBox1.style.transform = "translateX(" + offper + "%)";
// 			}



//   $(document).ready(function() {

//   var scrollLink = $('.scroll');

//   // Smooth scrolling //
//   scrollLink.click(function(e) {
//     e.preventDefault();
//     $('body,html').animate({
//       scrollTop: $(this.hash).offset().top
//     }, 1000 );
//   });

//   // Active link switching
//   $(window).scroll(function() {
//     var scrollbarLocation = $(this).scrollTop();

//     scrollLink.each(function() {

//       var sectionOffset = $(this.hash).offset().top - 20;

//       if ( sectionOffset <= scrollbarLocation ) {
//         $(this).parent().addClass('active');
//         $(this).parent().siblings().removeClass('active');
//       }
//     })

//   })

// })
