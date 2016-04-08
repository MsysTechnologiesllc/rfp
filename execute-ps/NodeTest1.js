var assert = require('assert'),
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');
var rdp = require('node-rdp');
var fs = require('fs');


//sample code which navigates to google home,captures the screenshot and saves at a newly created drectory from powershell script..
test.describe('GoogleScrenshot', function() {
	test.it('Create a folder', function() {
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
test.it('Take scren shot', function() {
		 var driver = new webdriver.Builder().
           withCapabilities(webdriver.Capabilities.chrome()).
           build();
		driver.get('http://www.google.com');
		this.timeout(500000);
		
function writeScreenshot(data, name) {
  name = name || 'ss.png';
  var screenshotPath = 'E:\\Test\\newDir0\\';
  fs.writeFileSync(screenshotPath + name, data, 'base64');
};

driver.takeScreenshot().then(function(data) {
  writeScreenshot(data, 'out1.png');
});
});

 rdp({
  address: '<IP Addree Here>',
  username: '<domain\username>',
  password: '<password>',
  safeMode: true
}).then(function() {
  console.log('At this, point, the connection has terminated.');
});
	
	
});
	

	



