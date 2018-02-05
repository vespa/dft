import React from "react";
import {OnlyNumbers} from "helpers/CommonValidation";

const FormElementPhone = ({type, value, onChange, onBlur, style, options, removeline}) => {
	var attrs = {type, value, onChange, onBlur, style, options}
    return  <div className="row">
                <div className="col-6">
               		<input  {...attrs} onKeyPress={OnlyNumbers} className="form-control" />
                </div>
                <div className="margin-h">
                	 <button  style={attrs.style} onClick={attrs.onBlur} className="btn btn-primary"> save </button>
                </div>
				<div className="margin-h">
                	 <button  style={attrs.style} onClick={removeline}  className="btn btn-danger"> remove </button>
                </div>
            </div>

    

};
export default FormElementPhone;