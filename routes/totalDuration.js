var fs = require('fs');

var calculateTotalDuration = function(callsAscending){
  var totalCallDuration = [];
  var totalTime = 0;
  for(x=0; x < callsAscending.length; x++){
    var time = parseInt(callsAscending[x].duration);
    totalTime += time;
  }
  console.log(callsAscending[0].provider);
  var duration = { provider: callsAscending[0].provider, duration : totalTime};
  totalCallDuration.push(duration);
  return totalCallDuration;
};
module.exports.calculateTotalDuration = calculateTotalDuration;
