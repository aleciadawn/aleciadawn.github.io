
var myElement = document.getElementById('hero-content');

window.onscroll = function() {fader()};

function fader() {
  var st = document.body.scrollTop;
  console.log(st);
  myElement.style.opacity = 1 - st/300;
}

      var tBox = document.getElementById('hero-content');
			var lBox1 = document.getElementById('about-me-container');
			var rBox1 = document.getElementById('photo-container');

			window.onscroll = function() {scrollAnimations()};

			function scrollAnimations() {
				var ypos = document.body.scrollTop;
				var wh = window.innerHeight;

				var pScroll = ypos/wh;
				tBox.style.opacity = 1 - pScroll;

				var offper = 100 - ( 100 * pScroll);

				if( pScroll > 1 ) {
					var offper = 0;
				}
				lBox1.style.transform = "translateX(-" + offper + "%)";
				rBox1.style.transform = "translateX(" + offper + "%)";
			}
