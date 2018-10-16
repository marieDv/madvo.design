console.log("buttons")

function onClick(){
    let button = document.getElementsByClassName("button--swipe");

    for(let i=0; i<button.length; i++){
        button[i].addEventListener("click", function(){
            let anim = document.getElementsByClassName("button__anim")[i];
            anim.classList.add("button__anim-active");

        });
    }
}
function resetOnScroll(){

    let box = document.getElementsByClassName("box--expansion")[0];
    let projCont = document.getElementsByClassName("project__cont")[0];
    let projInfo = document.getElementsByClassName("project__info")[0];
    let pb = document.getElementsByClassName("box--pb")[0];


            projCont.classList.remove("project__cont--expanded");
            box.classList.remove("box--expansion-expanded");
            pb.classList.remove("box--pb--hide");
            projInfo.classList.remove("project__info--toggle");

}



function expansion(){
/** button expansion **/
let exp = document.getElementById("lis-expansion");
let box = document.getElementsByClassName("box--expansion")[0];
let projCont = document.getElementsByClassName("project__cont")[0];
let projInfo = document.getElementsByClassName("project__info")[0];
let pb = document.getElementsByClassName("box--pb")[0];
let fp = document.getElementById("fullpage");

let count = 0;
exp.addEventListener('click', function(){
    if(count % 2 === 0){
        //stroke
        let svg = document.getElementsByClassName("box--pb__stroke-svg")[0];
        // svg.classList.add("box--pb__stroke-svg-onload");
        // svg.classList.remove("box--pb__stroke-svg-hide");

        projCont.classList.remove("project__cont--expanded");
        box.classList.remove("box--expansion-expanded");
        pb.classList.remove("box--pb--hide");
        projInfo.classList.remove("project__info--toggle");
        fp.classList.remove("fullpage-show");
        count++;
    }else {
        //stroke
        // let svg = document.getElementsByClassName("box--pb__stroke-svg")[0];
        // svg.classList.add("box--pb__stroke-svg-hide");
        // svg.classList.remove("box--pb__stroke-svg-onload");

        box.classList.add("box--expansion-expanded");
        projCont.classList.add("project__cont--expanded");
        pb.classList.add("box--pb--hide");
        fp.classList.add("fullpage-show");
        setTimeout(function(){
            projInfo.classList.add("project__info--toggle");
        }, 1500);

        count++;
    }
});
}

function scroll(){
/** button scroll **/
let exp = document.getElementById("lis-scroll");
let box = document.getElementsByClassName("box--scroll")[0];
let count = 0;
exp.addEventListener('click', function(){
    if(count % 2 === 0){

        box.classList.remove("box--scroll-expanded");
        count++;
    }else {
        box.classList.add("box--scroll-expanded");
        count++;
    }
});
}