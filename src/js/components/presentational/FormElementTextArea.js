import React from "react";
const FormElementTextArea = (attrs) => {
    return  <span>
                <textarea className="form-control"  {...attrs} />
                <button  style={attrs.style} className="btn btn-primary margin-v"> save </button>
            </span>

};
export default FormElementTextArea;