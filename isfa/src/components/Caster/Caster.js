import React, {Component} from "react";
import "./Caster.css"

class Caster extends Component {
    render() {
        return (
            <div className = "col profileCard">
                <div className = "row">
                    <img className ="col-12 profilePic" src={this.props.person.profilePic} alt="profile pic"></img>
                    <span className="col-12 name">{this.props.person.name}</span>
                    <div></div>
                </div>
                <div className="row">
                    <div className="col info">
                        {this.props.person.info}
                    </div>
                </div>
            </div>
        )
    }
}

export default Caster;