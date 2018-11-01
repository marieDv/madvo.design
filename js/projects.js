/**
 *Projects.js
 */

let counter = 0;
scrollAnim();
window.addEventListener('scroll', function(){

});


function scrollAnim(){


}

function displayProjects(){
    let lastScrollTop = 0;
    window.addEventListener('scroll',function(event){
        let st = this.scrollY;
        if (st > lastScrollTop){
            setTimeout(function(){
                changeVisibility();
            }, 1500);

        } else {

        }
        lastScrollTop = st;
    });
}


function changeVisibility(){
    if(counter < 4){

    let projects = document.getElementsByClassName("project");
    let proj = document.getElementsByClassName("project")[counter];

    for(let i=0; i<projects.length; i++){
        if(projects[i] === proj){

            proj.style.visibility = "visible";
            console.log(projects[i].previousElementSibling);
            if(projects[i].previousElementSibling.classList.contains("project")){
                projects[i].previousElementSibling.style.visibility = "hidden";

            }
        }
    }
    counter++;
    }
}
