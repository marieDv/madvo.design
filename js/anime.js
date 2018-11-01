/**
 * Anime
 * start animation - using the library anime.js
 */
var once= false;
$('.background-title').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

clickEvents();
function clickEvents(){
    document.getElementById("next").addEventListener("click", function() {
        setTimeout(function() {
            animateAddInfo();
        }, 1200);
    animateWallTitle();
});
    let back = document.getElementsByClassName("wheel-item__content__button");
    for(let j=0; j<back.length; j++){
        back[j].addEventListener("click", function(){
            setTimeout(function() {
            }, 1200);
            animateWallTitle();
        });
    }

    document.getElementById("previous").addEventListener("click", function() {

        setTimeout(function() {
            animateAddInfo();
            animateWallTitle();
        }, 1200);
        // animateBGText();
    });
}
function animateBGText(next){
    anime.timeline({loop: false})
      .add({
            targets: '.background-title .letter',
            translateX: [120, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1500,
            delay: function (el, i) {
                return 500 + 30 * i;
            }

});
}
function animateWallTitle(){

anime.timeline({loop: false})
    .add({
        targets: '.wheel-item__maintitle .letter',
        translateY: [-100,0],
        easing: "easeOutExpo",
        duration: 1400,
        delay: function(el, i) {
            return 30 * i;
        }
    }).add({
    targets: '.wheel-item__maintitle',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000

});}
function animateAddInfo(){
    let item = document.getElementsByClassName("wheel-item__title");
    for(let i=0; i<item.length; i++){
        item[i].classList.remove("wheel-item__title-show");
        item[i].classList.add("wheel-item__title-hide");
    }

    setTimeout(()=>{
        for(let i=0; i<item.length; i++){
            item[i].classList.remove("wheel-item__title-hide");
            item[i].classList.add("wheel-item__title-show");
        }
    }, 900)

