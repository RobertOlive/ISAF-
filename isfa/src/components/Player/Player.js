import React, {Component} from "react";
import "./Player.css"

class Player extends Component {
    render() {
        console.log(this.props);
        return(
            <div className="player row">
                <div className="playBtn">
                    <div className="triangle"></div>
                </div>
                <div className="currentTitle col">{this.props.episodes? this.props.episodes[0].title: "loading episode..."}</div>
            </div>
        )
    }
}

export default Player;