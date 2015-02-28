/*
 *
 *
 *
 * */

var d3 = require("d3-browserify"),
    $ = require("jQuery")


d3.json("data/data.json", function(error, json) {
    if (error) return console.warn(error);
    console.log( '::() json = ' , json );
});

