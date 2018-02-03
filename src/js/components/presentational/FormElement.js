import React from "react";
import PropTypes from "prop-types";
import FormElementInput from "./FormElementInput";
import FormElementSelect from "./FormElementSelect";
import FormElementPhone from "./FormElementPhone";

const FormElement = (attrs) => {
    switch(attrs.type){
        case "text" : 
            return <FormElementInput {...attrs} />;
        case "cpf" : 
            return <FormElementInput {...attrs} />;
        case "phonelist" : 
            return <FormElementPhone {...attrs} />;
        case "select" : 
            return <FormElementSelect {...attrs} />;
        default:
           return <FormElementInput {...attrs} />;
    }
}
  
FormElement.propTypes = {
   type: PropTypes.string.isRequired,
   value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array
    ]).isRequired,
   onChange: PropTypes.func.isRequired,
   onBlur: PropTypes.func.isRequired,
   options: PropTypes.array,
}

export default FormElement;