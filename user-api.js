const superagent = require("superagent");

class UserApi {
  findAll() {
    return new Promise((resolve, reject) => {
      superagent
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => resolve(response.body))
        .catch(reject);
    });
  }

  findOne(id) {
    return new Promise((resolve, reject) => {
      superagent
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => resolve(response.body))
        .catch((response) => reject(Error(`User ${id} not found`)));
    });
  }
}

module.exports = UserApi;
