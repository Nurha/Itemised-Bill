// var assert = require('assert');
// var readCSVFolder = require('../routes/readCSVFolder');
// var specifiesPhoneCall = require('../routes/specifiesPhoneCall');
// var callDuration = require('../routes/callDuration');
// var callsAscending = require('../routes/callsAscending');
// var totalDuration = require('../routes/totalDuration');
//
// describe('get the total duration of talking time', function() {
//
//   it('total the duration of calls for each provider listes', function(done) {
//     var callsMade = readCSVFolder.readCSVFolder('./ItemisedBill.csv');
//     var networkProvider = [{provider:'MTN'}, {provider:'Vodacom'},{provider:'CellC'}];
//     var specifiesPhone = specifiesPhoneCall.specifiesPhoneCall(callsMade, networkProvider);
//     var callDurationList = callDuration.calculateCallDuration(specifiesPhone);
//     var callsAscendingOrder = callsAscending.sortInAscendingOrder(callDurationList);
//     var results = [{ provider: 'MTN', duration: 3471 },
//                    { provider: 'Vodacom', duration: 610 },
//                    { provider: 'CellC', duration: 2847 }];
//     assert.deepEqual(totalDuration.calculateTotalDuration(callsAscendingOrder), results);
//     done();
//   });
//
// });
