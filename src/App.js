import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tone from 'tone';

class App extends Component {
  render() {
    //create a synth and connect it to the master output (your speakers)
    var synth = new Tone.Synth().toMaster();

    //Play a major scale starting on middle C
    synth.triggerAttackRelease("C4", "8n", 1.0);
    synth.triggerAttackRelease("D4", "8n", 1.25);
    synth.triggerAttackRelease("E4", "8n", 1.5);
    synth.triggerAttackRelease("F4", "8n", 1.75);
    synth.triggerAttackRelease("G4", "8n", 2.0);
    synth.triggerAttackRelease("A4", "8n", 2.25);
    synth.triggerAttackRelease("B4", "8n", 2.5);
    synth.triggerAttackRelease("C5", "8n", 2.75);
    synth.triggerAttackRelease("B4", "8n", 3.0);
    synth.triggerAttackRelease("A4", "8n", 3.25);
    synth.triggerAttackRelease("G4", "8n", 3.5);
    synth.triggerAttackRelease("F4", "8n", 3.75);
    synth.triggerAttackRelease("E4", "8n", 4.0);
    synth.triggerAttackRelease("D4", "8n", 4.25);
    synth.triggerAttackRelease("C4", "8n", 4.5);

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
