const greet = (name) => {
  if (name.length == 0) {
    throw Error("argumento nome é vazio");
  }

  return `Olá ${name} seja bem vindo ao cursos de testes`;
};

module.exports = greet;
