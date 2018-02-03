import React, { Component } from "react";
import FormElement from 'presentational/FormElement'
class EditableField extends Component {
  constructor() {
    super();
    this.state = {
        name: "",
        title: "",
        type: "",
        options: [],
        inputVisible: false,
        labelVisible: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.switchVisibility = this.switchVisibility.bind(this);

  };
  componentDidMount(){
    this.setState({
      name: this.props.value,
      title: this.props.title,
      type: this.props.type,
      options: this.props.options,
      removeline: this.props.removeline
    });
  }

  handleChange(event){
    event.preventDefault();
    this.setState({name: event.target.value});
  }

  switchVisibility(event){
    this.setState({inputVisible: !this.state.inputVisible});
    this.setState({labelVisible: !this.state.labelVisible});
  }
  
  render() {
    const {name, labelVisible, inputVisible, inputValue, title, type, options, removeline} = this.state;
    const labelStyle = {
      display: (labelVisible)? "block":"none",
      cursor: "pointer"
    };
    const inputStyle = {
      display: (inputVisible)? "block":"none"
    };
    return (
      <div>
        <h5>{title}</h5>
 			  <div 
          className="field__current-value"
          style={labelStyle}
          onClick={this.switchVisibility}
          >
          {name}
        </div>
        <FormElement 
            style={inputStyle} 
            onChange={this.handleChange} 
            onBlur={this.switchVisibility} 
            value={name} 
            type={type} 
            options={options}
            removeline = {removeline}
            />

      </div>
    );
  }
}


export default EditableField;