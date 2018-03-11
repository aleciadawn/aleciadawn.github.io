var myElement = document.getElementById('hero-content');

window.onscroll = function() {fader()};

function fader() {
  var st = window.pageYOffset;
  myElement.style.opacity = 1 - st/300;
}



			// window.onscroll = function() {scrollAnimations()};
      //
			// function scrollAnimations() {
      //   var tBox = document.getElementById('hero-content');
      //   var lBox1 = document.getElementById('about-me-container');
      //   var rBox1 = document.getElementById('photo-container');
			// 	var ypos = window.pageYOffset;
			// 	var wh = window.innerHeight;
      //   var pScroll = ypos/wh;
      //
			// 	tBox.style.opacity = 1 - pScroll;
      //
			// 	var offper = 100 - ( 100 * pScroll);
      //
			// 	if( pScroll > 1 ) {
			// 		var offper = 0;
			// 	}
			// 	lBox1.style.transform = "translateX(-" + offper + "%)";
			// 	rBox1.style.transform = "translateX(" + offper + "%)";
			// }
