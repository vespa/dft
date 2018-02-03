import React from "react";

const onlyNumbers = (event) => {
	if(/\D/.test(event.key)) event.preventDefault();
}
const removeLine = (e) => {
	var parent = e.target.parentNode;
	parent.parentNode.removeChild(parent);
}
const FormElementPhone = (attrs) => {
    return  <div>
                <input  {...attrs} onKeyPress={onlyNumbers}/>
                <button  style={attrs.style} onClick={attrs.onBlur} > save </button>
            </div>

};
export default FormElementPhone;