import React, { Component } from "react";
import ReactDOM from "react-dom";

import FormUserProfile from 'container/FormUserProfile';
import AdressList from 'container/AdressList';
import Wishlist from 'container/Wishlist';


import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

const menu = [
    {
        name: "Perfil",
        path: "/",
        component: FormUserProfile
    },
    {
        name: "Endereços",
        path: "/adresses",
        component: AdressList
    },
    {
        name: "Wishlist",
        path: "/wishlist",
        component: Wishlist
    },
    {
        name: "Histórico de compras",
        path: "/history",
        component: AdressList
    }
]

class AppRouter extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount(){};
  render() {
    return (
      <Router>
        <div>
          <ul >
            {menu.map(({name, path}) => (<li key={'link_'+path}  ><Link to={path}>{name}</Link></li>) )}
          </ul>
          {menu.map(({path, component}) => (<Route exact path={path} component={component} key={'route_'+path} />) )}
          <Switch>
          <Route  path="/wishlist/:id" component={Wishlist}/>
          
          </Switch>
        </div>
      </Router>
    );
  }
}
export default AppRouter;


