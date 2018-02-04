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
      updatePhoneList: null,
      newPhone: "",
      phoneType: PhoneTypes[0],
      elem: null
    };
    this.switchVisibility   = this.switchVisibility.bind(this);
    this.setNewPhoneType    = this.setNewPhoneType.bind(this);
    this.setNewPhoneNumber  = this.setNewPhoneNumber.bind(this);
    this.updateList         = this.updateList.bind(this);
  };

  componentDidMount(){
    this.setState({
      value: this.props.value,
      updatePhoneList: this.props.updatePhoneList || function(){},
      elem: this.props.elem
    },()=>{
      this.baseState = this.state;
    })
  };

 switchVisibility(event){
    this.setState({
      buttonVisiblity: !this.state.buttonVisiblity
    });
    if(!this.state.buttonVisiblity) this.setState(this.baseState);
  };


  setNewPhoneNumber(event){
    this.setState({
      newPhone: event.target.value
    })
  }

  setNewPhoneType(event){
    this.setState({
      phoneType: event.target.value
    })
  }

  updateList(){
    var obj = {
      value:  this.state.newPhone,
      title: "Telefone " +  this.state.phoneType,
      name: "phones",
      type: "phonelist"
    }
    this.props.updatePhoneList(this.state.elem, obj);
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
          <FormElementSelect options={PhoneTypes} onChange={this.setNewPhoneType}  /> 
          <input 
            type="text" 
            onKeyPress={OnlyNumbers} 
            onChange={this.setNewPhoneNumber}
            value={this.state.newPhone}
            ref={el => this.inputTitle = el}
             />
          <button  onClick={this.updateList} > adiciona </button>
          <button  onClick={this.switchVisibility} > cancela </button>
        </div>
        <button style={buttonStyle} onClick={this.switchVisibility} > {value} </button>
      </div>
    );
  }
}
export default FormAddNewPhone;

FormAddNewPhone.propTypes = {
   value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array
    ]).isRequired,
}

// export function FormNewPhone({value}){
//   const options = ["Fixo", "Celular"];

// }
