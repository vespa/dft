import React from "react";
const FormElementSelect = (attrs) =>{
    let count = 0;

    const {onChange, options, style, value} = attrs;
    const obj = { options, style, value, onChange};
    return <div style={style} className="row">
    			<div className="col-sm-6">
	    			<select {...obj} className="form-control">
	               		{options.map((item)=>{
	               			var name = (item.constructor === String)? item : (item)? "sim":"não";
	               			var value = item;
		               	 	return <option key={count++} value={value}>{name}</option>
		               		}
	                	)}
	           		 </select >
           		</div>
           		<div className="col-sm-2 ">
           			<button className="btn btn-primary">salvar</button>
           		</div>
           	</div>
}

export default FormElementSelect;