const request = require('supertest'); // calling it "request" is a common practice

const server = require('./server.js'); // this is our first red, file doesn't exist yet
const db = require('../data/dbConfig.js');
const Games = require('../games/gamesModel.js');

describe('server.js', () => {
  it('should be using test env', () => {
    expect(process.env.DB_ENV).toBe('testing')
  })

  describe('get /games', () => {
    afterEach( async () => {
      await db('games').truncate();
    });

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

    it('should return all games in db', async () => {
      const games = [
         { 
           "id": 1,
          "title": "Shovel Knight", 
          "genre": "Action", 
          "releaseYear": 2014 
        }
      ];

      await db('games').insert(games);

      const res = await request(server).get('/games');
      expect(res.body).toEqual(games);
    }); 

    it('should return a JSON object from the route', async () => {
      const response = await request(server).get('/games');

      expect(response.type).toEqual('application/json');
    });

  })

  describe('post /games', () => {
    afterEach( async () => {
      await db('games').truncate();
    });

    it('should return Unprocessable Entity status code for bad post to /games route', async () => {
      const expectedStatusCode = 422;
      let body = { 
        "title": "Shovel Knight", 
        "releaseYear": 2014 
      }

      // do a get request to our api (server.js) and inspect the response
      const response = await request(server).post('/games').send(body);

      expect(response.status).toEqual(expectedStatusCode);

    });
    
    it('should return a created status code for the /games route', async () => {
      const expectedStatusCode = 201;
      let body = { 
        "title": "Shovel Knight", 
        "genre": "Action", 
        "releaseYear": 2014 
      }

      // do a get request to our api (server.js) and inspect the response
      const response = await request(server).post('/games').send(body);

      expect(response.status).toEqual(expectedStatusCode);

    });

    it('should return a JSON object from the route', async () => {
      let body = { 
        "title": "Shovel Knight", 
        "genre": "Action", 
        "releaseYear": 2014 
      }

      // do a get request to our api (server.js) and inspect the response
      const response = await request(server).post('/games').send(body);

      expect(response.type).toEqual('application/json');
    });

  })
})