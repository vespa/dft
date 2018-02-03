const userProfile = [
  {name: "avatar" , type: "image", title: "Avatar"},
  {name: "name" , type: "text", title: "Nome"},
  {name: "sex", type: "select", title: "Sexo", options: ["Feminino", "Masculino"]},
  {name: "cpf", type: "cpf",   title: "CPF"},
  {name: "phones", type: "phonelist",   title: "Telefone"}
];
module.exports = userProfile;

