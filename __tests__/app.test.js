const request = require('supertest');
const app = require('../lib/app');
const { zodiacs } = require('../lib/zodiac-data');

describe('zodiacs routes', () => {
  it('/zodiacs should return list of ids/zodiacs', async () => {
    const resp = await request(app).get('/zodiac');
    const expected = zodiacs.map((zodiac) => {
      return { id: zodiac.id, name: zodiac.name };
    });
    expect(resp.body).toEqual(expected);
  });

  it('zodiac:id should return infomration about the sign.', async () => {
    const resp = await request(app).get('/zodiac/1');
    const zOne = {
      id: '1',
      name: 'aquarius',
      dates: 'Jan 21 - Feb 19',
      symbol: 'Water Bearer',
    };
    expect(resp.body).toEqual(zOne);
  });
});
