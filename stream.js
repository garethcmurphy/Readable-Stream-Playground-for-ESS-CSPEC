#!/usr/bin/env node
var exports = module.exports = {};
var fs = require('fs');
var readableStream = fs.createReadStream('file.txt');
var data = '';

exports.stream = function() {
console.log("stream: ");
data = {'cspec':[1,2,3,4]}
    return data;
}


readableStream.on('data', function(chunk) {
    data+=chunk;
});

readableStream.on('end', function() {
    console.log(data);
});

for(var i = 0; i < 5; i++) {
 console.log(i);
}
