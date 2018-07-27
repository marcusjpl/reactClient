import React, { Component } from 'react';
import { Navbar, Jumbotron, Button, Badge, ButtonToolbar } from 'react-bootstrap';

export default class Menu extends React.Component {

    render() {
         return (
           <div className="col-sm-3 col-md-2 sidebar">
             <ul className="nav nav-sidebar">
               <li className="active"><a href="#">Overview <span className="sr-only">(current)</span></a></li>
               <li><a href="#">Home</a></li>
               <li><a href="#">Ambiente</a></li>
               <li><a href="#">Sistema</a></li>
               <li><a href="#">Propriedade</a></li>
               <li><a href="#">Swagger</a></li>
             </ul>
          {/*   <ul className="nav nav-sidebar">
               <li><a href="">Nav item</a></li>
               <li><a href="">Nav item again</a></li>
               <li><a href="">One more nav</a></li>
               <li><a href="">Another nav item</a></li>
               <li><a href="">More navigation</a></li>
             </ul>
             <ul className="nav nav-sidebar">
               <li><a href="">Nav item again</a></li>
               <li><a href="">One more nav</a></li>
               <li><a href="">Another nav item</a></li>
             </ul>*/}
           </div>
        )
    }
}
