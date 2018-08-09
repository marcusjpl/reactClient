import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default class Menu extends Component {

    render() {
         return (

          <div className="col-sm-3 col-md-2 sidebar">

               <ul className="nav nav-sidebar">
                 {/*<li className="active"><a href="#">Overview <span className="sr-only">(current)</span></a></li>*/}
                 <li><Link to={'/'}><Glyphicon glyph="home" />   Inicial</Link></li>
                 <li><Link to={'/sistema'}><Glyphicon glyph="plus" />   Sistema</Link></li>
                 <li><Link to={'/ambiente'}><Glyphicon glyph="plus" />   Ambiente</Link></li>
               </ul>

          </div>

        )
    }
}
