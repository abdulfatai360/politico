import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../src/index';
import partyDb from '../src/models/party';

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

/* ****** Feature: Get a party ******* */
describe('GET /api/v1/parties/<party-id>', () => {
  describe('On successful request/response cycle', () => {
    it('should return status and data properties', (done) => {
      chai.request(server)
        .get('/api/v1/parties/1')
        .end((err, res) => {
          expect(res.body).to.have.all.keys('status', 'data');
          return done();
        });
    });

    it('should return status property of number type', (done) => {
      chai.request(server)
        .get('/api/v1/parties/1')
        .end((err, res) => {
          expect(res.body).to.have.ownProperty('status').that.is.a('number');
          return done();
        });
    });

    it('should return data property of array type', (done) => {
      chai.request(server)
        .get('/api/v1/parties/1')
        .end((err, res) => {
          expect(res.body).to.have.ownProperty('data').that.is.an('array');
          return done();
        });
    });

    it('should return correct status code', (done) => {
      chai.request(server)
        .get('/api/v1/parties/1')
        .end((err, res) => {
          expect(res).to.have.status(200);
          return done();
        });
    });

    it('should return data of single element', (done) => {
      chai.request(server)
        .get('/api/v1/parties/1')
        .end((err, res) => {
          expect(res.body.data).to.have.lengthOf(1);
          return done();
        });
    });

    describe('Element of data property', () => {
      it('should return id property of number type', (done) => {
        chai.request(server)
          .get('/api/v1/parties/1')
          .end((err, res) => {
            expect(res.body.data[0]).to.have.ownProperty('id').that.is.a('number');
            return done();
          });
      });

      it('should return name property of string type', (done) => {
        chai.request(server)
          .get('/api/v1/parties/1')
          .end((err, res) => {
            expect(res.body.data[0]).to.have.ownProperty('name').that.is.a('string');
            return done();
          });
      });

      it('should return logoUrl property of string type', (done) => {
        chai.request(server)
          .get('/api/v1/parties/1')
          .end((err, res) => {
            expect(res.body.data[0]).to.have.ownProperty('logoUrl').that.is.a('string');
            return done();
          });
      });
    });
  });

  describe('On failed request/response cycle', () => {
    it('should return status and error properties', (done) => {
      chai.request(server)
        .get('/api/v1/parties/0')
        .end((err, res) => {
          expect(res.body).to.have.all.keys('status', 'error');
          return done();
        });
    });

    it('should return status property of number type', (done) => {
      chai.request(server)
        .get('/api/v1/parties/null')
        .end((err, res) => {
          expect(res.body).to.have.ownProperty('status').that.is.a('number');
          return done();
        });
    });

    it('should return error property of string type', (done) => {
      chai.request(server)
        .get('/api/v1/parties/undefined')
        .end((err, res) => {
          expect(res.body).to.have.ownProperty('error').that.is.a('string');
          return done();
        });
    });

    it('should return correct status code', (done) => {
      chai.request(server)
        .get('/api/v1/parties/abc')
        .end((err, res) => {
          expect(res).to.have.status(422);
          return done();
        });
    });
  });
});

/* ****** Feature: Get all parties ******* */
describe('GET /api/v1/parties', () => {
  describe('On successful request/response cycle', () => {
    before(function xyz() {
      if (!partyDb.findAll().length) {
        this.skip();
      }
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

    it('should return data of equal size with Database', (done) => {
      const dBSize = partyDb.findAll().length;
      chai.request(server)
        .get('/api/v1/parties')
        .end((err, res) => {
          expect(res.body.data).to.have.lengthOf(dBSize);
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

  describe('On failed request/response cycle', () => {
    before(function xyz() {
      if (partyDb.findAll().length) {
        this.skip();
      }
    });

    it('should return status and error properties', (done) => {
      chai.request(server)
        .get('/api/v1/parties/0')
        .end((err, res) => {
          expect(res.body).to.have.all.keys('status', 'error');
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

    it('should return error property of string type', (done) => {
      chai.request(server)
        .get('/api/v1/parties')
        .end((err, res) => {
          expect(res.body).to.have.ownProperty('error').that.is.a('string');
          return done();
        });
    });

    it('should return correct status code', (done) => {
      chai.request(server)
        .get('/api/v1/parties')
        .end((err, res) => {
          expect(res).to.have.status(404);
          return done();
        });
    });
  });
});

/* ****** Feature: Edit a party name ******* */
describe('PATCH /api/v1/parties/<party-id>/name', () => {
  describe('On successful request/response cycle', () => {
    it('should return status and data properties', (done) => {
      chai.request(server)
        .patch('/api/v1/parties/1/name')
        .send({ name: 'Jane Doe' })
        .end((err, res) => {
          expect(res.body).to.have.all.keys('status', 'data');
          return done();
        });
    });

    it('should return status property of number type', (done) => {
      chai.request(server)
        .patch('/api/v1/parties/1/name')
        .send({ name: 'Jane Doe' })
        .end((err, res) => {
          expect(res.body).to.have.ownProperty('status').that.is.a('number');
          return done();
        });
    });

    it('should return data property of array type', (done) => {
      chai.request(server)
        .patch('/api/v1/parties/1/name')
        .send({ name: 'Jane Doe' })
        .end((err, res) => {
          expect(res.body).to.have.ownProperty('data').that.is.an('array');
          return done();
        });
    });

    it('should return correct status code', (done) => {
      chai.request(server)
        .patch('/api/v1/parties/1/name')
        .send({ name: 'Jane Doe' })
        .end((err, res) => {
          expect(res).to.have.status(200);
          return done();
        });
    });

    it('should return data of single element', (done) => {
      chai.request(server)
        .patch('/api/v1/parties/1/name')
        .send({ name: 'Jane Doe' })
        .end((err, res) => {
          expect(res.body.data).to.have.lengthOf(1);
          return done();
        });
    });

    describe('Element of data property', () => {
      it('should return id property of number type', (done) => {
        chai.request(server)
          .patch('/api/v1/parties/1/name')
          .send({ name: 'Jane Doe' })
          .end((err, res) => {
            expect(res.body.data[0]).to.have.ownProperty('id').that.is.a('number');
            return done();
          });
      });

      it('should return name property of string type', (done) => {
        chai.request(server)
          .patch('/api/v1/parties/1/name')
          .send({ name: 'Jane Doe' })
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
        .patch('/api/v1/parties/0/name')
        .send({ name: 'Jane Doe' })
        .end((err, res) => {
          expect(res.body).to.have.all.keys('status', 'error');
          return done();
        });
    });

    it('should return status property of number type', (done) => {
      chai.request(server)
        .patch('/api/v1/parties/null/logoUrl')
        .send({ logoUrl: 'https:example.com' })
        .end((err, res) => {
          expect(res.body).to.have.ownProperty('status').that.is.a('number');
          return done();
        });
    });

    it('should return error property of string type', (done) => {
      chai.request(server)
        .patch('/api/v1/parties/1/logoUrl')
        .send({ logoUrl: 'https:example.com' })
        .end((err, res) => {
          expect(res.body).to.have.ownProperty('error').that.is.a('string');
          return done();
        });
    });

    it('should return correct status code for unavailable resource', (done) => {
      chai.request(server)
        .patch('/api/v1/parties/0/name')
        .send({ name: 'John Doe' })
        .end((err, res) => {
          expect(res).to.have.status(404);
          return done();
        });
    });
  });
});

/* ****** Feature: Delete a party ******* */
describe('DELETE /api/v1/parties/<party-id>', () => {
  describe('On successful request/response cycle', () => {
    it('should return status and data properties', (done) => {
      chai.request(server)
        .delete('/api/v1/parties/1')
        .end((err, res) => {
          expect(res.body).to.have.all.keys('status', 'data');
          return done();
        });
    });

    it('should return status property of number type', (done) => {
      chai.request(server)
        .delete('/api/v1/parties/2')
        .end((err, res) => {
          expect(res.body).to.have.ownProperty('status').that.is.a('number');
          return done();
        });
    });

    it('should return data property of array type', (done) => {
      chai.request(server)
        .delete('/api/v1/parties/3')
        .end((err, res) => {
          expect(res.body).to.have.ownProperty('data').that.is.an('array');
          return done();
        });
    });

    it('should return correct status code', (done) => {
      chai.request(server)
        .delete('/api/v1/parties/4')
        .end((err, res) => {
          expect(res).to.have.status(200);
          return done();
        });
    });

    it('should return data of single element', (done) => {
      chai.request(server)
        .delete('/api/v1/parties/5')
        .end((err, res) => {
          expect(res.body.data).to.have.lengthOf(1);
          return done();
        });
    });

    describe('Element of data property', () => {
      it('should return message property of string type', (done) => {
        chai.request(server)
          .delete('/api/v1/parties/6')
          .end((err, res) => {
            expect(res.body.data[0]).to.have.ownProperty('message').that.is.a('string');
            return done();
          });
      });
    });
  });

  describe('On failed request/response cycle', () => {
    it('should return status and error properties', (done) => {
      chai.request(server)
        .delete('/api/v1/parties/0')
        .end((err, res) => {
          expect(res.body).to.have.all.keys('status', 'error');
          return done();
        });
    });

    it('should return status property of number type', (done) => {
      chai.request(server)
        .delete('/api/v1/parties/null')
        .end((err, res) => {
          expect(res.body).to.have.ownProperty('status').that.is.a('number');
          return done();
        });
    });

    it('should return error property of string type', (done) => {
      chai.request(server)
        .delete('/api/v1/parties/undefined')
        .end((err, res) => {
          expect(res.body).to.have.ownProperty('error').that.is.a('string');
          return done();
        });
    });

    it('should return correct status code for unavailable resource', (done) => {
      chai.request(server)
        .delete('/api/v1/parties/0')
        .end((err, res) => {
          expect(res).to.have.status(404);
          return done();
        });
    });
  });
});

/* ****** Feature: Create an office ******* */
describe('POST /api/v1/offices', () => {
  describe('On successful request/response cycle', () => {
    it('should return status and data properties', (done) => {
      chai.request(server)
        .post('/api/v1/offices')
        .send({
          type: 'Federal',
          name: 'President',
        })
        .end((err, res) => {
          expect(res.body).to.have.all.keys('status', 'data');
          return done();
        });
    });

    it('should return status property of number type', (done) => {
      chai.request(server)
        .post('/api/v1/offices')
        .send({
          type: 'Federal',
          name: 'President',
        })
        .end((err, res) => {
          expect(res.body).to.have.ownProperty('status').that.is.a('number');
          return done();
        });
    });

    it('should return data property of array type', (done) => {
      chai.request(server)
        .post('/api/v1/offices')
        .send({
          type: 'Federal',
          name: 'President',
        })
        .end((err, res) => {
          expect(res.body).to.have.ownProperty('data').that.is.an('array');
          return done();
        });
    });

    it('should return correct status code', (done) => {
      chai.request(server)
        .post('/api/v1/offices')
        .send({
          type: 'Federal',
          name: 'President',
        })
        .end((err, res) => {
          expect(res).to.have.status(201);
          return done();
        });
    });

    it('should return data of single element', (done) => {
      chai.request(server)
        .post('/api/v1/offices')
        .send({
          type: 'Federal',
          name: 'President',
        })
        .end((err, res) => {
          expect(res.body.data).to.have.lengthOf(1);
          return done();
        });
    });

    describe('Element of data property', () => {
      it('should return id property of number type', (done) => {
        chai.request(server)
          .post('/api/v1/offices')
          .send({
            type: 'Federal',
            name: 'President',
          })
          .end((err, res) => {
            expect(res.body.data[0]).to.have.ownProperty('id').that.is.a('number');
            return done();
          });
      });

      it('should return name property of string type', (done) => {
        chai.request(server)
          .post('/api/v1/offices')
          .send({
            type: 'Federal',
            name: 'President',
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
        .post('/api/v1/offices')
        .send({
          type: 'Federal',
        })
        .end((err, res) => {
          expect(res.body).to.have.all.keys('status', 'error');
          return done();
        });
    });

    it('should return status property of number type', (done) => {
      chai.request(server)
        .post('/api/v1/offices')
        .send({
          name: 'President',
        })
        .end((err, res) => {
          expect(res.body).to.have.ownProperty('status').that.is.a('number');
          return done();
        });
    });

    it('should return correct status code for missing data', (done) => {
      chai.request(server)
        .post('/api/v1/offices')
        .send({
          type: 'Federal',
        })
        .end((err, res) => {
          expect(res).to.have.status(400);
          return done();
        });
    });

    it('should return correct status code for invalid data', (done) => {
      chai.request(server)
        .post('/api/v1/offices')
        .send({
          name: ['John', 'Doe'],
          type: 'Federal',
        })
        .end((err, res) => {
          expect(res).to.have.status(422);
          return done();
        });
    });
  });
});
