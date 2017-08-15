'use strict';

const chai = require('chai');
const expect = require('chai').expect;
chai.use(require('chai-http'));
const app = require('../server/index.js'); // Our app
const url = 'http://localhost:8080';

describe('API endpoint /appointments', function () {
  this.timeout(5000); // How long to wait for a response (ms)

  before(function () {});

  after(function () {});

  // GET - List all meeting request
  it('should return all meeting requests', function () {
    return chai
      .request(url)
      .get('/api/appointments')
      .then(function (res) {
        expect(res)
          .to
          .have
          .status(200);
        expect(res).to.be.json;
      })
      .catch((err) => {
        console.log(err.response);
        err
          .response
          .should
          .have
          .status(404);
        err
          .response
          .body
          .should
          .have
          .property('error');
      });
  });

  // POST - Add new meeting request
  it('should add new meeting request', function () {
    return chai
      .request(url)
      .post('/api/appointments')
      .send({empId: '100002', name: 'johib', date: '2017-09-16T04:30:00.000Z'})
      //2017-09-16T04:30:00.000Z
      .then(function (res) {
        console.log('res'+res);
        expect(res)
          .to
          .have
          .status(201);
        expect(res).to.be.json;
      })
      .catch((err) => {
        console.log(err.response);
        err
          .response
          .should
          .have
          .status(404);
      });
  });

});