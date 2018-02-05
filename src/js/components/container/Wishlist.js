import React, { Component } from "react";
import ReactDOM from "react-dom";


import { WishlistData } from "config/config"; 
import FormElementSelect from "presentational/FormElementSelect";
import AddedAt from "presentational/AddedAt";
import Paginate from "presentational/navElements/paginate"

class Wishlist extends Component {
  constructor() {
    super();
    this.state = {
        products:[],
        page: 0,
        limit: 0,
        paginate: "",
        update: new Date()
    };
    this.callData = this.callData.bind(this);
  };

  shouldComponentUpdate(nextProps){
    return true;
  }

  returnUrl(url){
    url = url.match(".[^\/]*")[0]
    return url;
  }

  callData(){
    WishlistData().then(res=>{
      this.setState({
          products:res.list,
          page: Number(this.props.match.params.id),
          limit: Number(res.limit),
          total: Number(res.total),
          url: this.returnUrl(this.props.match.url)
        });
    })
  }
  componentDidMount(){
    this.callData()
  };

  showing(){
    var page = this.state.page;
    page = (isNaN(page))? 1 : page;
    let currentEnd = (this.state.page === 1)? this.state.limit+1: page * (this.state.limit)+1;
    let currentStart = currentEnd - this.state.limit;
    currentEnd = currentEnd -1;
    currentEnd = (currentEnd > this.state.total)? this.state.total : currentEnd;
    return  <div >Exibindo <b>{currentStart}</b> até <b>{currentEnd}</b> de {this.state.total} </div>;
  }
  render() {
    const {products, page, limit, total, url} = this.state;
    const options =  {products, page, limit,total, url};

    let count = 0;
    return (
      <div className="container-fluid">
        {this.showing()}
          <div className="row">
          {products.map(({product, img, added})=>{
            return  <div  key={product+"-"+count++} className="col product__item">
                      <h5 className="product__title">{product}</h5>
                       <h6 className="product__added"><AddedAt value={added} /></h6>
                      <img src={img} alt={product} style={{width: "10rem"}}/>
                    </div>

          })}
          </div>
          <div className="row text-center">
               <Paginate {...options} update={this.callData}/>
          </div>
      </div>
    );
  }
}
export default Wishlist;

