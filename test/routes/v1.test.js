process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../../app.js');
chai.use(chaiHttp);

/*
    Test the /POST routes
*/

describe('POST token', () => {
    it('should get the token', done => {
        chai.request(server)
            .post('/v1/token')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});