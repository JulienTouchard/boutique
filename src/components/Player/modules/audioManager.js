

const play = () => {

    audio.play();
    document.querySelector(".playPause img").src = "./assets/img/pause-circle-regular.svg"
}
const pause = () => {
    audio.pause();
    document.querySelector(".playPause img").src = "./assets/img/play-circle-solid.svg"
}
const audioManager = () => {
    playPause.addEventListener("click", () => {
        if (audio.paused) {
            play();

        } else {
            pause();
        }
    })
    // bouton next
    next.addEventListener("click", () => {
        infoManager();
        pause();
        console.log(currentTrack);
        audio = new Audio(playlist[currentTrack].mp3);
        play();

    })
    // bouton prev
    prev.addEventListener("click", () => {
        infoManager();
        pause();
        console.log(currentTrack);
        audio = new Audio(playlist[currentTrack].mp3);
        play();

    })
    hammerSlider.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
    hammerSlider.on("swipeleft swiperight", function (ev) {
        //console.log(ev.type + " gesture detected.");
        if (ev.type === "swiperight") {
            infoManager();
            pause();
            console.log(currentTrack);
            audio = new Audio(playlist[currentTrack].mp3);
            play();
        }
        if (ev.type === "swipeleft") {
            infoManager();
            pause();
            console.log(currentTrack);
            audio = new Audio(playlist[currentTrack].mp3);
            play();
        }
    });
}
export {
    play,
    pause,
    audioManager
}
