import React, { Component } from "react";
import ReactDOM from "react-dom";
import FormUserProfile from 'container/FormUserProfile';
import {
  BrowserRouter as Router,
  Route,
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
        component: FormUserProfile
    },
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
          
        </div>
      </Router>
    );
  }
}
export default AppRouter;


