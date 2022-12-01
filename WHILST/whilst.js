const async = require('async');

// Repeatedly call iteratee, while test returns true. Calls callback when stopped, or an error occurs.


var count = 0;
async.whilst(
    function test(cb) { cb(null, count < 10); },
    function iter(callback) {
        count++;
        setTimeout(function () {
            callback(null, count);
        }, 1000);
    },
    function (err, n) {
        console.log(n);
    }
);