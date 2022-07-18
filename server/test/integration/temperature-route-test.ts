import app from '../../src/app';
import chai from 'chai';
import chaiHttp from 'chai-http';
let should = chai.should();

chai.use(chaiHttp);

describe('To check server is running', ()=>{
    describe('GET /health', ()=>{
        it('should return 200 OK', async ()=>{
            chai.request(app)
                .get('/health')
                .end((err, res) => {
                    res.should.have.status(200);
                });
        });
    });
});

describe('Get the current temperature of all beers', ()=>{
    describe('GET /status/getAllBeerCurrentTemperature', ()=>{
        it('should return 200 OK', async ()=>{
            chai.request(app)
                .get('/status/getAllBeerCurrentTemperature')
                .end((err, res) => {
                    res.should.have.status(200);
                });
        });
    });
})

describe('It should return status code 404 if we dosent send beer name', ()=>{
    describe('GET /status/getBeerCurrentTemperature', ()=>{
        it('should return 404', async ()=>{
            chai.request(app)
                .get('/status/getBeerCurrentTemperature')
                .end((err, res) => {
                    res.should.have.status(404);
                });
        });
    });
})

describe('Get the current temperature of beer', ()=>{
    describe('GET /status/getBeerCurrentTemperature/:name', ()=>{
        const name = 'IPA';
        it('should return 200 OK', async ()=>{
            chai.request(app)
                .get('/status/getBeerCurrentTemperature/'+name)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('message').eql('Success');
                    res.body.data.length.should.be.eql(1);
                });
        });
    });
})

describe('Get the out of range beer temperature status', ()=>{
    describe('GET /notify/outOfRangeTemperatureStatus', ()=>{
        it('should return 200 OK', async ()=>{
            chai.request(app)
                .get('/notify/outOfRangeTemperatureStatus')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('message').eql('Success');
                    res.body.data.should.be.a('array');
                });
        });
    });
})

