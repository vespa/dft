import React from "react";
const AddedAt =({value}) =>{
  const normalize = (value) => {
    return (Number(value) <=9)? "0"+ value: value;
  }
  const date = new Date(value);
  const day = date.getDate();
  const month = date.getMonth()
  const year = date.getFullYear();
  const hour = date.getHours();
  const minutes = date.getMinutes()
  const monthList = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro","dezembro"];
  return <span>Adicionado em {day} de {monthList[month]} de {year} às {normalize(hour)}:{normalize(minutes)} </span>
}
export default AddedAt;