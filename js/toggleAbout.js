/**
 * toggleAbout
 * animations for the openeing of the about page
 */
let about = document.getElementById("toggleabout");
if(about){
    about.addEventListener("click", function(){
        document.getElementsByClassName("stripe__cont")[0].classList.add("absolute");

        let title = document.getElementsByClassName("wheel-item__image");
        for(let i=0; i<title.length; i++){
            document.getElementsByClassName("wheel-item__title")[i].classList.add("wheel-item__title--reversed");
            document.getElementsByClassName("wheel-item__title")[i+1].classList.add("wheel-item__title--reversed");
            document.getElementsByClassName("wheel-item__image")[i].classList.add("wheel-item__image--active");
        }

        document.getElementById("wheel").style.zIndex = "30";

        document.getElementsByClassName("about")[0].style.display = "block";
        document.getElementsByClassName("about")[0].classList.add("about-active");


        let aboutTwo = document.getElementsByClassName("wheel-about");
        for(let j=0; j<aboutTwo.length; j++){
            if(j != i){
                aboutTwo[j].style.display = "none";
            }
        }
    });
}


