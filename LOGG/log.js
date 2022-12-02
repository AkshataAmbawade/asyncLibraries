const async = require('async');



// const greetings = function (name, callback) {
//     setTimeout(() => {
//         callback(null, 'Hello ' + name)
//     });
//     setTimeout(() => {
//         callback(null, 'Hello ' + name)
//     }, 5000);
//     setTimeout(() => {
//         callback(null, 'Hello ' + name)
//     }, 1000)
// }
// async.log(greetings, "Akshata")

// const work=(name,callback)=>{
//     setTimeout(() => {
//         callback(null,'this work to do '+ name)
//     }, 5000);
// }
// async.log(work,"Akshata")



const usersname=(name,callback)=>{
    setTimeout(() => {
        callback(null,'User name is: '+ name)
    }, 1000);
}
async.log(usersname,"Akshata")