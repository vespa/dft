import React, { Component } from "react";
import ReactDOM from "react-dom";
import { AdressListData } from "config/config"; 
import EditableField from 'container/EditableField';

class AdressList extends Component {
  constructor() {
    super();
    this.state = {
      adresses: []
    };
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

    return (billing)? "sim" : "não";
  }
  render() {
    const {adresses} = this.state;
    let count = 0;
    return (
      <div> 
        {adresses.map(item => {

          const {address, number, complement, type, zip_code, observations, billing_address} = item;

          return <div key={address+"_"+count++} >
                      <EditableField  
                        value={address}
                        type="text"
                        title="Endereço"
                      />
                      <EditableField  
                        value={number}
                        type="text"
                        title="número"
                      />
                      <EditableField  
                        value={complement}
                        type="text"
                        title="Complemento"
                      />
                      <EditableField  
                        value={type}
                        type="text"
                        title="Tipo"
                      />
                      <EditableField  
                        value={zip_code}
                        type="text"
                        title="CEP"
                      />
                      <EditableField  
                        value={observations}
                        type="text"
                        title="Observações"
                      />
                     <EditableField  
                        value={this.isBillingAdress(billing_address)}
                        type="text"
                        title="Endereço de cobrança"
                      />
                      
                      <hr/>
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


