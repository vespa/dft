import React, { Component } from "react";
import ReactDOM from "react-dom";

import FormUserProfile from 'container/FormUserProfile';
import AdressList from 'container/AdressList';
import Wishlist from 'container/Wishlist';
import OrderHistory from 'container/OrderHistory';


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
        component: OrderHistory
    }
]
class AppRouter extends Component {
  constructor() {
    super();
    this.state = {
      menuItems:[]
    };
  }
  componentDidMount(){
    this.setState({menuItems: menu})
  };
  hideMenu(){
    $("#navbarNavDropdown").collapse('hide');
    setTimeout(()=>{
      $(".nav-item").each((i, item) => {
          let men= $(item);
          men.removeClass("active");
          if (men.find("a").first().attr("href") === location.pathname) men.addClass("active")
      })
    })
  }
  activeMenu(path){
    return (location.pathname === path)? " active ":"";
  }
  render() {
    const {menuItems} = this.state
    return (
      <Router>
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <a className="navbar-brand" href="#">Dados do Usuário</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              {menuItems.map(({name, path}) => (<li className={"nav-item" + this.activeMenu(path)} key={'link_'+path}  ><Link to={path} onClick={this.hideMenu} className="nav-link" >{name}</Link></li>) )}
            </ul>
          </div>
        </nav> 
        {menuItems.map(({path, component}) => (<Route exact path={path} component={component} key={'route_'+path} />) )}
        <Route  path="/wishlist/:id" component={Wishlist}/>

        </div>
      </Router>
    );
  }
}
export default AppRouter;


