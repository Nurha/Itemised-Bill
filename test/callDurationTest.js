var assert = require('assert');
var readCSVFolder = require('../routes/readCSVFolder');
var specifiesPhoneCall = require('../routes/specifiesPhoneCall');
var callDuration = require('../routes/callDuration');

describe('calculate the duration of a call in seconds', function(){
  it('should calculate the duration of the call for MTN', function(done){
    var callsMade = readCSVFolder.readCSVFolder('./ItemisedBill.csv');
    var specifiesPhone = specifiesPhoneCall.specifiesPhoneCall(callsMade, 'MTN');
    var results = [
                      { provider: "MTN", number: '0832401145', duration: 334 },
                      { provider: "MTN", number: '0838758090', duration: 94 },
                      { provider: "MTN", number: '0832401145', duration: 394 },
                      { provider: "MTN", number: '0838758090', duration: 76 },
                      { provider: "MTN", number: '0832401145', duration: 161 },
                      { provider: "MTN", number: '0838758090', duration: 551 },
                      { provider: "MTN", number: '0832401145', duration: 334 },
                      { provider: "MTN", number: '0838758090', duration: 127 },
                      { provider: "MTN", number: '0838758090', duration: 334 },
                      { provider: "MTN", number: '0832401145', duration: 159 },
                      { provider: "MTN", number: '0831239023', duration: 161 },
                      { provider: "MTN", number: '0832004576', duration: 100 },
                      { provider: "MTN", number: '0831239023', duration: 94 },
                      { provider: "MTN", number: '0837351200', duration: 34 },
                      { provider: "MTN", number: '0834590001', duration: 334 },
                      { provider: "MTN", number: '0831239023', duration: 184 }];
    assert.deepEqual(callDuration.callDuration(specifiesPhone), results);
    done();
  });
});
