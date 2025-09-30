process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server'); // we now export app correctly
const should = chai.should();

chai.use(chaiHttp);

describe('Photos', function () {
    it('should return the home page on / GET', function (done) {
        this.timeout(60000);
        chai.request(app)
            .get('/')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.html; // homepage returns HTML
                done();
            });
    });
});
