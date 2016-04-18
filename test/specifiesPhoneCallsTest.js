var assert = require('assert');
var readCSVFolder = require('../routes/readCSVFolder');
var specifiesPhoneCall = require('../routes/specifiesPhoneCall');

describe('find calls made to a specific network provider', function(){

  it('return all calls made to mtn', function(done){
    var callsMade = readCSVFolder.readCSVFolder('./ItemisedBill.csv');
      assert.equal(specifiesPhoneCall.specifiesPhoneCall(callsMade, 'MTN').length, 16);
      done();
  });

  it('return all calls made to vodacom', function(done){
    var callsMade = readCSVFolder.readCSVFolder('./ItemisedBill');
    assert.equal(specifiesPhoneCall.specifiesPhoneCall(callsMade, 'Vodacom').length, 8);
    done();
  });

  it('return all calls  made to cellC', function(done){
    var callsMade = readCSVFolder.readCSVFolder('./ItemisedBill');
    assert.equal(specifiesPhoneCall.specifiesPhoneCall(callsMade, 'CellC').length, 11);
  });
});
