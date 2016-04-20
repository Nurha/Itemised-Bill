var fs = require('fs');
// return all the phone calls for a specified network provider
var specifiesPhoneCall = function(callsMade, networkProvider) {
  var callsList = [];
  for (x = 0; x < callsMade.length; x++) {
    if (callsMade[x].provider === networkProvider && callsMade[x] !== undefined) {
      callsList.push({
        'provider': callsMade[x].provider,
        'number': callsMade[x].number,
        'duration': callsMade[x].duration
      });
    };
  };
  return callsList;
};
module.exports.specifiesPhoneCall = specifiesPhoneCall;
