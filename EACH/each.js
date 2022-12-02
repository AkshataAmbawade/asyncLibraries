const async=require('async');
const fs=require('fs')


const directoryList=['dir1/file2.txt', 'dir2/file3.txt', 'dir3/file5.txt'];
const missingList= ['dir1/file1.txt', 'dir4/file2.txt'];

// const deleteFile = function(file, callback) {
//     fs.unlink(file, callback);
// }

// async.each(directoryList, deleteFile, function(err) {
//     if( err ) {
//         console.log(err);
//     } else {
//         console.log('All files have been deleted successfully');
//     }
// });

// Error Handling
// async.each(missingList, deleteFile, function(err){
//     console.log(err);
//     // [ Error: ENOENT: no such file or directory ]
//     // since dir4/file2.txt does not exist
//     // dir1/file1.txt could have been deleted
// });

// async.each(directoryList, deleteFile)
// .then( () => {
//     console.log('All files have been deleted successfully');
// }).catch( err => {
//     console.log(err);
// });

// // Error Handling
// async.each(directoryList, deleteFile)
// .then( () => {
//     console.log('All files have been deleted successfully');
// }).catch( err => {
//     console.log(err);
//     // [ Error: ENOENT: no such file or directory ]
//     // since dir4/file2.txt does not exist
//     // dir1/file1.txt could have been deleted
// });

// // Using async/await
// async () => {
//     try {
//         await async.each(files, deleteFile);
//     }
//     catch (err) {
//         console.log(err);
//     }
// }

// // Error Handling
// async () => {
//     try {
//         await async.each(missingList, deleteFile);
//     }
//     catch (err) {
//         console.log(err);
//         // [ Error: ENOENT: no such file or directory ]
//         // since dir4/file2.txt does not exist
//         // dir1/file1.txt could have been deleted
//     }
// }