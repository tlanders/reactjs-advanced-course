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

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button onClick={this.props.goToAbout}>Go to About</button>
                <button onClick={this.props.goToHome}>Go to Home</button>
            </div>
        );
    }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        view: <Home/>
    };
    this.goToAbout = this.goToAbout.bind(this);
    this.goToHome = this.goToHome.bind(this);
  }

    goToHome() {
        this.setState({
            view: <Home/>
        });
    }

  goToAbout() {
      this.setState({
          view: <About/>
      });
  }

  render() {
    return (
        <div className="App">
            {this.state.view}
            <Nav goToAbout={this.goToAbout} goToHome={this.goToHome}/>
        </div>
    );
  }
}

export default App;
