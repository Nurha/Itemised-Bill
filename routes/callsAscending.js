var fs = require('fs');

var sortInAscendingOrder = function(callDuration) {
  console.log(callDuration);
  var sorted = callDuration.sort(function(a, b) {
    return (a.duration - b.duration)
  });
  return sorted;
};
module.exports.sortInAscendingOrder = sortInAscendingOrder;
