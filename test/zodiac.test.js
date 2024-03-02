const request = require('supertest');
const app = require('../src/app');

describe('API Zodiac Tests', () => {

    let zodiacId;

    it('should create a new Zodiac type', async () => {
    const res = await request(app)
        .post('/v1/zodiac')
        .send({ name: 'Pisces' });
    expect(res.statusCode).toEqual(201);
    expect(res.body.data[0].name).toEqual('Pisces');
    if (res.body.data && res.body.data.length > 0) {
        zodiacId = res.body.data[0]._id;
    } else {
        throw new Error('Data not found or response structure does not match expectations');
    }
    });

    it('should update an Enneagram type', async () => {
    const updatedName = 'Aries';
    const res = await request(app)
        .put(`/v1/zodiac/${zodiacId}`)
        .send({ name: updatedName });
    expect(res.statusCode).toEqual(200);
    expect(res.body.data.name).toEqual(updatedName);
    });

    it('should retrieve all Enneagram types', async () => {
    const res = await request(app)
        .get('/v1/zodiac');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data.some(enneagram => enneagram.name === 'Aries')).toBe(true);
    });
  
    it('should delete an Zodiac type', async () => {
    const response = await request(app)
        .delete(`/v1/zodiac/${zodiacId}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toEqual('Deleted zodiac');
    });

});
