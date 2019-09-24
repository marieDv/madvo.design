
scrollAnimation();


function aniamteAllTextElements(controller, element, delay) {
  // let elementClasses = document.getElementById(element);
  // elementClasses.style.opacity = 0;
  //anim-about-text
  // var tween = TweenMax.fromTo("#"+element, 1.2,{opacity: 1.0,y: yDecay ? "-"+yDecay : 40 }, { opacity: 1.0, y: yDecay ? yDecay : -40 });
  var tween;
  if(delay){
    console.log(element)
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
    .addIndicators({ name: element + "start" }) // add indicators (requires plugin)
    .addTo(controller);
}

function scrollAnimation() {



  let controller = new ScrollMagic.Controller();
  // aniamteAllTextElements(controller, "trigger1");
  // aniamteAllTextElements(controller, "trigger2");
  // aniamteAllTextElements(controller, "trigger-start-subheadline", true);

  aniamteAllTextElements(controller, "education-headline");
  aniamteAllTextElements(controller, "about-swiper");
  aniamteAllTextElements(controller, "something-amazing");
  // aniamteAllTextElements(controller, "contacts", true);

  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    offset: 200,
  })
    .addIndicators({ name: "1 (duration: 0)" }) // add indicators (requires plugin)
    .addTo(controller);
  console.log(scene.progress())

  var scene2 = new ScrollMagic.Scene({
    triggerElement: ".aboutOverview",
    offset: 200,
  })
    .addIndicators({ name: "1 (duration: 0)" }) // add indicators (requires plugin)
    .addTo(controller);

  var tween = TweenMax.to("#animate3", 1, { className: "+=fish" });
  var scene3 = new ScrollMagic.Scene({ triggerElement: "#trigger3", duration: 800, offset: -100 })
    .setTween(tween)
    .addTo(controller);

  // var tween = TweenMax.fromTo("#info-ring", 0.3, { opacity: 0, y:"-=10" }, { opacity: 1, y:"+=10" });
  // var scene4 = new ScrollMagic.Scene({ triggerElement: "#triggerH12", duration: 800, offset: 180 })
  //   .setTween(tween)
  //   .addIndicators({ name: "tween view ring" }) // add indicators (requires plugin)
  //   .addTo(controller);

  var infoTween = TweenMax.fromTo("#info-ring", 0.21, { opacity: 0 }, { className: "+=moving", opacity: 1 });
  var scene4 = new ScrollMagic.Scene({ triggerElement: "#trigger3", duration: 4000, offset: -200 })
    .setTween(infoTween)
    .addTo(controller);
}