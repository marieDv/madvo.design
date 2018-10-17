var counterSlides = 0;
setTimeout(function() {
    anime({
        targets: ".scan-count",
        innerHTML: 100, // Animate the input value to 1000
        easing: "easeOutExpo",
        duration: 4000,
        round: 1 // Remove decimals by rounding the value
    });

}, 2000);


setTimeout(function() {

    anime({
        targets: ".loading-screen",
        scaleX: screen.width,
        easing: "easeOutExpo",
        duration: 4800,
    });
setTimeout(() => {document.getElementsByClassName("loading-screen")[0].style.top = "-10px"}, 3300)
}, 2000);

setTimeout(function() {
    let active = false;
    let wheelitems = document.getElementsByClassName("wheel-item__content");
    for(let i=0; i<wheelitems.length; i++){
        if(wheelitems[i].classList.contains("wheel-item__content--active")){
            active = true;
        }

    }


}, 20000);

document.getElementById("next").addEventListener("click", function(){
    animateGradientButton(1700);
});
document.getElementById("previous").addEventListener("click", function(){
    animateGradientButton(1700, true);
});

let soundbutton = document.getElementsByClassName("wheel-item__content__button");
for(let i=0; i<soundbutton.length; i++){

    soundbutton[i].addEventListener("mouseover", function(){
        let left = false;
        animateGradientOnHover(left, i);
    });
    soundbutton[i].addEventListener("mouseout", function(){
        let left = true;
        animateGradientOnHover(left, i);
    });
}


let wheelImage = document.getElementsByClassName("wheel-item__image");
for(let i=0; i<wheelImage.length; i++){
    wheelImage[i].addEventListener("click", function(){
        animateGradientButton(1400, false, true);
    });
}


function animateGradientOnHover(left, i){

 if(!left){
     document.getElementsByClassName("more-button--sound")[i].classList.add("more-button--sound-active");
     anime({
        targets: ".more-button--sound",
        scaleX: 0.9,
        easing: "easeInQuad",
        duration: 300,
        loop: false,
    });}else{
     setTimeout(function() {
         document.getElementsByClassName("more-button--sound")[i].classList.remove("more-button--sound-active");
         anime({
             targets: ".more-button--sound",
             scaleX: 1,
             easing: "easeInQuad",
             duration: 200,
             loop: false,
         });
     },100);
 }
}


function animateGradientButton(back, prev, imageToggle){


let progress = document.getElementsByClassName("progress-line")[0];
if(progress){
progress.classList.add("progress-line-toRight");
    setTimeout(function() {
        // progress.classList.remove("progress-line-toRight");
    },700);
    setTimeout(function() {
        progress.classList.remove("progress-line-toRight");
        progress.classList.add("progress-line-toLeft");
        setTimeout(function() {
            // progress.classList.remove("progress-line-toLeft");
        },1200);
    },1300);
}
    anime({
        targets: ".headline--gradient",
        scaleX: 0,
        easing: "easeOutExpo",
        duration: 700,
        loop: false,
    });
    anime({
        targets: ".headline--more",
        scaleX: 0,
        easing: "easeOutExpo",
        duration: 700,
        loop: false,
    });
    anime({
        targets: ".more-button--sound",
        scaleX: 0,
        easing: "easeOutExpo",
        duration: 700,
        loop: false,
    });
    setTimeout(function() {
        anime({
            targets: ".headline--gradient",
            scaleX: 1,
            easing: "easeOutExpo",
            duration: 2000,
            loop: false,
        });
        anime({
            targets: ".headline--more",
            scaleX: 1,
            easing: "easeOutExpo",
            duration: 2000,
            loop: false,
        });
        let factor = 20;
        prev===true ? (counterSlides -=2) : counterSlides +=2;
        if(!imageToggle){
        anime({
            targets: ".loading-slides-inner",
            scaleX: [20, 1.2+counterSlides],
            easing: "easeOutExpo",
            duration: 4000,
            loop: false,
        });}

        // counterSlides+=2;
        anime({
            targets: ".more-button--sound",
            scaleX: 1,
            easing: "easeOutExpo",
            duration: 2000,
            loop: false,
        });
    }, back);
}
