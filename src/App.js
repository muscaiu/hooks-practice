import React, { Component } from 'react';

// import 'App.css';
import UseState from 'UseState';
import UseEffect from 'UseEffect';
import SearchGithub from 'CustomHook';

class App extends Component {
  render() {
    return (
      <div className="App">

        <UseState />

        <UseEffect />

        <SearchGithub />

      </div>
    );
  }
}

export default App;
