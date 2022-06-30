const infoManager = ()=>{
    const title = document.querySelector(".title")
    title.innerHTML = playlist[currentTrack].title
    +" - "+playlist[currentTrack].artist;
    const info = document.querySelector(".info");
    info.innerHTML = playlist[currentTrack].genre
    +" - "+playlist[currentTrack].annee
    +" - "+playlist[currentTrack].description
}
export {infoManager}