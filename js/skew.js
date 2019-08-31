const section = document.getElementById("wheel");
let currentPixel = window.pageYOffset;
var activeSlide = document.getElementsByClassName("swiper-slide-active")[0];
var isHovering = false;
let once = false;
let reset = false;
let growCircle = false;

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
// initDraggable();



initSwiper();
window.addEventListener("resize", () => {
	console.log("RESIZE")
	windowSize = window.innerWidth;
	// initDraggable()
	initSwiper();

});





function initSwiper() {
	console.log(window.innerWidth)
	if (window.innerWidth > 900) {
		let mySwiper = new Swiper('.swiper-container', {
			slidesPerView: 'auto',
			centeredSlides: true,
			spaceBetween: 10,
			on: {
				slideChange: function () {
					console.log('swiper initialized');
					console.log(this.activeIndex);

					setTimeout(() => {
						activeSlide = document.getElementsByClassName("swiper-slide-active")[0];
					}, 200);

					universal = document.getElementsByClassName("hidden-thumbnail")[this.activeIndex].innerHTML;
					console.log(universal);
				}
			}
		});
	}
}
let clientX = -100;
let clientY = -100;
const innerCursor = document.querySelector(".cursor--small");

const initCursor = () => {
	// add listener to track the current mouse position
	document.addEventListener("mousemove", e => {
		clientX = e.clientX;
		clientY = e.clientY;
		activeSlide = document.getElementsByClassName("swiper-slide-active")[0];
		// console.log("wtf are you being parsed?")
		// console.log(activeSlide)
		if (activeSlide) {
			activeSlide.addEventListener("mouseover", () => {
				// setTimeout(() => {
				isHovering = true;
				// }, 200);

			});
			activeSlide.addEventListener("mouseleave", () => {
				isHovering = false;
			});

		}

	});

	// transform the innerCursor to the current mouse position
	// use requestAnimationFrame() for smooth performance
	const render = () => {
		innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
		// if you are already using TweenMax in your project, you might as well
		// use TweenMax.set() instead
		// TweenMax.set(innerCursor, {
		//   x: clientX,
		//   y: clientY
		// });

		requestAnimationFrame(render);
	};
	requestAnimationFrame(render);
};

initCursor();




let lastX = 0;
let lastY = 0;
let isStuck = false;
let showCursor = false;
let group, stuckX, stuckY, fillOuterCursor;

const initCanvas = () => {
	const canvas = document.querySelector(".cursor--canvas");
	const shapeBounds = {
		width: 75,
		height: 75
	};
	paper.setup(canvas);
	const strokeColor = "rgba(255, 255, 255, 0.5)";
	const strokeWidth = 1;
	const segments = 8;
	const radius = 15;

	// we'll need these later for the noisy circle
	const noiseScale = 150; // speed
	const noiseRange = 4; // range of distortion
	let isNoisy = false; // state


	// the base shape for the noisy circle
	const polygon = new paper.Path.RegularPolygon(
		new paper.Point(0, 0),
		segments,
		radius
	);
	polygon.strokeColor = strokeColor;
	// polygon.fillColor = "#fff";
	polygon.strokeWidth = strokeWidth;
	// let text = new paper.PointText(new paper.Point(30, 30));
	// text.fillColor = 'red';
	// text.justification = 'center';

	// text.content = 'View project';

	let raster = new paper.Raster('view-rings');
	// raster.position = 'center';
	raster.scale(0.005);
	raster.visible = false;

	polygon.smooth();
	group = new paper.Group([polygon, raster]);
	group.applyMatrix = false;




	const noiseObjects = polygon.segments.map(() => new SimplexNoise());
	let bigCoordinates = [];

	// function for linear interpolation of values
	const lerp = (a, b, n) => {
		return (1 - n) * a + n * b;
	};

	// function to map a value from one range to another range
	const map = (value, in_min, in_max, out_min, out_max) => {
		return (
			((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
		);
	};

	// the draw loop of Paper.js 
	// (60fps with requestAnimationFrame under the hood)
	paper.view.onFrame = event => {
		// using linear interpolation, the circle will move 0.2 (20%)
		// of the distance between its current position and the mouse
		// coordinates per Frame
		lastX = lerp(lastX, clientX, 0.2);
		lastY = lerp(lastY, clientY, 0.2);
		group.position = new paper.Point(lastX, lastY);
		// console.log("hover" + isHovering);

		if (isHovering) {
			// polygon.fillColor = "#fcba03";
			// console.log(polygon.fillColor.hue)
			polygon.fillColor = "#fff";
			// polygon.fillColor.hue += 1;
			if (once === false) {
				polygon.fillColor = "#fcba03";
				if (growCircle === false) {
					// polygon.scale += 0.3;
				}
				
					setTimeout(() => {
					// TweenMax.to(polygon.scaling, 1.0, {x:1.0 ,y: 1.2}); 
					}, 1000);

				once = true;
				reset = true;
				growCircle = true;
				
				// }, 400);
				raster.visible = true;
				raster.scale(10);
				polygon.scale(2.0);


			} else {
				group.rotate(1);
				polygon.scale(1.0);
			}

		} else {
			if (reset === true) {
				polygon.scale(0.5);
				raster.visible = false;
				raster.scale(0.1);
				polygon.fillColor = "transparent";
				reset = false;
				growCircle = false;
			}
			// polygon.fillColor = "#ffffff";
			polygon.scale(1.0);
			once = false;
		}

	}
}

initCanvas();

