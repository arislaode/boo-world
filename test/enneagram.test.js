const request = require('supertest');
const app = require('../src/app');

describe('API Enneagram Tests', () => {

    let enneagramId;

    it('should create a new Enneagram type', async () => {
    const res = await request(app)
        .post('/v1/enneagram')
        .send({ name: '4w5' });
    expect(res.statusCode).toEqual(201);
    expect(res.body.data[0].name).toEqual('4w5');
    if (res.body.data && res.body.data.length > 0) {
        enneagramId = res.body.data[0]._id;
    } else {
        throw new Error('Data not found or response structure does not match expectations');
    }
    });

    it('should update an Enneagram type', async () => {
    const updatedName = '4w7';
    const res = await request(app)
        .put(`/v1/enneagram/${enneagramId}`)
        .send({ name: updatedName });
    expect(res.statusCode).toEqual(200);
    expect(res.body.data.name).toEqual(updatedName);
    });

    it('should retrieve all Enneagram types', async () => {
    const res = await request(app)
        .get('/v1/enneagram');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data.some(enneagram => enneagram.name === '4w7')).toBe(true);
    });
  
    it('should delete an Enneagram type', async () => {
    const response = await request(app)
        .delete(`/v1/enneagram/${enneagramId}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toEqual('Enneagram deleted successfully');
    expect(response.body.data.message).toEqual('Enneagram deleted');
    });

});
