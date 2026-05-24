const { faker } = require('@faker-js/faker');

class TestData {

  static generateEmployee() {

    return {

      firstName: faker.person.firstName(),

      lastName: faker.person.lastName(),

      email: faker.internet.email(),

      username: faker.internet.username(),

      password: faker.internet.password(),
    };
  }
}

module.exports = { TestData };