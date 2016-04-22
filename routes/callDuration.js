var fs = require('fs');

var calculateCallDuration = function(specifiesPhone) {

  var callDuration = [];
  for (x in specifiesPhone) {
    var timeInSeconds = specifiesPhone[x].duration;
  
    timeInSeconds = timeInSeconds.split(/h|m|s/);
    timeInSeconds.pop();
    timeInSeconds = parseInt((timeInSeconds[1] * 60)) + parseInt(timeInSeconds[2]);

    callDuration.push({
      provider: specifiesPhone[x].provider,
      number: specifiesPhone[x].number,
      duration: timeInSeconds
    });
  }
  return callDuration;
};
module.exports.calculateCallDuration = calculateCallDuration;
