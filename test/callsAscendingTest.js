var assert = require('assert');
var readCSVFolder = require('../routes/readCSVFolder');
var specifiesPhoneCall = require('../routes/specifiesPhoneCall');
var callDuration = require('../routes/callDuration');
var callsAscending = require('../routes/callsAscending');

describe('return calls in ascending order', function(){
  it('should return the list of mtn call in ascending order', function(done){
    var callsMade = readCSVFolder.readCSVFolder('./ItemisedBill.csv');
    var specifiesPhone = specifiesPhoneCall.specifiesPhoneCall(callsMade, 'MTN');
    var callDurationList = callDuration.calculateCallDuration(specifiesPhone);
     var results =[{ provider: "MTN", number: '0837351200', duration: 34 },
                   { provider: "MTN", number: '0838758090', duration: 76 },
                   { provider: "MTN", number: '0838758090', duration: 94 },
                   { provider: "MTN", number: '0831239023', duration: 94 },
                   { provider: "MTN", number: '0832004576', duration: 100 },
                   { provider: "MTN", number: '0838758090', duration: 127 },
                   { provider: "MTN", number: '0832401145', duration: 159 },
                   { provider: "MTN", number: '0832401145', duration: 161 },
                   { provider: "MTN", number: '0831239023', duration: 161 },
                   { provider: "MTN", number: '0831239023', duration: 184 },
                   { provider: "MTN", number: '0834590001', duration: 334 },
                   { provider: "MTN", number: '0832401145', duration: 334 },
                   { provider: "MTN", number: '0832401145', duration: 334 },
                   { provider: "MTN", number: '0838758090', duration: 334 },
                   { provider: "MTN", number: '0832401145', duration: 394 },
                   { provider: "MTN", number: '0838758090', duration: 551 }];
  assert.deepEqual(callsAscending.sortInAscendingOrder(callDurationList), results);
  done();
  });

it('should return the list of vodacom calls in ascending order', function(done){
    var callsMade = readCSVFolder.readCSVFolder('./ItemisedBill.csv');
    var specifiesPhone = specifiesPhoneCall.specifiesPhoneCall(callsMade, 'Vodacom');
    var callDurationList = callDuration.calculateCallDuration(specifiesPhone);
    var results = [{ provider: "Vodacom", number: '0821302398', duration: 34 },
                   { provider: "Vodacom", number: '0824501276', duration: 34 },
                   { provider: "Vodacom", number: '0828907600', duration: 56 },
                   { provider: "Vodacom", number: '0828009712', duration: 56 },
                   { provider: "Vodacom", number: '0821005078', duration: 76 },
                   { provider: "Vodacom", number: '0824009001', duration: 76 },
                   { provider: "Vodacom", number: '0821302398', duration: 124 },
                   { provider: "Vodacom", number: '0828901271', duration: 154 }];
  assert.deepEqual(callsAscending.sortInAscendingOrder(callDurationList), results);
  done();
});

it('should return the list of CellC calls in ascending order', function(done){
  var callsMade = readCSVFolder.readCSVFolder('./ItemisedBill.csv');
  var specifiesPhone = specifiesPhoneCall.specifiesPhoneCall(callsMade, 'CellC');
  var callDurationList = callDuration.calculateCallDuration(specifiesPhone);
  var results = [{ provider: "CellC", number: '0825605600', duration: 94 },
                 { provider: "CellC", number: '0825605600', duration: 100 },
                 { provider: "CellC", number: '0841257809', duration: 124 },
                 { provider: "CellC", number: '0841257809', duration: 154 },
                 { provider: "CellC", number: '0841257809', duration: 184 },
                 { provider: "CellC", number: '0841257809', duration: 184 },
                 { provider: "CellC", number: '0841257809', duration: 334 },
                 { provider: "CellC", number: '0841257809', duration: 334 },
                 { provider: "CellC", number: '0841257809', duration: 394 },
                 { provider: "CellC", number: '0841257809', duration: 394 },
                 { provider: "CellC", number: '0845009087', duration: 551 }];
assert.deepEqual(callsAscending.sortInAscendingOrder(callDurationList), results);
done();
});
});
