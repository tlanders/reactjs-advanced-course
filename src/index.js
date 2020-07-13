import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './pages/App';
import * as serviceWorker from './serviceWorker';
import {incrementActions} from "./actions/app-actions";
import TodoStore from "./stores/count-store";

class FluxApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: TodoStore.getCount()
        };
        this.increment = this.increment.bind(this);
        this._onChange = this._onChange.bind(this);
    }

    increment() {
        incrementActions.incrementCount();
    }

    componentDidMount() {
        TodoStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        TodoStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState({
            count: TodoStore.getCount()
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
