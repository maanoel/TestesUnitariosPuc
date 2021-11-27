const UserApi = require("./user-api");

describe("UserApi", () => {
  describe("findAll", () => {
    test("Deve retornar lista de usuários", () => {
      const userApi = new UserApi();

      return userApi.findAll().then((users) => {
        expect(users.length).toBeGreaterThan(0);
      });
    });
  });

  describe("findOne", () => {
    test("Deve retornar um usuário existente", () => {
      const userApi = new UserApi();

      return userApi.findOne(1).then((user) => {
        expect(user.id).toBe(1);
      });
    });
    test("Deve retornar um erro se o usuário não existir", () => {
      const userApi = new UserApi();

      return userApi.findOne(100).catch((exception) => {
        expect(exception.message).toBe("User 100 not found");
      });
    });
  });
});
