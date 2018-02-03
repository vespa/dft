import React, { Component } from "react";
import ReactDOM from "react-dom";
import { AdressListData } from "config/config"; 

class AdressList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount(){
    AdressListData().then(res=> {
      console.log(res);
    })
  };
   
  render() {
    return (
      <div> work </div>
    );
  }
}
export default AdressList;


