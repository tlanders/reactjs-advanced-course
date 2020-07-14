import React from "react";
import CountWidget from "../containers/CountWidget";

class ReduxApp extends React.Component {
    render() {
        return (
            <div>
                <CountWidget store={this.props.store}/>
            </div>
        );
    }
}

export default ReduxApp;