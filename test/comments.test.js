const request = require('supertest');
const app = require('../src/app');
const { text } = require('express');

describe('Comment API Tests', () => {
    let commentId;
    let profileId;
    let mbtiId;
    let enneagramId;
    let zodiacId;
    let res;

    beforeAll(async () => {
        res = await request(app)
            .post('/v1/profiles')
            .send({
            name: 'La Ode Aris Saputra',
            age: 29,
            bio: 'Software Developer'
        });

        if (res.body.data && res.body.data._id) {
            profileId = res.body.data._id;
        } else {
            throw new Error('Data  profile not found');
        }

        res = await request(app).post('/v1/mbti').send({ name: 'INTJ' });
        if (res.body.data && res.body.data.length > 0) {
            mbtiId = res.body.data[0]._id;
        } else {
            throw new Error('Data mbti not found ');
        }
        res = await request(app).post('/v1/enneagram').send({ name: '5w6' });
        if (res.body.data && res.body.data.length > 0) {
            enneagramId = res.body.data[0]._id;
        } else {
            throw new Error('Data mbti not found ');
        }

        res = await request(app).post('/v1/zodiac').send({ name: 'Aquarius' });
        if (res.body.data && res.body.data.length > 0) {
            zodiacId = res.body.data[0]._id;
        } else {
            throw new Error('Data mbti not found ');
        }
    });
  
    it('should create a new comment', async () => {
      const payload = {
        userId: profileId,
        text: "example comment",
        personalityTypes: {
          mbti: mbtiId,
          enneagram: enneagramId,
          zodiac: zodiacId
        }
      };
  
      const res = await request(app)
        .post('/v1/comments')
        .send(payload);
  
      expect(res.statusCode).toEqual(201);
      expect(res.body[0].userId).toEqual(profileId);
      expect(res.body[0].text).toEqual(payload.text);
      expect(res.body[0].personalityTypes.mbti).toEqual(mbtiId);
      expect(res.body[0].personalityTypes.enneagram).toEqual(enneagramId);
      expect(res.body[0].personalityTypes.zodiac).toEqual(zodiacId);
      expect(res.body[0].likes).toEqual(0);
      if (res.body[0] && res.body[0]._id) {
        commentId = res.body[0]._id;
      } else {
        throw new Error('Data  profile not found');
      }
    });
});
