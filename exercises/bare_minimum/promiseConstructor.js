/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('needle');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  // TODO
  // uses Promise.promisify from bluebird to convert the callback-based fs.readFile function into a promise-based function called readFile.
  var readFile = Promise.promisify(require('fs').readFile);
  return readFile(filePath, 'utf8')
    .then(function(contents) {
      return contents.split('\n')[0];
    })
    .catch(function(err) {
      throw err;
    });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO
  // uses Promise.promisify from bluebird to convert the callback-based fs.readFile function into a promise-based function called readFile.
  var request = Promise.promisify(require('request'));
  return request(url).then (function(data) {
    return data.statusCode;
  }).catch(function(err) {
    throw err;
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
