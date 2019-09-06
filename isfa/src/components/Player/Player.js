import React, {Component} from "react";
import "./Player.css"

class Player extends Component {
    state = {
        currentEp: false
    }

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

    componentDidUpdate() {
        console.log(this.props)
        if (!this.state.currentEp) {
            this.setState({currentEp: this.props.episodes[0]})
        }
    }

    render() {
        console.log(this.state.currentEp);
        return(
            <div className="player row">
                <div className="playBtn">
                    <div id="triangle" className="triangle" onClick={this.playClick}></div>
                </div>
                <div className="currentTitle col">
                    {this.props.episodes? this.props.episodes[0].title: "loading episode..."}
                    <br/>
                    <progress id="progressBar" value="22" max="100"></progress>
                </div>
                <audio id="audio" src={this.props.episodes? this.props.episodes[0].enclosure.link: "none"}/>
            </div>
        )
    }
}

export default Player;