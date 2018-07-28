import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default class Menu extends React.Component {

    render() {
         return (

          <div className="col-sm-3 col-md-2 sidebar">

               <ul className="nav nav-sidebar">
                 {/*<li className="active"><a href="#">Overview <span className="sr-only">(current)</span></a></li>*/}
                 <li><Link to={'/'}>Inicial</Link></li>
                 <li><Link to={'/ambiente'}>Ambiente</Link></li>
                 <li><Link to={'/sistema'}>Sistema</Link></li>
               </ul>

          </div>

        )
    }
}
