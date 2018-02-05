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
    this.tryUpdate = this.tryUpdate.bind(this);
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
    if(event) event.preventDefault();
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
  }
  
  tryUpdate(e){
    e.preventDefault();
    this.updateList();
    $('#modalAddAddress').modal('toggle');
  }
  formContent(){
    return 
  }
  render() {
    const {value, buttonVisiblity} = this.state;
    const buttonStyle = {
      cursor: "pointer"
    };
    return (
      <form className="needs-validation" onSubmit={this.tryUpdate}>
         <div>
            <div className="modal fade bd-example-modal-lg" id="modalAddAddress" tabIndex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="h">Adicionar endereço</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                   <div className="row form-group">
                    <div className="col-sm-4">
                      <label className="field__label">Tipo</label>
                      <FormElementSelect 
                          options={AddressTypeOptions}  
                          onChange={this.setStateValue("type")}
                      /> 
                    </div>
                    <div className="col">
                    <label className="field__label">Logradouro</label>
                      <input 
                        type="text" 
                        onChange={this.setStateValue("address")}
                        value={this.state.address}
                        className="form-control"
                        required
                         />
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="col-sm">
                      <label className="field__label">Número</label>
                      <input 
                        type="text" 
                        onChange={this.setStateValue("number")}
                        value={this.state.number}
                        className="form-control"
                        required
                         />
                    </div>
                    <div className="col-sm">
                        <label className="field__label">Complemento</label>
                        <input 
                          type="text" 
                            onChange={this.setStateValue("complement")}
                            value={this.state.complement}
                            className="form-control"
                            required
                           />
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="col">
                        <label className="field__label">CEP</label>
                        <input 
                          type="text" 
                            onChange={this.setStateValue("zip_code")}
                            value={this.state.zip_code}
                            className="form-control"
                            required
                           />
                    </div>
                    <div className="col-sm-6">
                        <label className="field__label">Endereço de cobrança</label>
                            <FormElementSelect 
                                options={BillingOptions}  
                                onChange={this.setStateValue("billing_address", Boolean)}
                            /> 
                      </div>
                  </div>
                  <div className="row form-group">
                      <div className="col-sm">
                        <label className="field__label">Observações</label>
                          <textarea 
                          type="text" 
                          onChange={this.setStateValue("observations")}
                          value={this.state.observations}
                          className="form-control"
                         />

                    </div>
                  </div>
                   </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancela</button>
                    <button type="button" className="btn btn-primary" type="submit">Confirma</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <a style={buttonStyle} href="#" role="button" data-toggle="modal" data-target="#modalAddAddress"   className="btn btn-primary"> {value} </a>

      </form>
    );
  }
}
export default FormAddNewAddress;

FormAddNewAddress.propTypes = {
   value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array
    ]).isRequired,
    updateAddressList: PropTypes.func.isRequired
}



