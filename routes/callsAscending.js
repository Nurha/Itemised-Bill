var fs = require('fs');

var sortInAscendingOrder = function(callsMade) {

  var sorted = callsMade.sort(function(a, b) {
    return (a.duration - b.duration)
  });
  console.log(sorted);
  return sorted;
};
module.exports.sortInAscendingOrder = sortInAscendingOrder;
