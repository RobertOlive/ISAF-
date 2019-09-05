import React, {Component} from "react"
import Player from "../Player/Player";

class MainCont extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    <Player episodes={this.props.episodes}/>
                </div>
            </div>
        )
    }
}

export default MainCont;