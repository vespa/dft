import React from "react";
import Modal from "presentational/navElements/Modal"


const FormElementPhone = ({type, value, onChange, style, options, removeline}) => {
	var attrs = {type, value, onChange, style, options}
    var time = new Date().getTime();
    var id = "removeEmail" + time;
    return  <div className="row">
                <div className="col-6">
               		<input  {...attrs} className="form-control" required/>
                </div>
                <div className="margin-h">
                	 <button  style={attrs.style} className="btn btn-primary"> salvar </button>
                </div>
				<div className="margin-h">
                	 <button  style={attrs.style} data-toggle="modal" data-target={"#"+id}  className="btn btn-danger"> remover </button>
                </div>
                <Modal action={removeline} id={id} message={"Confirma remoção do email "+value+"?"} />
            </div>
};
export default FormElementPhone;