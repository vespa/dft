import React from "react";
const FormElementInput = (attrs) => {
    return  <span>
                <input  {...attrs} />
                <button  style={attrs.style} onClick={attrs.onBlur} > save </button>
            </span>

};
export default FormElementInput;