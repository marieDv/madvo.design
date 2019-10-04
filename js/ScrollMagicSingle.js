
scrollAnimation();


function aniamteAllTextElements(controller, element, delay) {
  let tween = TweenMax.fromTo("#" + element, 0.3, { y: 0 }, { y: -5, opacity: 0 });

  let mScene = new ScrollMagic.Scene({

    triggerElement: "#" + element,
    duration: 100,
    offset: -250,
  })
    .setTween(tween)
 //   .addIndicators({ name: element + "start" }) // add indicators (requires plugin)
    .addTo(controller);
}

function scrollAnimation() {
  let controller = new ScrollMagic.Controller();
  let mController = new ScrollMagic.Controller();

  var tween = TweenMax.to("#scroll-popup-text", 1, { y: 50 });
  var scene3 = new ScrollMagic.Scene({ triggerElement: "#scroll-popup-text", duration: 800, offset: -400 })
    .setTween(tween)
    .addTo(controller);

  var tween2 = TweenMax.to("#scroll-popup-line", 1, { scaleY: 0.1 });
  var scene4 = new ScrollMagic.Scene({ triggerElement: "#scroll-popup-line", duration: 800, offset: -400 })
    .setTween(tween2)
    .addTo(controller);

  var tween3 = TweenMax.fromTo("#footer-white", 1, {opacity: 0, y: -30}, { opacity: 1, y: 30 });
  var scene5 = new ScrollMagic.Scene({ triggerElement: ".ic-s-screen--black", duration: 800, offset: -300 })
    .setTween(tween3)
    .addTo(controller);

  scrollImagesUp(mController);
  aniamteAllTextElements(controller, "scroll-popup");

}


function scrollImagesUp(controller) {
  // var tween = TweenMax.fromTo("#text-anchor", 1, { y: 0 }, { y: 300, opacity: 0 });
  // var scene3 = new ScrollMagic.Scene({ triggerElement: "#text-anchor", duration: 900, offset: 300 })
  //   .setTween(tween)
  //   .addTo(controller);

  var tween = TweenMax.to("#text-anchor", 0.2, { className: "+=moveImages" });
  var scene3 = new ScrollMagic.Scene({ triggerElement: "#text-anchor", duration: 400, offset: 300 })
    .setTween(tween)
    .addTo(controller);
}