import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
const Paginate = ({page, limit, total, url, update})=>{
    const total_pages = Math.ceil(total / limit);
    page = (isNaN(page))? 1 : page;
    const list = [];
    const range = 2;
    let start_at = page - range;
    let end_at = start_at + range * 2;
    if (end_at > total_pages) {
      end_at = total_pages;
      start_at = end_at - range *2;
    }
    if((start_at <= 0)){
      start_at = 1;
      end_at = start_at + range *2;
    }
    for(let x=start_at;x<=end_at; x++ ){
      list.push(<li className={(page === x)?"page-item active" : "page-item"}   key={x}><a onClick={update} className="page-link" href={url+"/"+x}>{x}</a></li>)
    }
    return <nav aria-label="Page navigation" style={paginateStyle} >
          <Router>
          <ul className="pagination text-center">
              {list}
          </ul>
          </Router>
        </nav>
}
const paginateStyle = {
    margin: "1rem auto"
}

export default Paginate;