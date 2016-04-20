var fs = require('fs');


  var readCSVFolder = function(filePath) {

    var fileContentStr = fs.readFileSync(filePath);
    var fileConList = fileContentStr.toString();
    var csvContentRow = (fileConList.split('\r')).slice(1);

    var itemisedBill = csvContentRow.map(function(row) {
      var contentFields = row.split(',');
      return {
        date: contentFields[0],
        provider: contentFields[1],
        number: contentFields[2],
        duration: contentFields[3]
      };
    });
    itemisedBill.pop();
    // console.log(itemisedBill);
    return itemisedBill;
  }

module.exports.readCSVFolder = readCSVFolder;
