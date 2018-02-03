import React from "react";
const FormElementSelect = (attrs) =>{
    let count = 0;
    return <select {...attrs}>
               {attrs.options.map((item)=>
                    <option key={count++} value={item}>{item}</option>
                )}
            </select>
}

export default FormElementSelect;