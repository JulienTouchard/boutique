const volumeManager = () => {
    audio.volume = 0.5;
    volumeDown.addEventListener("click", () => {
        console.log(audio.volume);
        //audio.volume = audio.volume - 0.05;
        audio.volume -= 0.05;
    })
    volumeUp.addEventListener("click", () => {
        console.log(audio.volume);
        //audio.volume = audio.volume + 0.05;
        audio.volume += 0.05;
    })
}
export { volumeManager }