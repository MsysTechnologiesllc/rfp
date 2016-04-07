var assert = require('assert'),
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');
var rdp = require('node-rdp');

test.describe('Google Search', function() {
    test.it('should work', function() {
       var driver = new webdriver.Builder().
           withCapabilities(webdriver.Capabilities.chrome()).
           build();
       driver.get('http://www.google.com');
       var searchBox = driver.findElement(webdriver.By.name('q'));
	   this.timeout(500000);
       searchBox.sendKeys('Selenium Downloads');
       searchBox.getAttribute('value').then(function(value) {
            assert.equal(value, 'Selenium Downloads');
       });
       driver.quit();
     });

});

test.it('Get OS Details', function(){
var spawn = require("child_process").spawn,child;

// powershell script path to get the OS details.
child = spawn("powershell.exe",["C:\\Users\\clogeny\\Desktop\\Yogiraj\\Selenium-NodeJS-Mocha\\GetOS.ps1"]); 
child.stdout.on("data",function(data){
    console.log("Powershell Data: " + data);
});
child.stderr.on("data",function(data){
    console.log("Powershell Errors: " + data);
});
child.on("exit",function(){
    console.log("Powershell Script finished");
});
child.stdin.end(); //end input
	})


test.it('Create Dir', function(){
	var spawn = require("child_process").spawn,child;
child = spawn("powershell.exe",["C:\\Users\\clogeny\\Desktop\\Yogiraj\\Selenium-NodeJS-Mocha\\CreateDir.ps1"]);
child.stdout.on("data",function(data){
    console.log("Powershell Data: " + data);
});
child.stderr.on("data",function(data){
    console.log("Powershell Errors: " + data);
});
child.on("exit",function(){
    console.log("Powershell Script finished");
});
child.stdin.end(); //end input		

});



var rdp = require('node-rdp');
 
rdp({
  address: '192.168.102.64',
  username: 'msys',
  password: 'master#123',
  safeMode: true
}).then(function() {
  console.log('At this, point, the connection has terminated.');
});

