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

describe('PATCH /api/v1/parties/<party-id>/name', () => {
  before(async () => {
    await pool.query(partyTable);
    await pool.query(officeTable);
    await pool.query(usersTable);
  });

  describe('On successful request/response cycle', () => {
    it('should return status and data properties', (done) => {
      chai.request(server)
        .patch('/api/v1/parties/1/name')
        .send({ name: faker.name.findName() })
        .end((err, res) => {
          expect(res.body).to.have.all.keys('status', 'data');
          return done();
        });
    });

    it('should return status property of number type', (done) => {
      chai.request(server)
        .patch('/api/v1/parties/1/name')
        .send({ name: faker.name.findName() })
        .end((err, res) => {
          expect(res.body).to.have.ownProperty('status').that.is.a('number');
          return done();
        });
    });

    it('should return data property of array type', (done) => {
      chai.request(server)
        .patch('/api/v1/parties/1/name')
        .send({ name: faker.name.findName() })
        .end((err, res) => {
          expect(res.body).to.have.ownProperty('data').that.is.an('array');
          return done();
        });
    });

    it('should return correct status code', (done) => {
      chai.request(server)
        .patch('/api/v1/parties/1/name')
        .send({ name: faker.name.findName() })
        .end((err, res) => {
          expect(res).to.have.status(200);
          return done();
        });
    });

    it('should return data of single element', (done) => {
      chai.request(server)
        .patch('/api/v1/parties/1/name')
        .send({ name: faker.name.findName() })
        .end((err, res) => {
          expect(res.body.data).to.have.lengthOf(1);
          return done();
        });
    });
  });
});
