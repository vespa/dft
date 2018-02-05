import React, { Component } from "react";
import ReactDOM from "react-dom";
import FormElementSelect from "presentational/FormElementSelect";
import {OnlyNumbers} from "helpers/CommonValidation";
import { PhoneTypes } from "helpers/CommomValues";
import PropTypes from "prop-types";


class FormAddNewPhone extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      buttonVisiblity: true,
      updateItemList:null,
      elem: null
    };
    this.switchVisibility = this.switchVisibility.bind(this);
    this.updateList = this.updateList.bind(this)
    this.tryUpdate = this.tryUpdate.bind(this);
  };

  componentDidMount(){
    this.setState({
      value: this.props.value,
      updateItemList: this.props.updateItemList || function(){}
    },()=>{
      this.baseState = this.state;
    })
  };

 switchVisibility(event){
    if(event) event.preventDefault();
    this.setState({
      buttonVisiblity: !this.state.buttonVisiblity
    });
    if(!this.state.buttonVisiblity) this.setState(this.baseState);
  };

  updateList(){
    const {value} = this.state;
    const obj = {value: value, "type" : "emaillist", title: "E-mail"}
    this.props.updateItemList(obj);
  }

  setStateValue(name, modifier){
    var that = this;
    return function(event){
      let obj = {}
      obj[name] = (modifier === undefined)? event.target.value : modifier(event.target.value);
      that.setState(obj);
    }
  }

  tryUpdate(e){
    e.preventDefault();
    this.updateList();
  }
  render() {
    const {value, buttonVisiblity} = this.state;
    const buttonStyle = {
      display: (buttonVisiblity)? "block":"none",
      cursor: "pointer"
    };
    const formStyle = {
      display: (!buttonVisiblity)? "block":"none"
    };
    return (
      <form onSubmit={this.tryUpdate}>
        <div  style={formStyle} className="form__row"> 
          <div className="row form-group">
            <div className="col">
            <h5>Adicione um novo email</h5>
            </div>
          </div>
          <div className="row form-group">
              <div className="col">
            <input 
              type="text" 
              onChange={this.setStateValue("value")}
              value={this.state.newPhone}
              className="form-control"
              required
               />
             </div>
            <div className="margin-h">
             <button className="btn btn-primary"> adiciona </button>
            </div>
             <div className="margin-h">
                <button  onClick={this.switchVisibility} className="btn btn-danger"> cancela </button>
            </div>
          </div>
        </div>
        <div className="row margin-v margin-h">
          <a role="button" href="#" style={buttonStyle} onClick={this.switchVisibility} className="btn btn-primary"> {value} </a>
        </div>
      </form>
    );
  }
}
export default FormAddNewPhone;

FormAddNewPhone.propTypes = {
   value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array
    ]).isRequired,
    updateItemList: PropTypes.func.isRequired
}

export function FormNewPhone({value}){
  const options = ["Fixo", "Celular"];

}
