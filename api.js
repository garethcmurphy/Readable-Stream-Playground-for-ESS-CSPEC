
var stream = require("./stream.js");
var processing = require("./process_data.js");
var todb = require("./todb.js");



function func() {
    input_data = stream.stream();
    b=1;
    processed_data =processing.process_data(input_data);
    console.log (processed_data)
    d=todb.todb(c);
}


func()
