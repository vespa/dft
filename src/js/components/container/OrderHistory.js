import React, { Component } from "react";
import ReactDOM from "react-dom";
import { OrderHistoryData } from "config/config"; 
import AddedAt from "presentational/AddedAt";
import Paginate from "presentational/navElements/paginate";

class OrderHistory extends Component {
  constructor() {
    super();
    this.state = {
      history : []
    };
    this.callData = this.callData.bind(this);
  };

  callData(){
    OrderHistoryData().then(res=>{
      console.log(res[0])
      this.setState({
          history :res,
        });
    })
  }
  componentDidMount(){
    this.callData()
  };

  render() {
    let count =0;
    const {history} = this.state;
    return (
      <div className="container-fluid">
          {history.map(({purchase_date, currency, shipping, product_list})=>{
            return <div key={"hist"+count++} className="product__list">
                      <div className="row">
                        <div className="col"> <h5 className="product__title">Pedido</h5> </div>
                      </div>
                      <div className="row">
                        <h6 className="product__added col" ><AddedAt value={purchase_date} /></h6>
                      </div>
                      <ProductLine 
                        type="Frete"
                        value ={currency +" "+ shipping}
                      />
                      <div className="product">
                        {product_list.map(({current_price, product, reference})=>{
                          return    <div key={"prod"+count++}>
                                      <hr/>
                                      <ProductLine 
                                        type="Produto"
                                        value ={product}
                                      />
                                      <ProductLine 
                                        type="Preço"
                                        value ={currency + " "+current_price}
                                      />
                                      <ProductLine 
                                        type="Referência"
                                        value ={reference}
                                      />
                                    </div>

                        })}
                    

                      </div>
                    </div>
                    
          })}
      </div>
    );
  }
}

const ProductLine = ({type, value}) => {
  return <div className="row">
          <div className="col-sm-2"> <b>{type}:</b> </div>
          <div className="col">{value} </div>
        </div>
}
export default OrderHistory;