const async=require('async');

function myFunction(foo, callback) {
    doAsyncTask(foo, function(err, data) {
        // handle errors
        if (err) return callback(err);

        // do some stuff ...

        // return processed data
        return callback(null, data);
    });
}

var wrapped = async.timeout(myFunction, 1000);

// call `wrapped` as you would `myFunction`
wrapped({ bar: 'bar' }, function(err, data) {
    // if `myFunction` takes < 1000 ms to execute, `err`
    // and `data` will have their expected values

    // else `err` will be an Error with the code 'ETIMEDOUT'
});