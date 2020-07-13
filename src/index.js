import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './pages/App';
import * as serviceWorker from './serviceWorker';

// import {} from './actions/app-actions.js';

class FluxApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.increment = this.increment.bind(this);
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increase Count</button>
            </div>
        );
    }
}

ReactDOM.render((
    <React.StrictMode>
        <FluxApp/>
    </React.StrictMode>),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
