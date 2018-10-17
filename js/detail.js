 let item = document.getElementsByClassName("wheel-item__image");

    let back = document.getElementsByClassName("wheel-item__content__button");
    if(back){
    toggleBack();
    }
    function toggleBack(){
        for(let i=0; i<back.length+2; i++) {
            if(back[i]){
            back[i].addEventListener("click", function () {
                document.getElementsByClassName("stripe__cont")[0].classList.remove("absolute");



                    if( document.getElementsByClassName("wheel-item__content")[i-1]){document.getElementsByClassName("wheel-item__content")[i-1].classList.remove("wheel-item__content--active");}

                document.getElementById("wheel").style.zIndex = "10";
                document.getElementById("wheel").overflowX = "visible";
                    if(document.getElementsByClassName("wheel-item")[i-1]){
                        document.getElementsByClassName("wheel-item")[i-1].classList.remove("wheel-item--active");
                    }
                   if(item[i]){ item[i].classList.remove("wheel-item__image--active");}
                for(let j=0; j<document.getElementsByClassName("wheel-item__image").length; j++){
                    document.getElementsByClassName("wheel-item__image")[j].classList.remove("wheel-item__image--active");
                    document.getElementsByClassName("wheel-item__image")[j].classList.add("wheel-item__image--show");
                    setTimeout(()=>{
                        document.getElementsByClassName("wheel-item__image")[j].classList.remove("wheel-item__image--show");
                    }, 200);
                }
                for(let j=0; j<document.getElementsByClassName("wheel-item__title").length; j++){
                    document.getElementsByClassName("wheel-item__title")[j].classList.remove("wheel-item__title--reversed");
                    document.getElementsByClassName("wheel-item__title")[j].classList.add("wheel-item__title-show");
                }
                document.getElementsByClassName("wheel-item")[i].style.paddingRight = "50%";
                document.getElementsByClassName("about")[0].style.display = "none";
            //
            });
            }
        }
    }


toggle(document.getElementsByClassName("wheel-preview__text"));
toggle(item);
function toggle(item){

    for(let i=0; i<item.length; i++){

        item[i].addEventListener("click", function(){
            console.log("why")
            document.getElementsByClassName("stripe__cont")[0].classList.add("absolute");
            document.getElementsByClassName("wheel-item__title")[i].classList.add("wheel-item__title--reversed");
            document.getElementsByClassName("wheel-item__title")[i+1].classList.add("wheel-item__title--reversed");
            document.getElementById("wheel").style.zIndex = "50";
            document.getElementById("wheel").overflowX = "hidden";
            document.getElementsByClassName("wheel-item__image")[i].classList.add("wheel-item__image--active");
            document.getElementsByClassName("wheel-item")[i].classList.add("wheel-item--active");



            setTimeout(function() {
                document.getElementsByClassName("wheel-item__content")[i].classList.add("wheel-item__content--active");
            }, 100);
        });
    }
}







 // $(function() {
 //     new Dragdealer('image-carousel', {
 //         steps: 4,
 //         speed: 0.3,
 //         loose: true
 //     });
 // })
