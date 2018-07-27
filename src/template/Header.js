import React, { Component } from 'react';
import { Navbar, Jumbotron, Button, Badge, ButtonToolbar } from 'react-bootstrap';
import logo from '../logo.svg';

export default class Header extends React.Component {

    render() {
         return (
           <nav className="navbar navbar-inverse navbar-fixed-top">
             <div className="container-fluid">
               <div className="navbar-header">

                 <a className="navbar-brand" href="#">Project name</a>
                 <img src={logo} className="App-logo" alt="logo"/>

               </div>
               <div id="navbar" className="navbar-collapse collapse">
                 <ul className="nav navbar-nav navbar-right">
                  {/* <li><a href="#">Settings</a></li>
                   <li><a href="#">Profile</a></li> */}
                   <li><a href="#">Logout</a></li>
                 </ul>
               </div>
             </div>
           </nav>
        )
    }
}
