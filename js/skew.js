const section = document.getElementById("wheel");
let currentPixel = window.pageYOffset;
var activeSlide = document.getElementsByClassName("swiper-slide-active")[0];
var wheel = document.getElementsByClassName("wheel")[0];

let infoRing = document.getElementsByClassName("info-ring")[0];
var footer = document.getElementById("footer-white");
var isHovering = false;
var isHoveringFooter = false;
var isHoveringWheel = false;
let once = false;
let changeFooter = false;
let reset = false;
let growCircle = false;



var windowSize = window.innerWidth;
let overview = document.getElementById("overview-holder");
if (overview) { initOverview(); } else {
	initSwiper();
}



window.addEventListener("resize", () => {
	windowSize = window.innerWidth;

	if (overview) { initOverview(); } else {
		initSwiper();
	}



});


function initOverview() {

	let overviewSwiper = new Swiper('.swiper-container', {
		slidesPerView: 'auto',
		centeredSlides: true,
		spaceBetween: 10,
		on: {
			slideChange: function () {

			}
		}
	});
}



function initSwiper() {

	if (window.innerWidth > 900) {
		let mySwiper = new Swiper('.swiper-container', {
			slidesPerView: 'auto',
			centeredSlides: true,
			simulateTouch: true,
			slideToClickedSlide: true,
			spaceBetween: 10,

			on: {
				click: function () {
				},
				slideChange: function () {
					if(( this.previousIndex - this.activeIndex ) < 0){
						TweenMax.to(infoRing, 1.5, {rotation: '+= 90'}); 
					}else {
						TweenMax.to(infoRing, 1.5, {rotation: '-= 90'}); 
					}
				
					setTimeout(() => {
						activeSlide = document.getElementsByClassName("swiper-slide-active")[0];
					}, 200);

					universal = document.getElementsByClassName("hidden-thumbnail")[this.activeIndex].innerHTML;
					universalIndex = this.activeIndex;
					console.log(universal)
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
		if (document.getElementsByClassName("swiper-slide-active")[0]) {
			activeSlide = document.getElementsByClassName("swiper-slide-active")[0].children[1];
		}
		// console.log(document.getElementsByClassName("swiper-slide-active")[0].children[1])
		if (wheel) {
			wheel.addEventListener("mouseover", () => {
				isHoveringWheel = true;
			});
			wheel.addEventListener("mouseleave", () => {
				isHoveringWheel = false;
			});
		}
		if (footer) {
			footer.addEventListener("mouseover", () => {
				isHoveringFooter = true;
			});
			footer.addEventListener("mouseleave", () => {
				isHoveringFooter = false;
			});
		}
		if (activeSlide) {
			if (!activeSlide.classList.contains("single-slide")) {
				activeSlide.addEventListener("mouseover", () => {
					isHovering = true;
				});
				activeSlide.addEventListener("mouseleave", () => {
					isHovering = false;
				});
			}
		}

	});

	// transform the innerCursor to the current mouse position
	// use requestAnimationFrame() for smooth performance
	const render = () => {
		innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
		if (isHoveringFooter) {
			innerCursor.style.background = "#e2183a";
		} else {
			innerCursor.style.background = "#fff";
		}
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
	polygon.strokeWidth = strokeWidth;

	let arrows = new paper.Raster('arrows');
	arrows.scale(0.06);
	arrows.visible = false;


	let raster = new paper.Raster('view-ring');
	raster.scale(0.005);
	raster.visible = false;

	polygon.smooth();
	group = new paper.Group([polygon, raster, arrows]);
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

	paper.view.onFrame = event => {
		lastX = lerp(lastX, clientX, 0.2);
		lastY = lerp(lastY, clientY, 0.2);
		group.position = new paper.Point(lastX, lastY);

		if (isHoveringWheel && !isHovering) {
			arrows.visible = true;

		} else {
			arrows.visible = false;
		}
		if (isHoveringFooter) {
			if (changeFooter === false) {
				polygon.strokeColor = "#e2183a";
				changeFooter = true;
			}
		} else if (!isHovering) {
			polygon.strokeColor = "#fff";
			changeFooter = false;
		}
		if (isHovering) {

			if (once === false) {
				polygon.fillColor = "#e2183a";
				polygon.strokeColor = "#e2183a";


				setTimeout(() => {
					// TweenMax.to(polygon.scaling, 1.0, {x:1.0 ,y: 1.2}); 
				}, 1000);

				once = true;
				reset = true;
				growCircle = true;
				arrows.visible = false;
				raster.visible = true;
				raster.scale(10);
				polygon.scale(0.8);


			} else {
				raster.rotate(1);
				// polygon.scale(1.1);
			}

		} else {
			if (reset === true) {
				polygon.scale(1.25);
				raster.visible = false;
				raster.scale(0.1);
				polygon.fillColor = "transparent";
				polygon.strokeColor = "#fff";
				reset = false;
				growCircle = false;
			}
			polygon.scale(1.0);
			once = false;
		}

	}
}

initCanvas();

