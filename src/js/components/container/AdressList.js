import React, { Component } from "react";
import ReactDOM from "react-dom";
import { AdressListData } from "config/config"; 
import EditableField from 'container/EditableField';
import FormAddNewAddress from "container/formElements/FormAddNewAddress"
import { AddressTypeOptions, BillingOptions } from "helpers/CommomValues";
import Modal from "presentational/navElements/Modal"


class AdressList extends Component {
  constructor() {
    super();
    this.state = {
      adresses: []
    };
    this.removeLine = this.removeLine.bind(this);
    this.updateAddressList = this.updateAddressList.bind(this);
  }

  createList(items){
    let arr = this.state.adresses.slice();
    items.map(item => arr.push(item));
    this.setState({
      adresses: arr
    });
  }

  componentDidMount(){
    AdressListData().then(res=> {
      this.createList(res);
    })
  };

  isBillingAdress(billing){
    return (billing)? BillingOptions[0] :BillingOptions[1] ;
  }

  updateAddressList(nItem){
    const newState = this.state.adresses.slice();
    newState.unshift(nItem);
    this.setState({adresses: newState});
  }

  removeLine(item){
    var that = this;
    return function(){
      const newState = that.state.adresses.slice();
      if (newState.indexOf(item) > -1) {
        newState.splice(newState.indexOf(item), 1);
        that.setState({adresses: newState})
      }
    }
  }

  printObservations(observations){
    return (observations.replace(/\s/g, "")==="")?""
          : <EditableField  
              value={observations}
              type="textarea"
              title="Observações"
            /> 
  }
  render() {
    const {adresses} = this.state;
    let count = 0;
    return (
      <div> 
        <div className="product__list">
          <FormAddNewAddress value="Adicionar novo endereço" updateAddressList={this.updateAddressList}/>
        </div>
        {adresses.map(item => {

          const {address, number, complement, type, zip_code, observations, billing_address} = item;
          const options = AddressTypeOptions;
          const billingOptions = BillingOptions;
          let modalId = "modalAddress"+count;

          return <div key={address+"_"+count++} className="product__list">
                    <div className="row">
                      <div className="col-sm">
                        <EditableField  
                          value={address}
                          type="text"
                          title="Logradouro"
                        />
                      </div>
                        <div className="col-sm-4">
                        <EditableField  
                          value={number}
                          type="text"
                          title="número"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm">
                        <EditableField  
                          value={complement}
                          type="text"
                          title="Complemento"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm">

                        <EditableField  
                          value={type}
                          type="select"
                          title="Tipo"
                          options={options}
                        />
                      </div>
                      <div className="col-sm-4">
                        <EditableField  
                          value={zip_code}
                          type="text"
                          title="CEP"
                        />
                      </div>
                    </div>
                      {this.printObservations(observations)}
                     <EditableField  
                        value={this.isBillingAdress(billing_address)}
                        type="select"
                        title="Endereço de cobrança"
                        options={billingOptions}
                      />
                      <Modal action={this.removeLine(item)} id={modalId} message={"Confirma remoção do endereço em "+address+"?"} />
                      <button className="btn btn-danger margin-v" data-toggle="modal" data-target={"#"+modalId} >Excluir Endereço</button>
                 </div>;
        })}
      </div>
    );
  }
}
export default AdressList;



//
        // <FormElement 
        //     style={inputStyle} 
        //     onChange={this.handleChange} 
        //     onBlur={this.switchVisibility} 
        //     value={name} 
        //     type={type} 
        //     options={options}
        //     removeline = {removeline}
        //     />


