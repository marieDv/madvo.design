let counter = 0;
// displayProjects();
scrollAnim();
window.addEventListener('scroll', function(){
    // alert("scroll");
});

//
// window.addEventListener('scroll',function(event) {
//
//     console.log("ollllaa");
//     let sections = document.getElementsByClassName("section");
//     for (let i = 0; i < sections.length - 1; i++) {
//
//         let s = document.getElementById("section" + i);
//         let sy = s.scrollY;
//         console.log(s);
//
//
//         if (sy === 0) {
//             console.log(s + "TOP BAM YEAH");
//         }
//
//
//     }
// });

function scrollAnim(){
    console.log("they see mee scrollin, they hatin");
    // let sections = document.getElementsByClassName("section");
    // console.log("ollllaa");
    // window.addEventListener('scroll',function(event) {
    //
    //     console.log("ollllaa");
    //     for (let i = 0; i < sections.length - 1; i++) {
    //
    //         let s = document.getElementById("section" + i);
    //         let sy = s.scrollY;
    //             console.log(s);
    //
    //
    //             if (sy === 0) {
    //                 console.log(s + "TOP BAM YEAH");
    //             }
    //
    //
    //     }
    // });

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
                // alert("PICKLERICK");
                projects[i].previousElementSibling.style.visibility = "hidden";

            }
        }
    }
    counter++;
    }
}


//on scroll ->
//change visibility of project with current id
//reset id to the first one if no next child