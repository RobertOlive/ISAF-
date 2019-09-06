import React, {Component} from "react";
import "./Player.css"

class Player extends Component {

    playClick () {
        if (document.getElementsByClassName("pause").length===0) {
            document.getElementById("triangle").classList.add("pause")
            document.getElementById("triangle").classList.remove("triangle");
            document.getElementById("audio").play();
        } else if (document.getElementsByClassName("pause").length>0) {
            document.getElementById("triangle").classList.remove("pause")
            document.getElementById("triangle").classList.add("triangle")
            document.getElementById("audio").pause();
        }
    }

    render() {
        console.log(this.props.episodes? this.props.episodes[0].enclosure.link:"hey");
        return(
            <div className="player row">
                <div className="playBtn">
                    <div id="triangle" className="triangle" onClick={this.playClick}></div>
                </div>
                <div className="currentTitle col">{this.props.episodes? this.props.episodes[0].title: "loading episode..."}</div>
                <audio id="audio" src={this.props.episodes? this.props.episodes[0].enclosure.link: "none"}/>
            </div>
        )
    }
}

export default Player;