

webdriver = require('selenium-webdriver');

function Login()
{
	
var driver = new webdriver.Builder().
           withCapabilities(webdriver.Capabilities.firefox()).
           build();
       driver.get('http://<Scale-Custer>');
       this.timeout(500000);  
 var username = driver.findElement(webdriver.By.id('loginUsername'));
 username.sendKeys('valid-username');
 var password = driver.findElement(webdriver.By.id('loginPassword'));
 password.sendKeys('valid-password');
 var loginbtn   = driver.findElement(webdriver.By.xpath('//input[@value="Login"]'));
  this.timeout(500000);
}

module.exports =Login;