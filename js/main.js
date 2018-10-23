//Media Query listener for max screen size of 575.98px
var c = window.matchMedia("(max-width: 575.98px)")

//Media Query listener for min screen size of 576px
var b = window.matchMedia("(min-width: 576px) and (orientation: portrait)")


//Media Query listener for min screen size of 768px
var a = window.matchMedia("(min-width: 768px) ")

var ab = window.matchMedia("(min-width: 768px) and (orientation: portrait)")

var ac = window.matchMedia("(min-height: 780px)")

//Media Query listener for min screen size of 1200px
var y = window.matchMedia("(min-width: 1200px)")

//Media Query listener for min screen size of 1440px
var x = window.matchMedia("(min-width: 1440px)")

$('.js-tilt').tilt({
  scale: 1.1
})

if(x.matches){
  /* Line Draw with Animejs for Kubaki logo*/

  var relativeOffset = anime.timeline();

  relativeOffset
    .add({
      targets: '.kb-wrapper .lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: true
    })
    .add({
      targets: '.morph-bx1',
      opacity: 1,
      duration: 1000,
      easing: 'easeOutExpo',
      offset: '-=600' // Starts 600ms before the previous animation ends
    })
    .add({
      targets: '.morph-bx1',
      translateY: '-25%',
      easing: 'easeOutQuad',
      duration: 1000,
      offset: '-=400' // Starts 800ms before the previous animation ends
    }).add({
      targets: '.kb-wrapper',
      translateY: '-25%', 
      duration: 2000,
      offset: '-=600'
    }).
    add({
      targets: '.kb-wrapper',
      opacity: 0,
      duration: 2000,
      offset: '-=1200'
    })
    .add({
      targets: '.pr-wrapper',
      opacity: 1,
      duration: 3000,
      offset: '-=600'
    })
    .add({
      targets: '.morph-bx1 ',
      translateY: '25%', 
      easing: 'easeOutQuad',
      duration: 2000,
      offset: '-=680'
    })
    .add({
        targets: '.morph-bx1 ',
        translateY: 0,
        translateX: '5%',
        easing: 'easeOutQuad',
        duration: 2000,
        offset: '-=0'
    })
    .add({
      targets: '.pr-wrapper',
      translateY: '25%',
      duration: 1200,
      easing: 'easeOutQuad',
      offset: '-=780'
    })
    .add({
      targets: '.pr-wrapper',
      opacity: 0,
      duration: 1200,
      easing: 'easeOutQuad',
      offset: '-=800'
    })
    .add({
      targets: '.cm-wrapper',
      opacity: 1,
      duration: 2000,
      offset: '-=600'
    })
    .add({
      targets: '.cm-wrapper',
      opacity: 0,
      duration: 1000,
      offset: '-=600'
    })
    .add({
      targets: '.img-wrapper',
      opacity: 1,
      duration: 1000,
      offset: '-=600'
    })
    .add({
      targets: '.img-wrapper',
      translateX: '-28rem',
      duration: 1000,
      offset: '-=600'
    })
    .add({
      targets: '.ds-wrapper',
      translateX: '45rem',
      translateY: '10rem',
      easing: 'easeOutQuad',
      opacity: 1,
      duration: 1000,
      offset: '-=400'
    })

}
else if(y.matches){
  /* Line Draw with Animejs for Kubaki logo*/
  
  var relativeOffset = anime.timeline();

  relativeOffset
    .add({
      targets: '.kb-wrapper .lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: true
    })
    .add({
      targets: '.morph-bx1',
      opacity: 1,
      duration: 1000,
      easing: 'easeOutExpo',
      offset: '-=600' 
    })
    .add({
      targets: '.morph-bx1',
      translateY: '-25%',
      easing: 'easeOutQuad',
      duration: 1000,
      offset: '-=400' 
    }).add({
      targets: '.kb-wrapper',
      translateY: '-25%', 
      duration: 2000,
      offset: '-=600'
    }).
    add({
      targets: '.kb-wrapper',
      opacity: 0,
      duration: 2000,
      offset: '-=1200'
    })
    .add({
      targets: '.pr-wrapper',
      opacity: 1,
      duration: 3000,
      offset: '-=600'
    })
    .add({
      targets: '.morph-bx1 ',
      translateY: '25%', 
      easing: 'easeOutQuad',
      duration: 2000,
      offset: '-=680'
    })
    .add({
        targets: '.morph-bx1 ',
        translateY: 0,
        translateX: '5%',
        easing: 'easeOutQuad',
        duration: 2000,
        offset: '-=0'
    })
    .add({
      targets: '.pr-wrapper',
      translateY: '25%',
      duration: 1200,
      easing: 'easeOutQuad',
      offset: '-=780'
    })
    .add({
      targets: '.pr-wrapper',
      opacity: 0,
      duration: 1200,
      easing: 'easeOutQuad',
      offset: '-=800'
    })
    .add({
      targets: '.cm-wrapper',
      opacity: 1,
      duration: 2000,
      offset: '-=600'
    })
    .add({
      targets: '.cm-wrapper',
      opacity: 0,
      duration: 1000,
      offset: '-=600'
    })
    .add({
      targets: '.img-wrapper',
      opacity: 1,
      duration: 1000,
      offset: '-=600'
    })
    .add({
      targets: '.img-wrapper',
      translateX: '-18.25rem',
      duration: 1000,
      offset: '-=600'
    })
    .add({
      targets: '.ds-wrapper',
      translateX: '36.5rem',
      translateY: '3rem',
      easing: 'easeOutQuad',
      opacity: 1,
      duration: 1000,
      offset: '-=400'
    })
}
else if(a.matches){
  /* Line Draw with Animejs for Kubaki logo*/

  var relativeOffset = anime.timeline();

  relativeOffset
    .add({
      targets: '.kb-wrapper .lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: true
    })
    .add({
      targets: '.morph-bx1',
      opacity: 1,
      duration: 1000,
      easing: 'easeOutExpo',
      offset: '-=600' // Starts 600ms before the previous animation ends
    })
    .add({
      targets: '.morph-bx1',
      translateY: '-25%',
      easing: 'easeOutQuad',
      duration: 1000,
      offset: '-=400' // Starts 800ms before the previous animation ends
    }).add({
      targets: '.kb-wrapper',
      translateY: '-25%', 
      duration: 2000,
      offset: '-=600'
    }).
    add({
      targets: '.kb-wrapper',
      opacity: 0,
      duration: 2000,
      offset: '-=1200'
    })
    .add({
      targets: '.pr-wrapper',
      opacity: 1,
      duration: 3000,
      offset: '-=600'
    })
    .add({
      targets: '.morph-bx1 ',
      translateY: '25%', 
      easing: 'easeOutQuad',
      duration: 2000,
      offset: '-=680'
    })
    .add({
        targets: '.morph-bx1 ',
        translateY: 0,
        translateX: '5%',
        easing: 'easeOutQuad',
        duration: 2000,
        offset: '-=0'
    })
    .add({
      targets: '.pr-wrapper',
      translateY: '25%',
      duration: 1200,
      easing: 'easeOutQuad',
      offset: '-=780'
    })
    .add({
      targets: '.pr-wrapper',
      opacity: 0,
      duration: 1200,
      easing: 'easeOutQuad',
      offset: '-=800'
    })
    .add({
      targets: '.cm-wrapper',
      opacity: 1,
      duration: 2000,
      offset: '-=600'
    })
    .add({
      targets: '.cm-wrapper',
      opacity: 0,
      duration: 1000,
      offset: '-=600'
    })
    .add({
      targets: '.img-wrapper ',
      opacity: 1,
      duration: 1000,
      offset: '-=600'
    })
    .add({
      targets: '.img-wrapper',
      translateX: '-15rem',
      duration: 1000,
      offset: '-=600'
    })
    .add({
      targets: '.ds-wrapper',
      translateX: '28rem',
      translateY: '0%',
      easing: 'easeOutQuad',
      opacity: 1,
      duration: 1000,
      offset: '-=400'
    })

}
else if(b.matches){
  /* Line Draw with Animejs for Kubaki logo*/

  var relativeOffset = anime.timeline();

  relativeOffset
    .add({
      targets: '.kb-wrapper .lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: true
    })
    .add({
      targets: '.morph-bx1',
      opacity: 1,
      duration: 1000,
      easing: 'easeOutExpo',
      offset: '-=600' // Starts 600ms before the previous animation ends
    })
    .add({
      targets: '.morph-bx1',
      translateY: '-25%',
      easing: 'easeOutQuad',
      duration: 1000,
      offset: '-=400' // Starts 800ms before the previous animation ends
    }).add({
      targets: '.kb-wrapper',
      translateY: '-25%', 
      duration: 2000,
      offset: '-=600'
    }).
    add({
      targets: '.kb-wrapper',
      opacity: 0,
      duration: 2000,
      offset: '-=1200'
    })
    .add({
      targets: '.pr-wrapper',
      opacity: 1,
      duration: 3000,
      offset: '-=600'
    })
    .add({
      targets: '.morph-bx1 ',
      translateY: '25%', 
      easing: 'easeOutQuad',
      duration: 2000,
      offset: '-=680'
    })
    .add({
        targets: '.morph-bx1 ',
        translateY: 0,
        translateX: '5%',
        easing: 'easeOutQuad',
        duration: 2000,
        offset: '-=0'
    })
    .add({
      targets: '.pr-wrapper',
      translateY: '25%',
      duration: 1200,
      easing: 'easeOutQuad',
      offset: '-=780'
    })
    .add({
      targets: '.pr-wrapper',
      opacity: 0,
      duration: 1200,
      easing: 'easeOutQuad',
      offset: '-=800'
    })
    .add({
      targets: '.cm-wrapper',
      opacity: 1,
      duration: 2000,
      offset: '-=600'
    })
    .add({
      targets: '.cm-wrapper',
      opacity: 0,
      duration: 1000,
      offset: '-=600'
    })
    .add({
      targets: '.img-wrapper',
      opacity: 1,
      duration: 1000,
      offset: '-=600'
    })
    .add({
      targets: '.img-wrapper',
      translateX: '-87.5%',
      duration: 1000,
      offset: '-=600'
    })
    .add({
      targets: '.ds-wrapper',
      translateX: '2.5%',
      translateY: '10%',
      easing: 'easeOutQuad',
      opacity: 1,
      duration: 1000,
      offset: '-=400'
    })

}

else if(c.matches){
  /* Line Draw with Animejs for Kubaki logo*/

  var relativeOffset = anime.timeline();

  relativeOffset
    .add({
      targets: '.kb-wrapper',
      opacity: 0,
      duration: 1000,
      easing: 'easeOutExpo',
      offset: '-=600' 
    })
    .add({
      targets: '.mobi-img-wrapper',
      opacity: 1,
      duration: 1000,
      easing: 'easeOutExpo',
      offset: '-=600' 
    })
    .add({
      targets: '.mobile ',
      opacity: 1,
      duration: 1000,
      easing: 'easeOutExpo',
      offset: '-=600' 
    })
    .add({
      targets: '.kb-wrapper .lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: true
    })
    
 

}
else if(ab.matches){
     /* Line Draw with Animejs for Kubaki logo*/

  var relativeOffset = anime.timeline();

  relativeOffset
    .add({
      targets: '.kb-wrapper',
      opacity: 0,
      duration: 1000,
      easing: 'easeOutExpo',
      offset: '-=600' // Starts 600ms before the previous animation ends
    })
    .add({
      targets: '.mobile',
      opacity: 1,
      duration: 1000,
      easing: 'easeOutExpo',
      offset: '-=600' // Starts 600ms before the previous animation ends
    })
    .add({
      targets: '.kb-wrapper .lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: true
    })
}
else if(a.matches && ac.matches){
       /* Line Draw with Animejs for Kubaki logo*/

       var relativeOffset = anime.timeline();

       relativeOffset
         .add({
           targets: '.kb-wrapper',
           opacity: 0,
           duration: 1000,
           easing: 'easeOutExpo',
           offset: '-=600' // Starts 600ms before the previous animation ends
         })
         .add({
           targets: '.mobile',
           opacity: 1,
           duration: 1000,
           easing: 'easeOutExpo',
           offset: '-=600' // Starts 600ms before the previous animation ends
         })
         .add({
           targets: '.kb-wrapper .lines path',
           strokeDashoffset: [anime.setDashoffset, 0],
           easing: 'easeInOutSine',
           duration: 1500,
           delay: function(el, i) { return i * 250 },
           direction: 'alternate',
           loop: true
         })
}
  






