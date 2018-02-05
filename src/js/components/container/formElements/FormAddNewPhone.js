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
    this.tryUpdate          = this.tryUpdate.bind(this)
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
    if(event) event.preventDefault();
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
      <form className="needs-validation" onSubmit={this.tryUpdate}>
        <div  style={formStyle} className="form__row"> 
          <div className="row form-group">
          <div className="col">
            <h5>Adicione um novo telefone</h5>
            <FormElementSelect options={PhoneTypes} onChange={this.setNewPhoneType}  /> 
            </div>
          </div>
          <div className="row form-group">
              <div className="col">
            <input 
              type="text" 
              onKeyPress={OnlyNumbers} 
              onChange={this.setNewPhoneNumber}
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
    updatePhoneList: PropTypes.func.isRequired,
    elem: PropTypes.object.isRequired,
}

// export function FormNewPhone({value}){
//   const options = ["Fixo", "Celular"];

// }
