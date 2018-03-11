//To run test:
//mocha -ui tdd test.js --timeout=15000

const wd = require('selenium-webdriver'),
	  until = wd.until;
const assert = require('assert');
const by = require('./lib/by');
const input = require('./lib/input');

const SELENIUM_HOST = 'http://localhost:4444/wd/hub'; //Default option
const BINARY_LOCATION = '' //Your application's executable file path here


const chromeCapabilities = wd.Capabilities.chrome();
const chromeOptions = {
    'args': [], //An array of command line parameters
	'binary': BINARY_LOCATION,
	
};
chromeCapabilities.set('chromeOptions', chromeOptions);


suite('My suite name', () => {	
	let builder = null;
	let driver = null;
	let searchField = null;
	
	describe('My describe name', () => {
		
			before(async function() {  //Will be called before test
				builder = new wd.Builder()
					.usingServer(SELENIUM_HOST)
					.withCapabilities(chromeCapabilities);
				driver = builder.build();
			});
	
		    it('Me case name', async function() {
				assert.equal(1, 1); //Put your test's code here
			});
			
			after(() => driver && driver.quit());		
	});	
});