import faker from 'faker';
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../src/index';

const { expect } = chai;
chai.use(chaiHttp);

/* ****** Undefined route ******* */
describe('Undefined Route', () => {
  it('should return 404 for GET', () => {
    chai.request(server)
      .get('/api/v1/anyRoute')
      .end((err, res) => {
        expect(res).to.have.status(404);
      });
  });

  it('should return 404 for POST', () => {
    chai.request(server)
      .post('/api/v1/anyRoute')
      .send({
        name: faker.name.findName(),
        hqAddress: '12, Empty Street, Cul de Sacs, NG',
        logoUrl: 'https://example.com',
      })
      .end((err, res) => {
        expect(res).to.have.status(404);
      });
  });

  it('should return 404 for PATCH', () => {
    chai.request(server)
      .patch('/api/v1/anyRoute')
      .send({
        name: faker.name.findName(),
      })
      .end((err, res) => {
        expect(res).to.have.status(404);
      });
  });

  it('should return 404 for DELETE', () => {
    chai.request(server)
      .delete('/api/v1/anyRoute')
      .end((err, res) => {
        expect(res).to.have.status(404);
      });
  });
});
