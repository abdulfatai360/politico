import '@babel/polyfill';
import faker from 'faker';
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../src/index';
import {
  pool,
  usersTable,
  officeTable,
  partyTable,
} from '../src/models/testDb';

const { expect } = chai;
chai.use(chaiHttp);

describe('POST /api/v1/parties', () => {
  before(async () => {
    await pool.query(partyTable);
    await pool.query(officeTable);
    await pool.query(usersTable);
  });

  describe('On successful request/response cycle', () => {
    it('should return status and data properties', (done) => {
      chai.request(server)
        .post('/api/v1/parties')
        .send({
          name: faker.name.findName(),
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
          name: faker.name.findName(),
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
          name: faker.name.findName(),
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
          name: faker.name.findName(),
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
          name: faker.name.findName(),
          hqAddress: '12, Empty Street, Cul de Sacs, NG',
          logoUrl: 'https://example.com',
        })
        .end((err, res) => {
          expect(res.body.data).to.have.lengthOf(1);
          return done();
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
          name: faker.name.findName(),
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
          name: faker.name.findName(),
          hqAddress: '12, Empty Street, Cul de Sacs, NG',
        })
        .end((err, res) => {
          expect(res.body).to.have.ownProperty('error').that.is.a('string');
          return done();
        });
    });
  });
});
