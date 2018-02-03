import React, { Component } from "react";
import EditableField from 'container/EditableField';
import { CompleteData } from "config/config"; 

class FormUserProfile extends Component {
  constructor() {
    super();
    this.state = {
        fields: [],
        inputValue: ""
    };
    this.getFieldType = this.getFieldType.bind(this);
  }

  componentDidMount(){
    CompleteData().then(res =>{
       configFields.map(item => {
          item.value = res[item.name];
          let field = this.state.fields.slice(0);
          field.push(item);
          this.setState({fields: field});
       })
    })
  };

  getFieldType(item){
    return <div>{item}</div>
  }
  
  render() {
    let count = 0;
    const {fields} = this.state;
    return (
      <div>
       {fields.map((values)=>
        <EditableField key={count++} {...values} />
        )}
      </div>
    );
  }
}
// colocar num import
const configFields = [
  {name: "name" , type: "text", title: "Nome"},
  {name: "sex", type: "select", title: "Sexo", options: ["Feminino", "Masculino"]},
  {name: "cpf", type: "cpf",   title: "CPF"}
];
export default FormUserProfile;