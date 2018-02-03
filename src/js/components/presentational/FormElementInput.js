import React from "react";
const FormElementInput = (attrs) => {
    return  <div>
                <input  {...attrs} />
                <button  style={attrs.style} onClick={attrs.onBlur} > save </button>
            </div>

};
export default FormElementInput;