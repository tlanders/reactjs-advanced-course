import React from "react";
import {BrowserRouter, Link, Route} from "react-router-dom";
import {Switch} from 'react-router';
import Home from "./Home";
import About from "./About";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <header>
                        <h1>App default page</h1>
                        <nav>
                            <Link to={'/home'}>Home</Link> <Link to={'/about'}>About</Link>
                        </nav>
                    </header>

                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/home' component={Home}/>
                        <Route path='/about' component={About}/>
                    </Switch>
                </BrowserRouter>

                <footer>
                    <p>The Footer</p>
                </footer>
            </div>
        )
    }
}

export default App;