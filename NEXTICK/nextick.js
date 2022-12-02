const async=require('async');


var call_order = [];
async.nextTick(function() {
    call_order.push('two');
    console.log(call_order);
    // call_order now equals ['one','two']
});
// call_order.push('one');

// async.setImmediate(function (a, b, c) {
//     console.log(a,b,c);
//     // a, b, and c equal 1, 2, and 3
// }, 1, 2, 3);