import React, {Component} from "react";
import Caster from "../Caster/Caster"
import logo from "../images/logo.png"
import "./Hero.css"

class Hero extends Component {
    render() {
        return (
            <div className="header row">
                <div className="col-lg-3 col-sm-6">
                    <img className="logo"src ={logo} alt="logo"></img>
                </div>

                <div className="col tagCards">
                    <div className="row tagline">
                        <span className="col"><h2>Culture, Politics, and Philosophy... from those who know best?</h2></span>
                    </div>
                    <div className="row justify-content-around">
                        {this.props.hosts.map((element, i) => {
                            return <Caster person = {element} key={i}/>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero;