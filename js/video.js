var figure = $(".video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {
    $('video', this).get(0).play();
}

function hideVideo(e) {
    $('video', this).get(0).pause();
}

var image = document.getElementsByClassName("wheel-item__image")[0].offsetWidth;
// console.log(image);
changeSize();
window.addEventListener('resize', function () {
    image = document.getElementsByClassName("wheel-item__image")[0].offsetWidth;
    image -= 12;
    changeSize();
})

function changeSize(){
let stripes = document.getElementsByClassName("stripe");
    document.getElementsByClassName("stripe__line")[0].style.width = image+"px";
for(let i=0; i<stripes.length-1; i++){
    stripes[i].style.marginRight = (image/3)+"px";
}
}