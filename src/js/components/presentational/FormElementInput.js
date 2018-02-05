import React from "react";
const FormElementInput = (attrs) => {
    return  <div className="row">
                <div className="col-6">
               	<input  {...attrs} className="form-control"/>
                </div>
                <div className="padding-v">
                	 <button className="btn btn-primary" style={attrs.style} onClick={attrs.onBlur} > save </button>
                </div>
            </div>

};
export default FormElementInput;