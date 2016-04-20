var assert = require('assert');
var readCSVFolder = require('../routes/readCSVFolder');
var specifiesPhoneCall = require('../routes/specifiesPhoneCall');
var totalCallsMade = require('../routes/totalCallsMade');

describe('calculate number of calls for each network provider', function() {

  it('return a list of calls from MTN', function(done) {
    var callsMade = readCSVFolder.readCSVFolder('./ItemisedBill.csv');
    var specifiesPhone = specifiesPhoneCall.specifiesPhoneCall(callsMade, 'MTN');
    var results = {
      '0832401145': 5,
      '0838758090': 5,
      '0831239023': 3,
      '0832004576': 1,
      '0837351200': 1,
      '0834590001': 1
    }
    assert.deepEqual(totalCallsMade.totalCallsMade(specifiesPhone), results);
    done();
  });

  it('return a list of calls from Vodacom', function(done) {
    var callsMade = readCSVFolder.readCSVFolder('./ItemisedBill.csv');
    var specifiesPhone = specifiesPhoneCall.specifiesPhoneCall(callsMade, 'Vodacom');
    var results = {
      '0821302398': 2,
      '0828907600': 1,
      '0824501276': 1,
      '0821005078': 1,
      '0828009712': 1,
      '0828901271': 1,
      '0824009001': 1
    }
    assert.deepEqual(totalCallsMade.totalCallsMade(specifiesPhone), results);
    done();
  });

  it('return a list of calls from CellC', function(done) {
    var callsMade = readCSVFolder.readCSVFolder('./ItemisedBill.csv');
    var specifiesPhone = specifiesPhoneCall.specifiesPhoneCall(callsMade, 'CellC');
    var results = {
      '0841257809': 8,
      '0825605600': 2,
      '0845009087': 1
    }
    assert.deepEqual(totalCallsMade.totalCallsMade(specifiesPhone), results);
    done();
  });
});
