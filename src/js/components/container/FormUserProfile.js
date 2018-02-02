import React, { Component } from "react";
import EditableTextField from 'container/EditableTextField';
import { CompleteData } from "config/config"; 

class FormUserProfile extends Component {
  constructor() {
    super();
    this.state = {

    };
  }
  componentDidMount(){
    CompleteData().then(res =>{
      console.log(res)
    })
  }
  render() {
    return (
      <div>
        <EditableTextField />
      </div>
    );
  }
}
export default FormUserProfile;