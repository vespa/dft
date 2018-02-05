import React from "react";
import {OnlyNumbers} from "helpers/CommonValidation";

const FormElementPhone = ({type, value, onChange, style, options, removeline}) => {
	var attrs = {type, value, onChange, style, options}
    return  <div className="row">
                <div className="col-6">
               		<input  {...attrs} onKeyPress={OnlyNumbers} className="form-control" required/>
                </div>
                <div className="margin-h">
                	 <button  style={attrs.style} className="btn btn-primary"> salvar </button>
                </div>
				<div className="margin-h">
                	 <button  style={attrs.style} onClick={removeline}  className="btn btn-danger"> remove </button>
                </div>
            </div>
};
export default FormElementPhone;