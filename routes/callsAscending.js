var fs = require('fs');

var sortInAscendingOrder = function(callDuration) {

  var sorted = callDuration.sort(function(a, b) {
    return (a.duration - b.duration)
  });
  // console.log(sorted);
  return sorted;
};
module.exports.sortInAscendingOrder = sortInAscendingOrder;
