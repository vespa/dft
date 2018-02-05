import React from "react";
const FormElementSelect = (attrs) =>{
    let count = 0;
    return <select {...attrs} className="form-control" >
               {attrs.options.map((item)=>{
               		 var name = (item.constructor === String)? item : (item)? "sim":"não";
               		 var value = item;
	               	 return <option key={count++} value={value}>{name}</option>
	               }
                )}
            </select>
}

export default FormElementSelect;