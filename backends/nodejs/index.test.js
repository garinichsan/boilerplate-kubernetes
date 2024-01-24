// test/services.test.js
const chai = require('chai')
const { healthCheckService, mainService } = require('index')
const { expect } = chai;

describe('Service Tests', () => {
    describe('mainService', () => {
        it('should return the expected response', () => {
            const response = mainService();
            const expected = {
                status: true,
                message: 'hello world!'
            };
            expect(response).to.deep.equal(expected);
        });
    });

    describe('healthCheckService', () => {
        it('should return the expected response', () => {
            const response = healthCheckService();
            const expected = {
                status: true,
                message: 'Service is healthy'
            };
            expect(response).to.deep.equal(expected);
        });
    });

    after(() => {
        process.exit();
    });
});
