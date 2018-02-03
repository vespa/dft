import React, { Component } from "react";
import ReactDOM from "react-dom";
import FormUserProfile from 'container/FormUserProfile';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const AppRouter = () => (
  <Router>
    <div>
      <ul >
        <li><Link to="/">Perfil</Link></li>
        <li><Link to="/adressess">Endereços</Link></li>
      </ul>

      <Route exact path="/" component={FormUserProfile}/>
    </div>
  </Router>
)

module.exports =AppRouter;