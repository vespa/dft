import React from "react";
const FormElementTextArea = (attrs) => {
    return  <span>
                <textarea  {...attrs} />
                <button  style={attrs.style} onClick={attrs.onBlur} > save </button>
            </span>

};
export default FormElementTextArea;