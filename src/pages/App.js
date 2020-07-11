import React from "react";
import {Link} from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <header>
                    <h1>App default page</h1>
                    <nav>
                        <Link to={'/home'}>Home</Link>
                        <Link to={'/about'}>About</Link>
                    </nav>
                </header>
                {this.props.children}
                <footer>
                    <p>The Footer</p>
                </footer>
            </div>
        )
    }
}

export default App;