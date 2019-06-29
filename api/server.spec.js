const request = require('supertest'); // calling it "request" is a common practice

const server = require('./server.js'); // this is our first red, file doesn't exist yet
const db = require('../data/dbConfig.js');
const Games = require('../games/gamesModel.js');

describe('server.js', () => {
  it('should be using test env', () => {
    expect(process.env.DB_ENV).toBe('testing')
  })

  describe('get /games', () => {
    it('should return an OK status code for the /games route', async () => {
      const expectedStatusCode = 200;

      // do a get request to our api (server.js) and inspect the response
      const response = await request(server).get('/games');

      expect(response.status).toEqual(expectedStatusCode);

    });

    it('should return no games by default', async () => {

      const response = await request(server).get('/games');

      expect(response.body).toEqual([]);
    }); 

    it('should return a JSON object from the route', async () => {
      const response = await request(server).get('/games');

      expect(response.type).toEqual('application/json');
    });

  })
})