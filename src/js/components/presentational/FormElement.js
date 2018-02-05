import React from "react";
import PropTypes from "prop-types";
import FormElementInput from "./FormElementInput";
import FormElementSelect from "./FormElementSelect";
import FormElementPhone from "./FormElementPhone";
import FormElementTextArea from "./FormElementTextArea";
import FormElementEmail from "./FormElementEmail";

const FormElement = ({type, value, onChange, style, options, removeline}) => {
    var common = {type, value, onChange, style, options}
    switch(type){
        case "text" : 
            return <FormElementInput {...common} />;
        case "textarea":
            return <FormElementTextArea  {...common} />;
        case "cpf" : 
            return <FormElementInput {...common} />;
        case "phonelist" : 
            return <FormElementPhone {...common} removeline={removeline}/>;
        case "emaillist" : 
            return <FormElementEmail {...common} removeline={removeline}/>;
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
   options: PropTypes.array,
}

export default FormElement;