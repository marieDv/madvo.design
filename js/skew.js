const section = document.getElementById("wheel");
let currentPixel = window.pageYOffset;
var activeSlide = document.getElementsByClassName("swiper-slide-active")[0];
var wheel = document.getElementsByClassName("wheel")[0];

let infoRing = document.getElementsByClassName("info-ring")[0];
var footer = document.getElementById("footer-white");
let singleSwiper = document.getElementById("overview-swiper-single");
var marieLink = document.getElementById("toggleFace");
let portraitcursor = document.getElementsByClassName("cursor--canvas-about")[0];

var isHovering = false;
var isHoveringFooter = false;
var isHoveringWheel = false;
var isHoveringMarie = false;
let isHoveringSwiper = false;
let once = false;
let changeFooter = false;
let reset = false;
let growCircle = false;



var windowSize = window.innerWidth;
let overview = document.getElementById("overview-holder");

setTimeout(() => {
	setExploreLink();
	
}, 500);


if (overview) { initOverview(); } else {
	initSwiper();
}



window.addEventListener("resize", () => {
	windowSize = window.innerWidth;

	if (overview) { initOverview(); } else {
		initSwiper();
	}



});
function setExploreLink(){
	let explore = document.getElementsByClassName("explore")[0].children[0];
	let slide = document.getElementsByClassName("swiper-slide-active")[0];
	let link;
	if(slide){
		link = slide.href;
	}
	console.log(link);
	console.log(explore);
	explore.href = link;
}

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

	// if (window.innerWidth > 900) {
		let mySwiper = new Swiper('.swiper-container', {
			slidesPerView: 'auto',
			centeredSlides: true,
			simulateTouch: true,
			slideToClickedSlide: true,
			spaceBetween: 10,
			cssMode: true,
			// followFinger: true,
			speed: 1700,
			on: {
				click: function () {
				},
				slideChange: function () {
					if (!document.getElementsByClassName("swiper-container")[0].classList.contains("about-container")) {
						

						if ((this.previousIndex - this.activeIndex) < 0) {
							TweenMax.to(infoRing, 1.5, { rotation: '+= 90' });
						} else {
							TweenMax.to(infoRing, 1.5, { rotation: '-= 90' });
						}
						this.simulateTouch = false;
						console.log(this.simulateTouch)


						document.getElementsByClassName("swiper-container")[0].classList.add("swiper-container--notouch");
						setTimeout(() => {
							setExploreLink();
							activeSlide = document.getElementsByClassName("swiper-slide-active")[0];
						}, 200);
						setTimeout(() => {
							document.getElementsByClassName("swiper-container")[0].classList.remove("swiper-container--notouch");

						}, 1500);
						universal = document.getElementsByClassName("hidden-thumbnail")[this.activeIndex].innerHTML;
						universalIndex = this.activeIndex;
						// 	console.log(universal)
					}
				}
			}
		});
	// }
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
		if (wheel) {
			wheel.addEventListener("mouseover", () => {
				isHoveringWheel = true;
			});
			wheel.addEventListener("mouseleave", () => {
				isHoveringWheel = false;
			});
		}
		if (singleSwiper) {
			singleSwiper.addEventListener("mouseover", () => {
				isHoveringSwiper = true;
			});
			singleSwiper.addEventListener("mouseleave", () => {
				isHoveringSwiper = false;
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
					document.getElementsByClassName("cursor--canvas")[0].classList.add("cursor--canvas--active");
					isHovering = true;
				});
				activeSlide.addEventListener("mouseleave", () => {
					document.getElementsByClassName("cursor--canvas")[0].classList.remove("cursor--canvas--active");
					isHovering = false;
				});
			}
		}

	});

	// transform the innerCursor to the current mouse position
	// use requestAnimationFrame() for smooth performance
	const render = () => {

		innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
		if (isHoveringFooter || isHoveringSwiper) {
			innerCursor.style.background = "#000";
		} else {
			innerCursor.style.background = "#fff";
		}
		// setTimeout(() => {

		// }, 1/30);

		setTimeout(function () { //throttle requestAnimationFrame to 20fps
			requestAnimationFrame(render);
		}, 1000 / 20)

	};
	requestAnimationFrame(render);
};





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

	let arrowsBlack = new paper.Raster('arrows-black');
	arrowsBlack.scale(0.06);
	arrowsBlack.visible = false;

	let raster = new paper.Raster('view-ring');
	raster.scale(0.005);
	raster.visible = false;

	let portrait = new paper.Raster('portrait');
	portrait.scale(0.25);
	portrait.visible = false;


	polygon.smooth();
	group = new paper.Group([polygon, raster, arrows, arrowsBlack, portrait]);
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

		if (isHoveringWheel && !isHovering && !isHoveringSwiper) {
			arrows.visible = true;

		} else {
			arrows.visible = false;
		}

		if (isHoveringMarie) {
			portraitcursor.classList.add("cursor--canvas-about--active");
			portraitcursor.classList.remove("cursor--canvas-about--leaving");
			portrait.visible = true;
		} else {
			if (portrait.visible === true) {
				portraitcursor.classList.remove("cursor--canvas-about--active");
				portraitcursor.classList.add("cursor--canvas-about--leaving");
			}
			setTimeout(() => {
				portrait.visible = false;
			}, 400);

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
				polygon.fillColor = "#fff";
				polygon.strokeColor = "#fff";


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

		if (isHoveringSwiper) {
			polygon.strokeColor = "#000";
			arrowsBlack.visible = true;
		} else {
			polygon.strokeColor = "#fff";
			arrowsBlack.visible = false;
		}

	}
}


initCursor();
initCanvas();