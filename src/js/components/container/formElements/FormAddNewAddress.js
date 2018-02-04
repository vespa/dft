import React, { Component } from "react";
import ReactDOM from "react-dom";
import FormElementSelect from "presentational/FormElementSelect";
import {OnlyNumbers} from "helpers/CommonValidation";
import { AddressTypeOptions, BillingOptions } from "helpers/CommomValues";
import PropTypes from "prop-types";

class FormAddNewAddress extends Component {
  constructor() {
    super();
    this.state = {
        address:"", 
        number:"", 
        complement:"", 
        type:"", 
        zip_code:"", 
        observations:"", 
        billing_address:"",
        updateAdressList: null,
        buttonVisiblity: true,
        value: ""
    };
    this.setStateValue = this.setStateValue.bind(this);
    this.switchVisibility = this.switchVisibility.bind(this);
    this.updateList = this.updateList.bind(this);
  };

  componentDidMount(){
    this.setState({
      value: this.props.value,
      updateAddressList: this.props.updateAddressList || function(){},
      elem: this.props.elem
    }, ()=>{
      this.baseState = this.state;
    })

  };

  switchVisibility(event){
    this.setState({
      buttonVisiblity: !this.state.buttonVisiblity
    });
    if(!this.state.buttonVisiblity) this.setState(this.baseState);
  };


  setStateValue(name, modifier){
    var that = this;
    return function(event){
      let obj = {}
      obj[name] = (modifier === undefined)? event.target.value : modifier(event.target.value);
      that.setState(obj);
    }
  }

  updateList(){
    const {address, number, complement, type, zip_code, observations, billing_address} = this.state;
    const obj = {address, number, complement, type, zip_code, observations, billing_address}
    this.props.updateAddressList(obj);
    this.switchVisibility();

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
      <div>
        <div  style={formStyle} > 
          <label className="field__label">Tipo</label>
          <FormElementSelect 
              options={AddressTypeOptions}  
              onChange={this.setStateValue("type")}
          /> 

          <label className="field__label">Endereço</label>
          <input 
            type="text" 
            onChange={this.setStateValue("address")}
            value={this.state.address}
             />

          <label className="field__label">Número</label>
          <input 
            type="text" 
            onChange={this.setStateValue("number")}
            onKeyPress= {OnlyNumbers}
            value={this.state.number}
             />

          <label className="field__label">Complemento</label>
          <input 
            type="text" 
            onChange={this.setStateValue("complement")}
            value={this.state.complement}
             />

          <label className="field__label">CEP</label>
          <input 
            type="text" 
            onChange={this.setStateValue("zip_code")}
            value={this.state.zip_code}
             />

          <label className="field__label">Observações</label>
          <textarea 
            type="text" 
            onChange={this.setStateValue("observations")}
            value={this.state.observations}
             />



         <label className="field__label">Endereço de cobrança</label>
                <FormElementSelect 
                    options={BillingOptions}  
                    onChange={this.setStateValue("billing_address", Boolean)}
                /> 

          <button  onClick={this.updateList} > adiciona </button>
          <button  onClick={this.switchVisibility} > cancela </button>
        </div>
        <button style={buttonStyle} onClick={this.switchVisibility} > {value} </button>
      </div>
    );
  }
}
export default FormAddNewAddress;

FormAddNewAddress.propTypes = {
   value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array
    ]).isRequired,
   // updateAdressList: PropTypes.func.isRequired,
   // elem: PropTypes.object.isRequired,
}

