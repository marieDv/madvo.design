var pos = 0;
var counter=0;
var nextCounter=0;
var val= 100;
pos = (val*-1);
pos=pos-(val*-1);
var wait = false;
var first = true;
window.onload = function(){
init()
    let next = document.getElementById("next");
    setInterval(function () {
        let active = false;
        let wheelitems = document.getElementsByClassName("wheel-item__content");
        for(let i=0; i<wheelitems.length; i++){
            if(wheelitems[i].classList.contains("wheel-item__content--active")){
                active = true;
            }

        }
        if(!active) {
            // scrollNext(next, true, true);
        }
    }, 20000);



    animStartscreen();

};

function init(){
    initWheelMechaincs();
}




function animStartscreen(){
    let vid = document.getElementsByClassName("wheel-item__image");
    vid[0].classList.remove("wheel-item__image--hide");
    vid[0].classList.add("wheel-item__image--show");
    vid[1].classList.remove("wheel-item__image--hide");
    vid[1].classList.add("wheel-item__image--show");
    setTimeout(()=>{
        vid.classList.remove("wheel-item__image--show");
    },300);
    setTimeout(function() {
        document.getElementsByClassName("startscreen__title")[0].classList.add("startscreen__title--active");
        setTimeout(function() {
            document.getElementsByClassName("startscreen__title")[1].classList.add("startscreen__title--active");
            setTimeout(function() {
            document.getElementsByClassName("startscreen__title")[2].classList.add("startscreen__title--active");
            }, 200);
        }, 200);
    },300);

    closeStartscreen();
    function closeStartscreen() {

    setTimeout(function () {
        vid.style.transform = "scale(1)";
        vid.classList.add("video");
        document.getElementsByClassName("startscreen__title")[0].classList.add("startscreen__title--reversed");
        setTimeout(function () {
            document.getElementsByClassName("startscreen__title")[1].classList.add("startscreen__title--reversed");
            setTimeout(function () {
                document.getElementsByClassName("startscreen__title")[2].classList.add("startscreen__title--reversed");
            }, 200);
        }, 200);
    }, 4500);


    setTimeout(function () {
        document.getElementsByClassName("startscreen")[0].classList.add("startscreen--active");
        document.getElementById("wheel").classList.add("wheel--active");

        setTimeout(function () {
            // document.getElementsByClassName("startscreen")[0].style.display = "none";
            // document.getElementsByClassName("wheel-item__image")[0].classList.add("wheel-item__image--active");
        }, 100);
    }, 5300);
}

}









function initWheelMechaincs(){
    let next = document.getElementById("next");
    let prev = document.getElementById("previous");

    console.log(document.getElementById("wheel").style.backgroundColor);

    // if(document.getElementById("wheel").style.transform === "translateX(0%)" ||document.getElementById("wheel").style.transform === ""){
    prev.style.visibility = "hidden";
    // }
    scrollNext(next, true, false);
    scrollNext(prev, false, false);


}


function changeWheelbackground(element, all){

    setTimeout(function(){
        if(all){
        for(let i=0; i<all.length; i++){
            all[i] != element ? all[i].style.visibility = "hidden" : all[i].style.visibility = "visible";
            all[i] != element ? all[i].classList.remove("active--bg") : all[i].classList.add("active--bg");
        }}
    }, 600);

}

function getCounter(){
    let all = document.getElementsByClassName("wheel__background");
    for(let i=0; i<all.length; i++) {
        if(all[i].classList.contains === "active--bg"){
        }
    }
}
function scrollNext(direction, next, autoScroll){
    let wheel = document.getElementById("wheel");
    document.getElementsByClassName("wheel__background")[0].style.visibility = "visible";
    document.getElementsByClassName("wheel-item__title")[0].style.visibility = "visible";
    let maxVal = (val*-1)*(document.getElementsByClassName("wheel__background").length-1);

    // let nextItem = document.getElementsByClassName("wheel-item");
    // nextItem[1].style.paddingLeft = "12rem";
    // nextItem[0].style.paddingRight = "0";


    direction.addEventListener("click", function(){
        if(!wait && !first){
            addSliderlogic();
        }else if(!wait && first){
            first = false;
            setTimeout(function(){
                addSliderlogic();
            }, 800);

        }
            wait = true;
            setTimeout(function(){
                wait = false;
            }, 2500);

    });


    if(autoScroll){
        if(nextCounter <2){
            next = true;
            nextCounter++;
        }else{
            // pos = -100;
            next = false;
            nextCounter--;
        }

        addSliderlogic();
     }

    function navigationnnumber(mCounter){

        let nmbrL = document.getElementById("nmbrLeft");
        let nmbrR = document.getElementById("nmbrRight");
        let box = document.getElementsByClassName("navigation-number__box")[0];



            nmbrL.classList.add("navigation-number--active");
            nmbrR.classList.add("navigation-number--active");
         setTimeout(function(){
             let image = document.getElementsByClassName("wheel-item__image")[0].offsetWidth;
             box.style.marginLeft = (image/3)*mCounter+"px";
             window.addEventListener('resize', function () {
                 image = document.getElementsByClassName("wheel-item__image")[0].offsetWidth;
                 box.style.marginLeft = (image/3)*mCounter+"px";
             })
              // box.style.marginLeft = 11*mCounter+"rem";
              nmbrL.innerHTML = ("0"+(mCounter+1)).toString();
         }, 900);
         setTimeout(function() {
                nmbrL.classList.remove("navigation-number--active");
                 nmbrR.classList.remove("navigation-number--active");
         }, 1100);

    }

    function currentStripe(counter){
        let all = document.getElementsByClassName("stripe");
        for(let i=0; i<all.length; i++) {

            if(i === counter){

                all[i].classList.add("stripe--active");

            }else{
                all[i].classList.remove("stripe--active");
            }
        }
    }
    function addSliderlogic(){

        if(next === true && pos > maxVal){
            pos=pos+(val*-1);
            counter++;
            console.log(counter);
            setTimeout(function() {
                hideImage(counter);
            });
            hideTitle();
            setTimeout(function() {
                wheel.style.transform = "translateX("+pos+"%)";
                pos === "" ||pos === 0 ?  document.getElementById("previous").style.visibility = "hidden" : document.getElementById("previous").style.visibility = "visible";
                pos === -300 ?  document.getElementById("next").style.visibility = "hidden" : document.getElementById("next").style.visibility = "visible";

                document.getElementsByClassName("wheel__background")[0].style.transform = "translateX("+pos+"%)";
                navigationnnumber(counter);
                currentStripe(counter);
            }, 500);



        }else if(pos <= -100){
            counter=counter-1;
            pos=pos-(val*-1);
            wheel.classList.add("wheelIsMoving");
            hideImage(counter);
            hideTitle();
            setTimeout(function() {
            wheel.style.transform = "translateX("+pos+"%)";
            pos === "" ||pos === 0 ?  document.getElementById("previous").style.visibility = "hidden" : document.getElementById("previous").style.visibility = "visible";
                pos === -300 ?  document.getElementById("next").style.visibility = "hidden" : document.getElementById("next").style.visibility = "visible";
            document.getElementsByClassName("wheel__background")[0].style.transform = "translateX("+pos+"%)";
            wheel.classList.add("wheelIsMoving");

            navigationnnumber(counter);
            currentStripe(counter);
            }, 500);
        }

    }
}

function hideImage(){
    let all = document.getElementsByClassName("wheel-item__image");
    for(let i=0; i<all.length; i++) {
        if(all[i].classList.contains("wheel-item--show")){console.log("SHOW IS HERE"); all[i].classList.remove("wheel-item__image--show");}
        all[i].classList.add("wheel-item__image--hide");
        setTimeout(function() {
            all[i].classList.add("wheel-item__image--show");
            setTimeout(function() {
                all[i].classList.remove("wheel-item__image--hide");
                setTimeout(function() {
                    all[i].classList.remove("wheel-item__image--show");
                },200);
            },1400);
        }, 1300);
    }
}

function hideTitle(){
    let all = document.getElementsByClassName("wheel-item__title");
    for(let i=0; i<all.length-1; i++) {

        all[i].classList.add("wheel-item__title-hide");
        all[i+1].classList.add("wheel-item__title-hide");
        setTimeout(function() {
            all[i].classList.add("wheel-item__title-show");
            all[i+1].classList.add("wheel-item__title-show");
            setTimeout(function() {
                all[i].classList.remove("wheel-item__title-hide");
                all[i+1].classList.remove("wheel-item__title-hide");
                all[i].classList.add("wheel-item__title-show");
                all[i+1].classList.add("wheel-item__title-show");
            },1000);
        }, 900);
    }
}