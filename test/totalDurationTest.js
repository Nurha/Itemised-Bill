var assert = require('assert');
var readCSVFolder = require('../routes/readCSVFolder');
var specifiesPhoneCall = require('../routes/specifiesPhoneCall');
var callDuration = require('../routes/callDuration');
var callsAscending = require('../routes/callsAscending');
var totalDuration = require('../routes/totalDuration');

describe('get the total duration of talking time', function() {

  it('total the duration of calls for MTN', function(done) {
    var callsMade = readCSVFolder.readCSVFolder('./ItemisedBill.csv');
    var specifiesPhone = specifiesPhoneCall.specifiesPhoneCall(callsMade, 'MTN');
    var callDurationList = callDuration.calculateCallDuration(specifiesPhone);
    var callsAscendingOrder = callsAscending.sortInAscendingOrder(callDurationList);
    var results = [{ provider: 'MTN', duration: 3471 }];
    assert.deepEqual(totalDuration.calculateTotalDuration(callsAscendingOrder), results);
    done();
  });

  it('total the duration of calls for Vodacom', function(done){
    var callsMade = readCSVFolder.readCSVFolder('./ItemisedBill.csv');
    var specifiesPhone = specifiesPhoneCall.specifiesPhoneCall(callsMade, 'Vodacom');
    var callDurationList = callDuration.calculateCallDuration(specifiesPhone);
    var callsAscendingOrder = callsAscending.sortInAscendingOrder(callDurationList);
    var results = [{ provider: 'Vodacom', duration: 610 }];
    assert.deepEqual(totalDuration.calculateTotalDuration(callsAscendingOrder), results);
    done();
  });

  it('total the duration of calls for CellC', function(done){
    var callsMade = readCSVFolder.readCSVFolder('./ItemisedBill.csv');
    var specifiesPhone = specifiesPhoneCall.specifiesPhoneCall(callsMade, 'CellC');
    var callDurationList = callDuration.calculateCallDuration(specifiesPhone);
    var callsAscendingOrder = callsAscending.sortInAscendingOrder(callDurationList);
    var results = [{ provider: 'CellC', duration: 2847 }];
    assert.deepEqual(totalDuration.calculateTotalDuration(callsAscendingOrder), results);
    done();
  });
});
