import React, { Component } from "react";
import EditableField from 'container/EditableField';
import { CompleteData } from "config/config"; 
import UserProfile from 'forms/user-profile';
import FormElementImage from "presentational/FormElementImage";

class FormUserProfile extends Component {
  constructor() {
    super();
    this.state = {
        fields: [],
        inputValue: ""
    };
    this.removeLine = this.removeLine.bind(this);
  }

  componentDidMount(){
    CompleteData().then(res =>{
       UserProfile.map(item => {
          item.value = res[item.name];
          let field = this.state.fields.slice(0);
          if(item.type === "phonelist"){
            item.value.map(phone => {
              let obj = Object.assign({}, item);
              obj.value = phone.number;
              obj.title += " "+phone.type;
              field.push(obj);
            });
          }else{
            field.push(item);
          }
          this.setState({fields: field});
       })
    })
  };

  removeLine(item){
   const newState = this.state.fields.slice();
    if (newState.indexOf(item) > -1) {
      newState.splice(newState.indexOf(item), 1);
      this.setState({fields: newState})
    }
  };

  getFieldByType(values){
    if(values.type=== "image"){
      return <FormElementImage value={values.value} key={values.value}/>
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