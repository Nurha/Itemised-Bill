var fs = require('fs');
//calculate the total number of calls made to numbers for each cell phone provider
var totalCallsMade = function(specifiesPhoneCall) {
  var totalCallsMade = {};
  for (x = 0; x < specifiesPhoneCall.length; x++) {
    var specifiedCalls = specifiesPhoneCall[x];
    if (!totalCallsMade[specifiedCalls.number]) {
      totalCallsMade[specifiedCalls.number] = 1;
    } else {
      totalCallsMade[specifiedCalls.number] += 1;
    }
  }
  return totalCallsMade;
};
module.exports.totalCallsMade = totalCallsMade;
