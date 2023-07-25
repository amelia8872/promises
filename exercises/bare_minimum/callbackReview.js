/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('needle');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  fs.readFile(filePath, 'utf8', (err, content) => {
    if (err) {
      return callback(err);
    }
    // console.log('content', content);
    var firstLine = content.split('\n')[0];
    // console.log('firstLine', firstLine);
    callback(null, firstLine);

  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  request(url, (err, data) => {
    if (err) {
      return callback(err);
    } else {
      callback(null, data.statusCode);
    }
  });

};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
