const async=require('async');
// Executes together

const callback=(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
}

async.parallel([
    function onE(callback){
        setTimeout(() => {
            callback(null,"One")
        }, 1000);
    },
    function twO(callback){
        setTimeout(() => {
            callback(null,"Two")
        }, 2000);
    }
],callback)