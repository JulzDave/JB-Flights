import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<div><div id="background-wrap">
<div className="x1">
    <div className="cloud"></div>
</div>

<div className="x2">
    <div className="cloud"></div>
</div>

<div className="x3">
    <div className="cloud"></div>
</div>

<div className="x4">
    <div className="cloud"></div>
</div>

<div className="x5">
    <div className="cloud"></div>
</div>
</div><App /></div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
