import logo from './logo.svg';
import './App.css';

import React from 'react';
import {HuePicker} from 'react-color';

class Color extends React.Component {
  state = {
    background: '#fff',
  };

  handleChange = (color) => {
    this.setState({ background: color.hex });
  };

  render() {
    return (
      <div style={{width: '100vw', height: '100vh', backgroundColor: this.state.background, display: 'flex', justifyContent: 'center'}}>
        <div style={{position: 'fixed', bottom: 0}}>
          <HuePicker
            color={ this.state.background }
            onChange={ this.handleChange }
          />
        </div>
      </div>
      
    );
  }
}

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Color/>
    </div>
  );
}

export default App;
