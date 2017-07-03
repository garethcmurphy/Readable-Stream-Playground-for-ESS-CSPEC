#!/usr/bin/env node
var exports = module.exports = {};

exports.process_data = function (input_data) {
    c=1;
    arr = input_data['cspec']
    arr = arr.map(function(val){return ++val;});
    processed_data = new Object();
    processed_data['cspec'] = arr
    console.log("processmg: ");
    return (processed_data);

}

