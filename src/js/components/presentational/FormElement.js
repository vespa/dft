import React from "react";
import PropTypes from "prop-types";
import FormElementInput from "./FormElementInput";
import FormElementSelect from "./FormElementSelect";
import FormElementPhone from "./FormElementPhone";
import FormElementTextArea from "./FormElementTextArea";

const FormElement = ({type, value, onChange, onBlur, style, options, removeline}) => {
    var common = {type, value, onChange, style, onBlur, options}
    switch(type){
        case "text" : 
            return <FormElementInput {...common} />;
        case "textarea":
            return <FormElementTextArea  {...common} />;
        case "cpf" : 
            return <FormElementInput {...common} />;
        case "phonelist" : 
            return <FormElementPhone {...common} removeline={removeline}/>;
        case "select" : 
            return <FormElementSelect {...common} />;
        default:
           return <FormElementInput {...common} />;
    }
}
FormElement.propTypes = {
   type: PropTypes.string.isRequired,
   value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
      PropTypes.bool
    ]).isRequired,
   onChange: PropTypes.func.isRequired,
   onBlur: PropTypes.func.isRequired,
   options: PropTypes.array,
}

export default FormElement;