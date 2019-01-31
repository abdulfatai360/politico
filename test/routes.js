const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');

const { expect } = chai;
chai.use(chaiHttp);

/* ****** Feature: Create a party ******* */

describe('POST /api/v1/parties', () => {
  describe('On successful request/response cycle', () => {
    it('should return status and data properties', (done) => {
      chai.request(server)
        .post('/api/v1/parties')
        .send({
          name: 'John Doe',
          hqAddress: '12, Empty Street, Cul de Sacs, NG',
          logoUrl: 'https://example.com',
        })
        .end((err, res) => {
          expect(res.body).to.have.all.keys('status', 'data');
          return done();
        });
    });

    it('should return status property of number type', (done) => {
      chai.request(server)
        .post('/api/v1/parties')
        .send({
          name: 'John Doe',
          hqAddress: '12, Empty Street, Cul de Sacs, NG',
          logoUrl: 'https://example.com',
        })
        .end((err, res) => {
          expect(res.body).to.have.ownProperty('status').that.is.a('number');
          return done();
        });
    });

    it('should return data property of array type', (done) => {
      chai.request(server)
        .post('/api/v1/parties')
        .send({
          name: 'John Doe',
          hqAddress: '12, Empty Street, Cul de Sacs, NG',
          logoUrl: 'https://example.com',
        })
        .end((err, res) => {
          expect(res.body).to.have.ownProperty('data').that.is.an('array');
          return done();
        });
    });

    it('should return correct status code', (done) => {
      chai.request(server)
        .post('/api/v1/parties')
        .send({
          name: 'John Doe',
          hqAddress: '12, Empty Street, Cul de Sacs, NG',
          logoUrl: 'https://example.com',
        })
        .end((err, res) => {
          expect(res).to.have.status(201);
          return done();
        });
    });

    it('should return data of single element', (done) => {
      chai.request(server)
        .post('/api/v1/parties')
        .send({
          name: 'John Doe',
          hqAddress: '12, Empty Street, Cul de Sacs, NG',
          logoUrl: 'https://example.com',
        })
        .end((err, res) => {
          expect(res.body.data).to.have.lengthOf(1);
          return done();
        });
    });

    describe('Element of data property', () => {
      it('should return id property of number type', (done) => {
        chai.request(server)
          .post('/api/v1/parties')
          .send({
            name: 'John Doe',
            hqAddress: '12, Empty Street, Cul de Sacs, NG',
            logoUrl: 'https://example.com',
          })
          .end((err, res) => {
            expect(res.body.data[0]).to.have.ownProperty('id').that.is.a('number');
            return done();
          });
      });

      it('should return name property of string type', (done) => {
        chai.request(server)
          .post('/api/v1/parties')
          .send({
            name: 'John Doe',
            hqAddress: '12, Empty Street, Cul de Sacs, NG',
            logoUrl: 'https://example.com',
          })
          .end((err, res) => {
            expect(res.body.data[0]).to.have.ownProperty('name').that.is.a('string');
            return done();
          });
      });
    });
  });

  describe('On failed request/response cycle', () => {
    it('should return status and error properties', (done) => {
      chai.request(server)
        .post('/api/v1/parties')
        .send({
          hqAddress: '12, Empty Street, Cul de Sacs, NG',
          logoUrl: 'https://example.com',
        })
        .end((err, res) => {
          expect(res.body).to.have.all.keys('status', 'error');
          return done();
        });
    });

    it('should return status property of number type', (done) => {
      chai.request(server)
        .post('/api/v1/parties')
        .send({
          name: 'John Doe',
          logoUrl: 'https://example.com',
        })
        .end((err, res) => {
          expect(res.body).to.have.ownProperty('status').that.is.a('number');
          return done();
        });
    });

    it('should return error property of string type', (done) => {
      chai.request(server)
        .post('/api/v1/parties')
        .send({
          name: 'John Doe',
          hqAddress: '12, Empty Street, Cul de Sacs, NG',
        })
        .end((err, res) => {
          expect(res.body).to.have.ownProperty('error').that.is.a('string');
          return done();
        });
    });

    it('should return correct status code', (done) => {
      chai.request(server)
        .post('/api/v1/parties')
        .send({
          name: ['John', 'Doe'],
          hqAddress: '12, Empty Street, Cul de Sacs, NG',
          logoUrl: 'https://example.com',
        })
        .end((err, res) => {
          expect(res).to.have.status(422);
          return done();
        });
    });
  });
});
