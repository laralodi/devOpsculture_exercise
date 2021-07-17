const request = require('supertest');
const app = require('./index');

describe('Test the `/` path', () => {
  test('It should response the GET method and return HttpStatusCode 200 and Hello World message', () => {
    request(app)
      .get('/')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Se você chegou até aqui, você concluiu o exercicio. Parabéns!');
      });
  });
});
