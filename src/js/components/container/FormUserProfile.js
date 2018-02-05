import React, { Component } from "react";
import EditableField from 'container/EditableField';
import { CompleteData } from "config/config"; 
import FormElementImage from "presentational/FormElementImage";
import FormAddNewPhone from "container/formElements/FormAddNewPhone";


class FormUserProfile extends Component {
  constructor() {
    super();
    this.state = {
        fields: [],
        inputValue: ""
    };
    this.removeLine = this.removeLine.bind(this);
    this.updatePhoneList = this.updatePhoneList.bind(this);
  }

  componentDidMount(){
    CompleteData().then(res =>{
        let field = this.state.fields.slice(0);
        UserProfile.map(item => {
          if(typeof res[item.name] === "undefined" || res[item.name].length === 0) {
              field.push(item);
              return true;
          }
          item.value = res[item.name];

          if(item.type === "phonelist"){
            item.value.map(phone => {
              let obj = Object.assign({}, item);
              obj.value = phone.number;
              obj.title += " "+phone.type;
              field.push(obj);
            });
            return true;
          }
          field.push(item);
       });
       this.setState({fields: field});
    })
  };

  removeLine(item){
   const newState = this.state.fields.slice();
    if (newState.indexOf(item) > -1) {
      newState.splice(newState.indexOf(item), 1);
      this.setState({fields: newState})
    }
  };

  updatePhoneList(item, nItem){
    const newState = this.state.fields.slice();
    // VALIDAR SE JÁ EXISTE
    if (newState.indexOf(item) > -1) {
      newState.splice(newState.indexOf(item), 0, nItem);
      this.setState({fields: newState})
    }
  }
  getFieldByType(values){
    if(values.type=== "image"){
      return <FormElementImage value={values.value} />
    }
    if(values.type=== "addNewPhone"){
      return <FormAddNewPhone value={values.value} updatePhoneList={this.updatePhoneList} elem={values} />
    }
    return <EditableField {...values} removeline={()=>{
            this.removeLine(values)}
          }/>
  }

  render() {
    let count = 0;
    const {fields} = this.state;
    return (
      <div className="profile__container">
      <div className="row">
        <div className="col"> <h1 className="product__title">Perfil de usuário</h1> </div>
       </div>
  
       {fields.map((values,i)=> {
         return <div  key={values.value+i} >{this.getFieldByType(values)}</div>
       })}
   
      </div>
    );
  }
}
const UserProfile = [
  {name: "avatar" , type: "image", title: "Avatar"},
  {name: "name" , type: "text", title: "Nome"},
  {name: "sex", type: "select", title: "Sexo", options: ["Feminino", "Masculino"]},
  {name: "cpf", type: "cpf",   title: "CPF"},
  {name: "phones", type: "phonelist",   title: "Telefone"},
  {name: "addPhone", type: "addNewPhone",   value: "Adicionar novo telefone"}
];
export default FormUserProfile;