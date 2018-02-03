import React from "react";

const onlyNumbers = (event) => {
	if(/\D/.test(event.key)) event.preventDefault();
}
const FormElementPhone = ({type, value, onChange, onBlur, style, options, removeline}) => {
	var attrs = {type, value, onChange, onBlur, style, options}
    return  <div>
                <input  {...attrs} onKeyPress={onlyNumbers}/>
                <button  style={attrs.style} onClick={attrs.onBlur} > save </button>
                <button  style={attrs.style} onClick={removeline} > remove </button>
            </div>

};
export default FormElementPhone;