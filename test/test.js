import('chai').then(chai => {
    // Your test code using chai goes here
  }).catch(error => {
    // Handle import error
    console.error('Error importing chai:', error);
  });


const assert = require('chai').assert;
const app = require('../app');

describe('App', function() {
    it('app should return hello', function(){
        assert.equal(app(), 'hello')
    })
})

// const chai = require('chai')
// , assert = chai.assert
// , expect = chai.expect
// , should = chai.should()

// describe('string', function(){
//     let name = 'Suresh'
//     it('should be of type string', function() {
//         name.should.be.a('string')
//         expect(name).to.be.a('string')
//         assert.typeOf(name, 'string')
//     })
//     it('should contain Suresh', function() {
//         name.should.not.equal('Kate')
//         name.should.equal('Suresh')
//         expect(name).to.equal('Suresh')
//         assert.equal(name, 'Suresh')
//     })
// })