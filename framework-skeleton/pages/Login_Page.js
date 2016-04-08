webdriver = require('selenium-webdriver');
var chai = require('chai');
var expect = chai.expect;

function Login()
{
	
var driver = new webdriver.Builder().
           withCapabilities(webdriver.Capabilities.firefox()).
           build();
       driver.get('http://<Scale-Custer>');
       this.timeout(500000);  
 var usernamelocator = driver.findElement(webdriver.By.id('loginUsername'));
 username.sendKeys('valid-username');
 var passwordlocator = driver.findElement(webdriver.By.id('loginPassword'));
 password.sendKeys('valid-password');
 var loginbtnlocator   = driver.findElement(webdriver.By.xpath('//input[@value="Login"]'));
  this.timeout(500000);
}

module.exports =Login;
