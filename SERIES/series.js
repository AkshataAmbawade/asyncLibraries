const async=require("async");
// Executes one by one

const callback=(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
}
async.series([
    function onE(callback){
        setTimeout(() => {
            callback(null,"One")
        }, 2000);
    },
    function twO(callback){
        setTimeout(() => {
            callback(null,"Two")
        }, 2000);
    }
],callback)