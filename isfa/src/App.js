import React, {Component} from 'react';
import './App.css';
import Hero from "./components/Hero";
import logo from './components/images/logo.png';

class App extends Component {
  state = {
    hosts: [
      {
        profilePic: logo,
        name: "Ben Householder",
        info: "Placeholder. Ben gets to write his info, unlike Colin."
      },
      {
        profilePic: logo,
        name: "Colin Householder",
        info: "Happy. Moderate. Optimist. These words don't describe him. Call him the Socialist Butterfly. Wants to seize the means of happiness."
      },
      {
        profilePic: logo,
        name: "Rob Olive",
        info: "Tall. Handsome. The Host of this podcast. Wannabe Web Dev. Pretty much running this thing."
      },
    ]
  }
  render() {
    let xhttp = new XMLHttpRequest();
    console.log(xhttp);
    xhttp.open("GET", "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fispeakforamerica.libsyn.com%2Frss", true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(JSON.parse(this.response).items);
      }
    };
    return (
      <div className="App container-fluid">
        <Hero {...this.state}/>
      </div>
    );
  }
}

export default App;
