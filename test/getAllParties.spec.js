import '@babel/polyfill';
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

describe('GET /api/v1/parties', () => {
  before(async () => {
    await pool.query(partyTable);
    await pool.query(officeTable);
    await pool.query(usersTable);
  });

  it('should return status and data properties', (done) => {
    chai.request(server)
      .get('/api/v1/parties')
      .end((err, res) => {
        expect(res.body).to.have.all.keys('status', 'data');
        return done();
      });
  });

  it('should return status property of number type', (done) => {
    chai.request(server)
      .get('/api/v1/parties')
      .end((err, res) => {
        expect(res.body).to.have.ownProperty('status').that.is.a('number');
        return done();
      });
  });

  it('should return data property of array type', (done) => {
    chai.request(server)
      .get('/api/v1/parties')
      .end((err, res) => {
        expect(res.body).to.have.ownProperty('data').that.is.an('array');
        return done();
      });
  });

  it('should return correct status code', (done) => {
    chai.request(server)
      .get('/api/v1/parties')
      .end((err, res) => {
        expect(res).to.have.status(200);
        return done();
      });
  });

  describe('Element of data property', () => {
    it('should return id property of number type', (done) => {
      chai.request(server)
        .get('/api/v1/parties')
        .end((err, res) => {
          expect(res.body.data[0]).to.have.ownProperty('id').that.is.a('number');
          return done();
        });
    });

    it('should return name property of string type', (done) => {
      chai.request(server)
        .get('/api/v1/parties')
        .end((err, res) => {
          expect(res.body.data[0]).to.have.ownProperty('name').that.is.a('string');
          return done();
        });
    });

    it('should return logoUrl property of string type', (done) => {
      chai.request(server)
        .get('/api/v1/parties')
        .end((err, res) => {
          expect(res.body.data[0]).to.have.ownProperty('logoUrl').that.is.a('string');
          return done();
        });
    });
  });
});
