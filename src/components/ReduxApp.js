import React from "react";
import {incrementCount} from "../actions";

class ReduxApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = { count: 0 };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('handleClick calling incrementCount');
        incrementCount();
        // this.setState({
        //     count: this.state.count + 1
        // });
        // TODO - dispatch to store
    }

    render() {
        return (
            <div>
                <p>Redux Count: {this.state.count}</p>
                <button onClick={this.handleClick}>Increment Count</button>
            </div>
        );
    }
}

export default ReduxApp;