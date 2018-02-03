import React, { Component } from "react";
import EditableField from 'container/EditableField';
import { CompleteData } from "config/config"; 
import UserProfile from 'forms/user-profile';
import FormElementImage from "presentational/FormElementImage";
import FormAddNewPhone from "container/formElements/FormAddNewPhone"

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
      return <FormElementImage value={values.value} key={values.value}/>
    }
    if(values.type=== "addNewPhone"){
      return <FormAddNewPhone value={values.value} key={values.value} updatePhoneList={this.updatePhoneList} elem={values} />
    }
    if(values.type=== "phonelist"){
      
    }
    return <EditableField key={values.value} {...values} removeline={()=>{
            this.removeLine(values)}
          }/>
  }

  render() {
    let count = 0;
    const {fields} = this.state;
    return (
      <div>
       {fields.map((values,i)=> {
         return this.getFieldByType(values)
       })}
      </div>
    );
  }
}
export default FormUserProfile;