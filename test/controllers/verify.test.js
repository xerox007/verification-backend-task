import { expect } from 'chai';
import request from 'supertest';
import app from '../../src/index';

/**
 * Tests for '/api/users'
 */
describe('Verify Controller Test', () => {
  it('should not verify if code is not provided', (done) => {
    const requestData = {
      noname: 'Jane Doe'
    };

    request(app)
      .post('/api/verify')
      .send(requestData)
      .end((err, res) => {
        const { code, message, details } = res.body.error;

        expect(res.status).to.be.equal(400);
        expect(code).to.be.equal(400);
        expect(message).to.be.equal('Bad Request');
        expect(details).to.be.an('array');

        done();
      });
  });

  it('should verify with valid input data', (done) => {
    const requestData = {
      code: '123456'
    };

    request(app)
      .post('/api/verify')
      .send(requestData)
      .end((err, res) => {
        const data = res.body;

        expect(res.status).to.be.equal(200);
        expect(data).to.be.an('object');
        expect(data).to.have.property('isValid');
        expect(data).to.have.property('message');
        expect(data.isValid).to.be.equal(true);

        done();
      });
  });

  it('should not verify with wrong code even if there is valid input data', (done) => {
    const requestData = {
      code: '123457'
    };

    request(app)
      .post('/api/verify')
      .send(requestData)
      .end((err, res) => {
        const data = res.body;

        expect(res.status).to.be.equal(200);
        expect(data).to.be.an('object');
        expect(data).to.have.property('isValid');
        expect(data).to.have.property('message');
        expect(data.isValid).to.be.equal(false);

        done();
      });
  });

  it('should respond with bad request for empty JSON in request body', (done) => {
    const user = {};

    request(app)
      .post('/api/users')
      .send(user)
      .end((err, res) => {
        const { code, message } = res.body.error;

        expect(res.status).to.be.equal(400);
        expect(code).to.be.equal(400);
        expect(message).to.be.equal('Empty JSON');

        done();
      });
  });
});
