
scrollAnimation();
scrollSingle();

function aniamteAllTextElements(controller, element, delay) {
  // let elementClasses = document.getElementById(element);
  // elementClasses.style.opacity = 0;
  //anim-about-text
  // var tween = TweenMax.fromTo("#"+element, 1.2,{opacity: 1.0,y: yDecay ? "-"+yDecay : 40 }, { opacity: 1.0, y: yDecay ? yDecay : -40 });
  var tween;
  if(delay){
  tween = TweenMax.fromTo("#" + element, 1.2,{ y: 0}, { y: -40});
  }{
    tween = TweenMax.to("#" + element, 1.7, { y: -40});//className: "+=anim-about-text"
  }
  let mScene = new ScrollMagic.Scene({

    triggerElement: "#" + element,
    duration: 600,
    offset: -100,
  })
    .setTween(tween)
    // .addIndicators({ name: element + "start" }) // add indicators (requires plugin)
    .addTo(controller);
}

function scrollAnimation() {



  let controller = new ScrollMagic.Controller();
  aniamteAllTextElements(controller, "education-headline");
  aniamteAllTextElements(controller, "about-swiper");
  aniamteAllTextElements(controller, "something-amazing");
  // aniamteAllTextElements(controller, "contacts", true);

  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    offset: 200,
  })
    // .addIndicators({ name: "1 (duration: 0)" }) // add indicators (requires plugin)
    .addTo(controller);
  console.log(scene.progress())

  var scene2 = new ScrollMagic.Scene({
    triggerElement: ".aboutOverview",
    offset: 200,
  })
    // .addIndicators({ name: "1 (duration: 0)" }) // add indicators (requires plugin)
    .addTo(controller);

  var tween = TweenMax.to("#animate3", 1, { className: "+=fish" });
  var scene3 = new ScrollMagic.Scene({ triggerElement: "#trigger3", duration: 800, offset: -100 })
    .setTween(tween)
    .addTo(controller);


  var infoTween = TweenMax.fromTo("#info-ring", 0.21, { opacity: 0 }, { className: "+=moving", opacity: 1 });
  var scene4 = new ScrollMagic.Scene({ triggerElement: "#trigger3", duration: 4000, offset: -200 })
    .setTween(infoTween)
    .addTo(controller);
}


function scrollSingle(){
  let controller = new ScrollMagic.Controller();

  scrollImagesUp(controller);
  aniamteScrollPopup(controller, "scroll-popup");
}

function aniamteScrollPopup(controller, element, delay) {

  var tween3 = TweenMax.to("#scroll-popup-text", 1, { y: 50 });
  var scene3 = new ScrollMagic.Scene({ triggerElement: "#scroll-popup-text", duration: 800, offset: -400 })
    .setTween(tween3)
    .addTo(controller);

  var tween2 = TweenMax.to("#scroll-popup-line", 1, { scaleY: 0.1 });
  var scene4 = new ScrollMagic.Scene({ triggerElement: "#scroll-popup-line", duration: 800, offset: -400 })
    .setTween(tween2)
    .addTo(controller);




  let tween = TweenMax.fromTo("#" + element, 0.3, { y: 0 }, { y: -5, opacity: 0 });

  let mScene = new ScrollMagic.Scene({

    triggerElement: "#" + element,
    duration: 100,
    offset: -250,
  })
    .setTween(tween)
    // .addIndicators({ name: element + "start" }) // add indicators (requires plugin)
    .addTo(controller);
}

function scrollImagesUp(controller) {
  var tween = TweenMax.to("#about-clients", 1.2, { className: "+=moveImages" });
  var scene3 = new ScrollMagic.Scene({ triggerElement: "#about-clients", duration: 400, offset: 500 })
    .setTween(tween)
    .addTo(controller);
}