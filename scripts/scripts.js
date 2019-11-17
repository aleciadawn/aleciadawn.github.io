// $(window).scroll(function() {
//
//   // selectors
//   var $window = $(window),
//       $body = $('body'),
//       $panel = $('.panel');
//
//   // Change 33% earlier than scroll position so colour is there when you arrive.
//   var scroll = $window.scrollTop() + ($window.height() / 3);
//
//   $panel.each(function () {
//     var $this = $(this);
//
//     // if position is within range of this panel.
//     // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
//     // Remember we set the scroll to 33% earlier in scroll var.
//     if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
//
//       // Remove all classes on body with color-
//       $body.removeClass(function (index, css) {
//         return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
//       });
//
//       // Add class of currently active div
//       $body.addClass('color-' + $(this).data('color'));
//     }
//   });
//
// }).scroll();
//
//


class SmoothScroll {
    constructor(_containerSelector, _params) {

      // Init DOM elements
      this.$ = {
        container: document.querySelector(_containerSelector),
        containerBody: document.querySelector(_containerSelector + '__body'),
        hitbox: document.querySelector(_containerSelector + '--hitbox'),
        duration: document.querySelector('.controls__duration'),
      }

      console.log(this.$.controlsEasing)

      // Init params
      this.params = {
        containerHeight: this.$.containerBody.offsetHeight,
        duration: _params.duration,
        timingFunction: _params.timingFunction,
      }

      // Launch init functions
      document.addEventListener('DOMContentLoaded', () => {
        this._initStyle()
        this._initListeners()
      })
    }

    _initStyle() {

      const currentScrollY = window.scrollY

       this.$.container.style.height = `100vh`

      // Set containerBody style
      this.$.containerBody.style.transform = `translateY(${-window.scrollY}px)` // Scroll to current scroll

      // Add transtion after scroll to
      const addTransition = () => {
        // Set currentTranslateY
        const regex = /\s?([,])\s?/
        const splitTransform = getComputedStyle(this.$.containerBody).transform.split(regex)
        const currentTranslateY = parseInt(splitTransform[splitTransform.length-1])

        if(-currentTranslateY != currentScrollY) {
          setTimeout(() => {
            addTransition(currentTranslateY)
          }, 10);
        } else {
          // Add transition
          this.$.containerBody.style.transition = `transform ${this.params.duration}ms ${this.params.timingFunction}`
        }
      }

      // Run addTranstion
      addTransition()



    }

    _initListeners() {

      window.addEventListener('scroll', (event) => { this._handleScroll(event) })
      window.addEventListener('resize', () => { this._handleResize() })

    }

    _handleScroll(_event) {

      this.$.containerBody.style.transform = `translateY(${-window.scrollY}px)`
    }

    _handleResize() {
      // Update usefull params
      this.params.containerHeight = this.$.containerBody.offsetHeight

    ß
    }

  }

  const params = {
    duration: 1000,
    timingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)'
  }

  new SmoothScroll('.smoothscroll', params)
