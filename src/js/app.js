import React, { Component } from "react";
import ReactDOM from "react-dom";
import CSS from '../css/main.scss'
import 'babel-polyfill'

const wrapper = document.getElementById("root");

const app = ()=>{
	const itemClass = "app__item";
	return 	<div className="app">
				works!
			</div>
}
wrapper ? ReactDOM.render(app(), wrapper) : false;