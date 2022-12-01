const async=require('async');
const fs=require('fs');

const directoryList=['dir1/file2.txt', 'dir2/file4.txt', 'dir3/file5.txt'];
const missingList=['dir1/file1.txt','dir2/file3.txt','dir3/file5.txt','dir4/file6.txt'];


const deleteFile=(file,callback)=>{
    fs.unlink(file,callback)
};

// async.eachSeries(directoryList,deleteFile,function(err,result){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Allfiles have deleted successfully");
//     }
// })

// async.eachSeries(missingList,deleteFile,function(err,result){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("All files have been deleted successfully");
//     }
// })


// async.eachSeries(directoryList,deleteFile)
// .then(result=>{
//     console.log("All files have been deleted successfully");
// })
// .catch(err=>{
//     console.log(err);
// })


// async.eachSeries(missingList,deleteFile)
// .then(result=>{
//     console.log("All files have been deleted successfully");
// })
// .catch(err=>{
//     console.log(err);
// })


// const myFunc1=async()=>{
//     try{
//         const result=await async.eachSeries(directoryList,deleteFile);
//         console.log("All have been deleted successfully");
//     }catch(err){
//         console.log(err);
//     }
// }
// myFunc1()


// const myFunc2=async()=>{
//     try{
//         const result=await async.eachSeries(missingList,deleteFile);
//         console.log("All files have been deleted");

//     }catch(err)
//     {
//         console.log(err)
//     }
// }
// myFunc2()
