import React from 'react';
import './App.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <p>Welcome to the home page</p>
        </div>
    )
  }
}

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <p>About us</p>
        </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="App">
          <Home/>
          <About/>
        </div>
    );
  }
}

export default App;
