import React, { Component } from "react";
import EditableField from 'container/EditableField';
import { CompleteData } from "config/config"; 
import UserProfile from 'forms/user-profile';

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
       UserProfile.map(item => {
          item.value = res[item.name];
          let field = this.state.fields.slice(0);
          if(item.type === "phonelist"){
            console.log(item)
          }
          field.push(item);
          this.setState({fields: field});
       })
    })
  };



  getFieldType(values, count){
    switch(values.type){
      case "phonelist" : 
        return values.value.map(item => {
          let obj = Object.assign({}, values);
          obj.value = item.number;
          obj.title += " "+item.type;
          return <EditableField key={count++} {...obj} />
        });
        return "";
      default:
        return <EditableField key={count++} {...values} />
    }
  }
  
  render() {
    let count = 0;
    const {fields} = this.state;
    return (
      <div>
       {fields.map((values)=> {
          count++;
          return this.getFieldType(values, count)
       })}
      </div>
    );
  }
}
export default FormUserProfile;

     // <div>
     //   {fields.map((values)=>
     //    <EditableField key={count++} {...values} />
     //    )}
     //  </div>