import React, { Component } from "react";

class EditableField extends Component {
  constructor() {
    super();
    this.state = {
        name: "Test name",
        inputVisible: false,
        labelVisible: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.switchVisibility = this.switchVisibility.bind(this);
  };

  componentDidMount(){

  }

  handleChange(event){
    this.setState({name: event.target.value});
    event.preventDefault();
  }
  
  switchVisibility(){
    this.setState({inputVisible: !this.state.inputVisible});
    this.setState({labelVisible: !this.state.labelVisible});
  }

  render() {
    const {name, labelVisible, inputVisible} = this.state;
    const labelStyle = {
      display: (labelVisible)?'block':'none',
      cursor: "pointer"
    };
    const inputStyle = {
      display: (inputVisible)?'block':'none',
    }
    return (
      <div>
 			  <div 
          className="field__current-value"
          style={labelStyle}
          onClick={this.switchVisibility}
          >
          {name}
        </div>
        <input type='text' value={name} style={inputStyle} onChange={this.handleChange} onBlur={this.switchVisibility} />
      </div>
    );
  }
}


export default EditableField;