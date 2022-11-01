const request = require('supertest');
const app = require('../lib/app');
const { zodiacs } = require('../lib/zodiac-data');

describe('zodiacs routes', () => {
  it('/zodiacs should return list of ids/zodiacs', async () => {
    const response = await request(app).get('/zodiac');
    const expected = zodiacs.map((zodiac) => {
      return { id: zodiac.id, name: zodiac.name };
    });
    expect(response.body).toEqual(expected);
  });

  it('zodiac:id should return infomration about the sign.', async () => {
    const response = await request(app).get('/zodiac/1');
    const zOne = {
      id: '1',
      name: 'aquarius',
      dates: 'Jan 21 - Feb 19',
      symbol: 'Water Bearer',
    };
    expect(response.body).toEqual(zOne);
  });

  it('/zodiac/horoscope/:sign', async () => {
    const response = await request(app).get('/zodiac/horoscope/aquarius');
    const message =
      'You may have a hard time appreciating the little things this morning, dear Aquarius, as the moon forms a harsh square with the nodes of fate. Certain lifestyle luxuries, personal success, and status may not taste as sweet as youd hoped, causing you to close off emotionally. Dont be hard on yourself if youre feeling disenchanted with the world, but try to reach for that which brings you joy. The vibe will be charged within your domestic affairs when Luna squares off with Uranus this afternoon, so youll want to be on guard for finicky appliances or temperamental roommates.';
    expect(response.body).toEqual(message);
  });
});
