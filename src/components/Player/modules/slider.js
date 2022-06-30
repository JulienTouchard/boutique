const sliderTransition = (currentTrack) => {
    sliderImgNext.src = playlist[currentTrack].cover;
    //effet 1 sur l'opacité
    //sliderImgOriginal.style.opacity = 0;
    //effet 2 deplacement
    sliderImgOriginal.style.left = "-100%"
    sliderImgNext.style.opacity = 0;
    // attendre .4s, changer la src de l'image original
    // et remettre l'opacité à 1
    setTimeout(() => {
        sliderImgOriginal.src = playlist[currentTrack].cover;
        sliderImgOriginal.style.transition = "all 0s";
        //effet 1 sur l'opacité
        //sliderImgOriginal.style.opacity = 1;
        //effet 2 deplacement
        sliderImgOriginal.style.left = "0%"
        sliderImgOriginal.style.transition = "all .4s";
    }, 400)
}
const slider = () => {
    // au demarage de mon appli
    const sliderImgOriginal = document.createElement("img");
    globalThis.sliderImgOriginal = sliderImgOriginal
    const sliderDiv = document.querySelector(".slider");
    sliderDiv.append(sliderImgOriginal);
    sliderDiv.style.position = "relative";
    sliderDiv.style.overflow = "hidden";
    sliderImgOriginal.style.position = "absolute";
    sliderImgOriginal.style.top = 0;
    sliderImgOriginal.style.left = 0;
    sliderImgOriginal.style.transition = "all .4s";
    sliderImgOriginal.src = playlist[currentTrack].cover;
    const sliderImgNext = document.createElement("img");
    globalThis.sliderImgNext = sliderImgNext;
    sliderImgNext.src = playlist[currentTrack].cover;
    sliderDiv.prepend(sliderImgNext);
    next.addEventListener(
        "click",
        function () {
            // etape 3 : limité index à la taille de mon tableau -1
            if (currentTrack === playlist.length - 1) {
                currentTrack = 0;
                sliderTransition(currentTrack);
            } else {
                // 2e etape : j'incrémente mon index
                //i = i+1;
                currentTrack++; // incrémentation
                // je dois réaffecter src avec la nouvelle valeur de index
                sliderTransition(currentTrack);
            }
        }
    )
    prev.addEventListener(
        "click",
        function () {

            // etape 3 : limité index à la taille de mon tableau -1
            if (currentTrack === 0) {
                currentTrack = playlist.length - 1;
                sliderTransition(currentTrack);
            } else {
                // 2e etape : j'incrémente mon index
                //i = i+1;
                currentTrack--; // incrémentation
                // je dois réaffecter src avec la nouvelle valeur de index
                sliderTransition(currentTrack);
            }
        }
    )
    hammerSlider.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
    hammerSlider.on("swipeleft swiperight", function (ev) {
        //console.log(ev.type + " gesture detected.");
        if(ev.type === "swiperight"){
            if (currentTrack === 0) {
                currentTrack = playlist.length - 1;
                sliderTransition(currentTrack);
            } else {
                currentTrack--; // incrémentation
                sliderTransition(currentTrack);
            }
        }
        if(ev.type === "swipeleft"){
            if (currentTrack === playlist.length - 1) {
                currentTrack = 0;
                sliderTransition(currentTrack);
            } else {
                currentTrack++;
                sliderTransition(currentTrack);
            } 
        }
    });
}
export { slider }