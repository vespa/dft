import React from "react";
import {OnlyNumbers} from "helpers/commonValidation";

const FormElementPhone = ({type, value, onChange, onBlur, style, options, removeline}) => {
	var attrs = {type, value, onChange, onBlur, style, options}
    return  <div>
                <input  {...attrs} onKeyPress={OnlyNumbers}/>
                <button  style={attrs.style} onClick={attrs.onBlur} > save </button>
                <button  style={attrs.style} onClick={removeline} > remove </button>
            </div>

};
export default FormElementPhone;