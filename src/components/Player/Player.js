
import React from "react";
import { playlist } from "./modules/playlist.js";
import { slider } from "./modules/slider.js";
import { volumeManager } from "./modules/volumeManager.js";
import { timeManager } from "./modules/timeManager.js";
import { infoManager } from "./modules/infoManager.js";
import Hammer from "hammerjs"
import PlayerContext from "../../PlayerContext.js";
import "./Player.css";

class Player extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTrack: 0,
            next: document.querySelector(".next"),
            prev: document.querySelector(".prev"),
            playPause: document.querySelector(".playPause"),
            volumeDown: document.querySelector(".volumeDown"),
            volumeUp: document.querySelector(".volumeUp"),
            time: document.querySelector(".time"),
            sliderDiv: document.querySelector(".slider"),
            hammerSlider: new Hammer(this.sliderDiv),
            playlist: playlist,
            infoManager: infoManager,
            audio: new Audio(this.playlist[this.currentTrack].mp3)
        }
    }
    // declaration des
    play = () => {
        this.state.audio.play();
        document.querySelector(".playPause img").src = "./assets/img/pause-circle-regular.svg"
    }
    pause = () => {
        this.state.audio.pause();
        document.querySelector(".playPause img").src = "./assets/img/play-circle-solid.svg"
    }
    audioManager = () => {
        this.state.playPause.addEventListener("click", () => {
            if (this.state.audio.paused) {
                this.play();
    
            } else {
                this.pause();
            }
        })
        // bouton next
        this.state.next.addEventListener("click", () => {
            infoManager();
            this.pause();
            console.log(this.state.currentTrack);
            this.setState({audio:new Audio(this.state.playlist[this.state.currentTrack].mp3)})
            this.play();
    
        })
        // bouton prev
        this.state.prev.addEventListener("click", () => {
            infoManager();
            this.pause();
            console.log(this.state.currentTrack);
            this.setState({audio:new Audio(this.state.playlist[this.state.currentTrack].mp3)})
            this.play();
        })
        this.state.hammerSlider.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
        this.state.hammerSlider.on("swipeleft swiperight", function (ev) {
            //console.log(ev.type + " gesture detected.");
            if (ev.type === "swiperight") {
                infoManager();
                this.pause();
                console.log(this.state.currentTrack);
                this.setState({audio:new Audio(this.state.playlist[this.state.currentTrack].mp3)})
                this.play();
            }
            if (ev.type === "swipeleft") {
                infoManager();
                this.pause();
                console.log(this.state.currentTrack);
                this.setState({audio:new Audio(this.state.playlist[this.state.currentTrack].mp3)})
                this.play();
            }
        });
    }
    render() {
        return (
            <PlayerContext.Provider value={this.state}>
                <div className="player">
                    <div className="tesla">TESLA</div>
                    <div className="slider">
                    </div>
                    <div className="title"></div>
                    <div className="nav">
                        <div className="prev">
                            <img src="./assets/img/step-backward-solid.svg" alt="" />
                        </div>
                        <div className="playPause">
                            <img src="./assets/img/play-circle-solid.svg" alt="" />
                        </div>
                        <div className="next">
                            <img src="./assets/img/step-forward-solid.svg" alt="" />
                        </div>
                    </div>
                    <div className="time">00:00 | 00:00</div>
                    <div className="navVolume">
                        <div className="volumeDown">
                            <img src="./assets/img/volume-down-solid.svg" alt="" />
                        </div>
                        <div className="volumeUp">
                            <img src="./assets/img/volume-up-solid.svg" alt="" />
                        </div>
                    </div>
                    <div className="info"></div>
                </div>
            </PlayerContext.Provider>
        )
    }

}
export default Player
