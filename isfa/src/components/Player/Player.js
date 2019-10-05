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

    initProgressBar() {
        document.getElementById("progressBar").value=document.getElementById("audio").currentTime
    }

    render() {
        console.log(this.state.currentEp);
        return(
            <div className="row">
                <div className="col-12 player">
                    <div className="playBtn">
                        <div id="triangle" className="triangle" onClick={this.playClick}></div>
                    </div>
                    <div className="currentTitle col">
                        {this.state.currentEp? this.state.currentEp.title: "loading episode..."}
                        <br/>
                        <progress 
                            id="progressBar" 
                            value="0" max={this.state.currentEp? this.state.currentEp.enclosure.duration: "100"}
                        />
                    </div>
                    <audio 
                        id="audio" src={this.state.currentEp? this.state.currentEp.enclosure.link:"none"}
                        onTimeUpdate={this.initProgressBar}
                        loop={false}
                    />
                </div>
                <div className="col-12 trackList">
                    {this.props.episodes.map((episode)=> {
                        return (<div>{episode.title}</div>)
                    })}
                </div>
            </div>
        )
    }
}

export default Player;