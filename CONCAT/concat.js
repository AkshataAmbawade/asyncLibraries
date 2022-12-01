const async=require("async");
const fs = require("fs")
// The iteratees are called in parallel

// dir1 is a directory that contains file1.txt, file2.txt
// dir2 is a directory that contains file3.txt, file4.txt
// dir3 is a directory that contains file5.txt
// dir4 does not exist

const directoryList = ['dir1','dir2','dir3'];
let withMissingDirectoryList = ['dir1','dir2','dir3', 'dir4'];

// Using callbacks
async.concat(directoryList, fs.readdir, function(err, results) {
   if (err) {
       console.log(err);
   } else {
       console.log(results);
       // [ 'file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', file5.txt ]
   }
});


// Error Handling
async.concat(withMissingDirectoryList, fs.readdir, function(err, results) {
    if (err) {
        console.log(err);
        // [ Error: ENOENT: no such file or directory ]
        // since dir4 does not exist
    } else {
        console.log(results);
    }
 });

// Using Promises
async.concat(directoryList, fs.readdir)
.then(results => {
    console.log(results);
    // [ 'file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', file5.txt ]
}).catch(err => {
     console.log(err);
});

// Error Handling
async.concat(withMissingDirectoryList, fs.readdir)
.then(results => {
    console.log(results);
}).catch(err => {
    console.log(err);
    // [ Error: ENOENT: no such file or directory ]
    // since dir4 does not exist
});

// Using async/await
const myFunc1=async () => {
    try {
        let results = await async.concat(directoryList, fs.readdir);
        console.log(results);
        // [ 'file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', file5.txt ]
    } catch (err) {
        console.log(err);
    }
}
myFunc1()


// Error Handling
const myFunc=async () => {
    try {
        let results = await async.concat(withMissingDirectoryList, fs.readdir);
        console.log(results);
    } catch (err) {
        console.log(err);
        // [ Error: ENOENT: no such file or directory ]
        // since dir4 does not exist
    }
}
myFunc()

