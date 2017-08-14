'use strict';

const chai = require('chai');
const expect = require('chai').expect;
chai.use(require('chai-http'));
const app = require('../server/index.js'); // Our app
const url='http://localhost:8080';

describe('API endpoint /colors', function () {
  this.timeout(5000); // How long to wait for a response (ms)

  before(function () {});

  after(function () {});

  // GET - List all colors
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
      });
  });

  it('should add new color', function () {
    return chai
      .request(url)
      .post('/api/appointments')
      .send({empId: '10001', name: 'johib', date: '2017-09-14T04:30:00.000Z'})
      .then(function (res) {
        expect(res)
          .to
          .have
          .status(201);
        expect(res).to.be.json;
      });
  });

});