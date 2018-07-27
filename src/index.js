import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './template/Header';
import Menu from './template/Menu';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Menu />, document.getElementById('menu'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
