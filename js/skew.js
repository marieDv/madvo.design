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
			spaceBetween: 50,
			on: {
				slideChange: function () {
					console.log('swiper initialized');
					console.log(this.activeIndex
						)
					universal = document.getElementsByClassName("hidden-thumbnail")[this.activeIndex].innerHTML;
					console.log(universal);
				}}
			});
		// mySwiper.onSlideChangeEnd
		// mySwiper.on('slideChange', function () {
		// 	console.log('slide changed');
		// });

		// swiper.on('slideChange', function () {
		// 	console.log('slide changed');
		// 	// document.getElementsByClassName("swiper-slide-active")[0]
		// });
	}
}

// function initDraggable() {
// 	if (windowSize > 842) {
// 		Draggable.create("#wheel", {
// 			type: "x",
// 			bounds: document.getElementById("wheel-container"),
// 			throwProps: true,
// 			onClick: function () {
// 				console.log("clicked");
// 			},
// 			onDragEnd: function () {
// 				// console.log(this._gsTransform.x)
// 				console.log("drag ended");
// 			}
// 		});
// 	}
// }
