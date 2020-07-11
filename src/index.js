import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import App from './pages/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
    <React.StrictMode>
        <HashRouter>
            <Route path='/' component={App}/>
            <Route path='/home' component={Home}/>
            <Route path='/about' component={About}/>
        </HashRouter>
    </React.StrictMode>),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
