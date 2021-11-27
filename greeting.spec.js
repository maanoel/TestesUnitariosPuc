const greet = require("./greeting");

describe("Saudação", () => {
  test("Sauda o nome 'Vitor", () => {
    expect(greet("Vitor")).toBe("Olá Vitor seja bem vindo ao cursos de testes");
  });

  test("Saudar um nome vazio deve gerar uma exceção", () => {
    const execution = () => greet("");
    expect(execution).toThrow();
  });

  test("Saudar um nome undefined deve gerar uma exceção", () => {
    const execution = () => greet();
    expect(execution).toThrow();
  });
});
