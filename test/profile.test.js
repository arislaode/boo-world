const request = require('supertest');
const app = require('../src/app');

describe('Profile API Tests', () => {

    let profileId;

    it('should create a new profile', async () => {
        const res = await request(app)
        .post('/v1/profiles')
        .send({
            name: 'la ode aris saputra',
            email: "aris@example.com",
            age: 29,
            bio: "Software Developer"
        });
        expect(res.statusCode).toEqual(201);
        expect(res.body.data.name).toEqual('la ode aris saputra');
        expect(res.body.data.email).toEqual('aris@example.com');
        expect(res.body.data.age).toEqual(29);
        expect(res.body.data.bio).toEqual('Software Developer');
        if (res.body.data && res.body.data._id) {
            profileId = res.body.data._id;
        } else {
            throw new Error('Data not found or response structure does not match expectations');
        }        
    });
  
    it('should retrieve a profile by ID', async () => {
        console.log('profileId :: ', profileId);
        const res = await request(app)
          .get(`/v1/profiles/${profileId}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.data._id).toEqual(profileId);
        expect(res.body.data.name).toEqual('la ode aris saputra');
        expect(res.body.data.email).toEqual('aris@example.com');
        expect(res.body.data.age).toEqual(29);
        expect(res.body.data.bio).toEqual('Software Developer');
      });
    
});
