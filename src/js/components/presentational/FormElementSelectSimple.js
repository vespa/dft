import React from "react";
const FormElementSelectSimple = (attrs) =>{
    let count = 0;

    const {onChange, options, style, value} = attrs;
    const obj = { options, style, value, onChange};
    return 			<select {...obj} className="form-control">
	               		{options.map((item)=>{
	               			var name = (item.constructor === String)? item : (item)? "sim":"não";
	               			var value = item;
		               	 	return <option key={count++} value={value}>{name}</option>
		               		}
	                	)}
	           		 </select >

}

export default FormElementSelectSimple;