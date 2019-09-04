import React, {Component} from "react";
import Caster from "./Caster"
import logo from "./images/logo.png"
import "./Hero.css"

class Hero extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="header row">
                <div className="col-3">
                    <img className="logo"src ={logo}></img>
                </div>

                <div className="col">
                    <div className="row tagline">
                        <span className="col"><h2>Culture, Politics, and Philosophy... from those who know best?</h2></span>
                    </div>
                    <div className="row justify-content-around">
                        {this.props.hosts.map((element, i) => {
                            return <Caster person = {element} key={i}/>
                        })}
                        {/* <Caster person = {this.props.rob}/>
                        <Caster person = {this.props.colin}/>
                        <Caster person = {this.props.ben}/> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero;