import React, { Component } from "react";
import ReactDOM from "react-dom";
import { WishlistData } from "config/config"; 
import FormElementSelect from "presentational/FormElementSelect";
import PropTypes from "prop-types";



const AddedAt =({value}) =>{
  const normalize = (value) => {
    return (Number(value) <=9)? "0"+ value: value;
  }
  const date = new Date(value);
  const day = date.getDate();
  const month = date.getMonth()
  const year = date.getFullYear();
  const hour = date.getHours();
  const minutes = date.getMinutes()
  const monthList = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro","dezembro"];
  return <div>Adicionado em {day} de {monthList[month]} de {year} às {normalize(hour)}: {normalize(minutes)} </div>
}

class Wishlist extends Component {
  constructor() {
    super();
    this.state = {
        products:[],
        page: 0,
        limit: 0
    };
  };

  componentDidMount(){
    WishlistData().then(res=>{
      this.setState({
          products:res.list,
          page: Number(res.page),
          limit: Number(res.limit)
        });
    })
  };
  showing(){
    const currentEnd = (this.state.page === 1)? this.state.limit+1: this.state.page * (this.state.limit)+1;
    const currentStart = currentEnd - this.state.limit;
    return (this.state.page > 0)? <div>exibindo {currentStart} até {currentEnd-1} </div> :"";
  }
  render() {
    const {products} = this.state;
    let count = 0;
    return (
      <div>
        {this.showing()}
        {products.map(({product, img, added})=>{
          return  <div  key={product+"-"+count++}>
                    <h2>{product}</h2>
                    <img src={img} alt={product} />
                    <AddedAt value={added} />
                  </div>

        })}
      </div>
    );
  }
}
export default Wishlist;

