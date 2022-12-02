const async=require('async');


// Pretend this is some complicated async factory
// var createUser = function(id, callback) {
//     callback(null, {
//         id: 'user' + id
//     });
// };

// // generate n users
// async.times(1, function(n, next) {
//     createUser(n, function(err, user) {
//         next(err, user)
//             if(err){
//                 console.log(err);
//             }else{
//                 console.log(user);
//             }
        
//     });
// });

// const createUser=function(id,callback){
//     callback(null,{
//         id:'user'+id
//     })
// }


// async.times(51,function(n,next){
//     createUser(n,function(err,user){
//         next(err,user)
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log(user);
//         }
//     })
// })

const createUser=function(name,callback){
    callback(null,{
        name:`${name}`
    })
}
async.times(1001, function(n,next){
    createUser("Akshata",function(err,user){
        next(err,user)
        if(err){
            console.log(err);
        }
        else{
            console.log(user);
        }
    })
})