
var assert = require('assert');
var loginpage = require('../pages/Login_Page.js');
var createvm = require('../pages/CreateVM_Page.js');
var chai = require('chai');
var expect = chai.expect;
describe('hooks', function() {

  before(function() {
    // runs before all tests in this block
  });

  after(function() {
    // runs after all tests in this block
  });

  beforeEach(function() {
    // runs before each test in this block
  });

  afterEach(function() {
    // runs after each test in this block
  });
  
describe('Login', function() {

it('should login ', function(){

	loginpage.Login

});

describe('CreateVm', function() {

it('should create new VM ', function(){

	createvm.CreateVm

});

});
});
});
