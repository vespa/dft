import React, { Component } from "react";
import ReactDOM from "react-dom";
import CSS from '../css/main.scss'
import 'babel-polyfill'
import FormUserProfile from 'container/FormUserProfile';
//
import 'mock/userProfile.json'

const wrapper = document.getElementById("root");

const app = ()=>{
	const itemClass = "app__item";
	return 	<div className="app">
				<FormUserProfile/>
			</div>
}
wrapper ? ReactDOM.render(app(), wrapper) : false;