import React from "react";

class ReduxApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = { count: 0 };

        this.incrementCount = this.incrementCount.bind(this);
    }

    incrementCount() {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return (
            <div>
                <p>Redux Count: {this.state.count}</p>
                <button onClick={this.incrementCount}>Increment Count</button>
            </div>
        );
    }
}

export default ReduxApp;