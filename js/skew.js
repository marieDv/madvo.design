const section = document.getElementById("wheel");
let currentPixel = window.pageYOffset;

function looper() {
	const nPixel = window.pageYOffset;
	let diff = nPixel - currentPixel;
	let speed = diff * 0.0025;

	if (speed !== 0) {
		// section.style.transform += "skewY(" + speed + "deg)";
	}
	//     section.style.transform = "skewY(" + currentPixel + "deg)";
	currentPixel = nPixel;
	requestAnimationFrame(looper);
}
looper();

console.log(TweenMax)
Draggable.create("#overview", {
	type: "x",
	bounds: document.getElementById("overview-holder"),
	throwProps: true,
	onClick: function () {
		console.log("clicked");
	},
	onDragEnd: function () {
		console.log("drag ended");
	}
});
var windowSize = window.innerWidth;
initDraggable();

window.addEventListener("resize", () => {
	console.log("RESIZE")
	windowSize = window.innerWidth;
	initDraggable()
});

function initDraggable() {
	if (windowSize > 842) {
		Draggable.create("#wheel", {
			type: "x",
			bounds: document.getElementById("wheel-container"),
			throwProps: true,
			onClick: function () {
				console.log("clicked");
			},
			onDragEnd: function () {
				// console.log(this._gsTransform.x)
				console.log("drag ended");
			}
		});
	}
}



// window.addEventListener("scroll", looper());

// var controller = new ScrollMagic.Controller();

// create a scene
// new ScrollMagic.Scene({
//   triggerElement: "#wheel",
//   duration: 100,    // the scene should last for a scroll distance of 100px
//   offset: 50    // start this scene after scrolling for 50px
// })
//   .setPin("#wheel") // pins the element for the the scene's duration
//   .addTo(controller);

// const section = document.getElementById("wheel"); 
// section.style.transform = "skewY(" + 20 + "deg)";

// var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 100}});

// // build scenes
// new ScrollMagic.Scene({triggerElement: "#wheel"})
//         .setClassToggle("#wheel", "active") // add class toggle
//         .addIndicators() // add indicators (requires plugin)
//         .addTo(controller);
// new ScrollMagic.Scene({triggerElement: "#sec2"})
//         .setClassToggle("#high2", "active") // add class toggle
//         .addIndicators() // add indicators (requires plugin)
//         .addTo(controller);