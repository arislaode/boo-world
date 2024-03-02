const request = require('supertest');
const app = require('../src/app');

describe('API MBTI Tests', () => {

    let mbtiId;

    it('should create a new MBTI type', async () => {
    const res = await request(app)
        .post('/v1/mbti')
        .send({ name: 'INFP' });
    expect(res.statusCode).toEqual(201);
    expect(res.body.data[0].name).toEqual('INFP');
    if (res.body.data && res.body.data.length > 0) {
        mbtiId = res.body.data[0]._id;
    } else {
        throw new Error('Data not found or response structure does not match expectations');
    }
    });

    it('should update an MBTI type', async () => {
    const updatedName = 'ESTJ';
    const res = await request(app)
        .put(`/v1/mbti/${mbtiId}`)
        .send({ name: updatedName });
    expect(res.statusCode).toEqual(200);
    expect(res.body.data.name).toEqual(updatedName);
    });

    it('should retrieve all MBTI types', async () => {
    const res = await request(app)
        .get('/v1/mbti');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data.some(mbti => mbti.name === 'ESTJ')).toBe(true);
    });
  
    it('should delete an MBTI type', async () => {
    const response = await request(app)
        .delete(`/v1/mbti/${mbtiId}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toEqual('MBTI deleted successfully');
    expect(response.body.data.message).toEqual('MBTI deleted');
    });

});
