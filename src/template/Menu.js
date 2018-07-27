import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Ambiente from '../view/Ambiente';
import Sistema from '../view/Sistema';
import Inicial from '../view/Inicial';

export default class Menu extends React.Component {

    render() {
         return (

           <Router>
           <div className="col-sm-3 col-md-2 sidebar">
             <ul className="nav nav-sidebar">
               <li className="active"><a href="#">Overview <span className="sr-only">(current)</span></a></li>
               <li><Link to={'/'}>Inicial</Link></li>
               <li><Link to={'/ambiente'}>Ambiente</Link></li>
               <li><Link to={'/sistema'}>Sistema</Link></li>
               <li><Link to={'/propriedade'}>Propriedade</Link></li>
               <li><Link to={'/swagger'}>Swagger</Link></li>
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

             <Switch>
               <Route exact path="/" component={Inicial} />
               <Route path="/ambiente" component={Ambiente} />
               <Route path="/sistema" component={Sistema} />
             </Switch>

           </div>
         </Router>
        )
    }
}
