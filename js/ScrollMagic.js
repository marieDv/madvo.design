let controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement: "#trigger1",
  offset: 200,
})
  // .setTween("#trigger1", 0.8, {opacity: "1", y: "-="+ 120}) // trigger a TweenMax.to tween
  .addIndicators({ name: "1 (duration: 0)" }) // add indicators (requires plugin)
  .addTo(controller);
console.log(scene.progress())

var scene2 = new ScrollMagic.Scene({
  triggerElement: ".aboutOverview",
  offset: 200,
})
  // .setTween(".aboutOverview", 0.8, {opacity: "1", x: "+="+ 80}) // trigger a TweenMax.to tween

  .addIndicators({ name: "1 (duration: 0)" }) // add indicators (requires plugin)
  .addTo(controller);

var tween = TweenMax.to("#animate3", 1, { className: "+=fish" });

// build scene
var scene3 = new ScrollMagic.Scene({ triggerElement: "#trigger3", duration: 800, offset: -100 })
  .setTween(tween)
  .addIndicators({ name: "tween css class" }) // add indicators (requires plugin)
  .addTo(controller);
