var assert = require('assert');
var readCSVFolder = require('../routes/readCSVFolder');

describe('read the CSV file', function(){
  it('get the content from the csv file', function(done){
    assert.equal(readCSVFolder.readCSVFolder('./ItemisedBill.csv').length, 35);
    done();
  });
});
