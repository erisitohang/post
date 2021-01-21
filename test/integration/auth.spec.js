var request = require('supertest');
var app = require('../test-server');
var chai = require('chai');
var { assert } = chai;

describe('POST /auth/register', function () {
  it('will successfuly register', function (done) {
    const now = Math.floor(Date.now() / 1000);
    const user = {
      name: 'Test Auto',
      email: `user${now}@example.com`,
      password: 'password123',
    };
    request(app)
      .post('/api/auth/register')
      .send(user)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end(function (err, res) {
        if (err) return done(err);
        //const { access_token, access_token_expiry } = JSON.parse(res.text);
        return done();
      });
  });
});

describe('POST /auth/login', function () {
  it('will get error response', function (done) {
    const user = {
      email: 'notemail',
      password: 'password123',
    };
    request(app)
      .post('/api/auth/login')
      .send(user)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(422)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });
  it('responds with token', function (done) {
    const user = {
      email: 'user@example.com',
      password: 'password123',
    };
    request(app)
      .post('/api/auth/login')
      .send(user)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        //const { access_token, access_token_expiry } = JSON.parse(res.text);
        return done();
      });
  });
});
