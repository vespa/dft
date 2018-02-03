import React from "react";
import PropTypes from "prop-types";

const FormElement = ({value, onChange, onBlur, style, type, options}) => {
	console.log(options)
	const attrs = {value, onChange, onBlur, style, type};
	const input = () => <input  {...attrs} />;
	const select = (options) =>{
		let count = 0;
		return <select {...attrs}>
			       {options.map((item)=>
			        	<option key={count++} value={item}>{item}</option>
			        )}
				</select>
	}
	switch(type){
		case "text" : 
			return input();
		case "cpf" : 
			return input();
		case "select" : 
			return select(options)
		default:
			return input()
	}
}
  
;



FormElement.propTypes = {
   type: PropTypes.string.isRequired,
   value: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
   onBlur: PropTypes.func.isRequired,
}

export default FormElement;