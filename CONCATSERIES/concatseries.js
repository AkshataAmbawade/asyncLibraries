const async=require('async');
const fs=require('fs')

const directoryList=['dir1','dir2','dir3'];
const missingdirectoryList=['dir1','dir2','dir3','dir4'];

async.concatSeries(directoryList,fs.readdir,function(err,result){
    if(err){
        console.log(err);
    }
    else{
        console.log(result);
    }
});
async.concatSeries(missingdirectoryList,fs.readdir,function(err,result){
    if(err){
        console.log(err);
    }
    else{
        console.log(result);
    }
})
async.concatSeries(directoryList,fs.readdir)
.then(result=>{
    console.log(result);
})
.catch(err=>{
    console.log(err);
})
async.concatSeries(missingdirectoryList,fs.readdir)
.then(result=>{
    console.log(result);
})
.catch(err=>{
    console.log(err);
})

const myfunc1=async ()=>{
    try{
        const result=await async.concatSeries(directoryList,fs.readdir)
        console.log(result);
    }catch(err){
        console.log(err);
    }
}
myfunc1()

const myfunc2=async()=>{
try{
    const result=await async.concatSeries(missingdirectoryList,fs.readdir);
    console.log(result);
}catch(err){
    console.log(err);
}
}
myfunc2()


