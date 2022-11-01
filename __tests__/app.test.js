const request = require('supertest');
const app = require('../lib/app');
const { zodiacs } = require('../lib/zodiac-data');

describe('zodiacs routes', () => {
  it('/zodiacs should return list of zodiacs', async () => {
    const resp = await request(app).get('/zodiacs');
    const expected = zodiacs.map((zodiac) => {
      return { id: zodiac.id, name: zodiac.name };
    });
    expect(resp.body).toEqual(expected);
  });
});
