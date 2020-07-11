import React from "react";
import {Link} from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>App default page</p>
                <Link to={'/home'}>Home</Link>
                <Link to={'/about'}>About</Link>
            </div>
        )
    }
}

export default App;