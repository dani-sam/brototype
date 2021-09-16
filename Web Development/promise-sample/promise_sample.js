function add(num1,num2,callback){
    let err=false
    if(num1==0){
        err=true
    }
    callback(num1+num2,err)
    
}

function mutliply(num1,num2,callback){
    callback(num1*num2)
}

function div(num1,num2,callback){
    callback(num1/num2)
}


// add(10,40,(sum,err)=>{
//     if(err){
//         console.log('first number is zero');
//     }else{
//     console.log(sum)
//     mutliply(sum,sum,(product)=>{
//         console.log(product);

//         div(product,10,(result)=>{
//             console.log(result);
//         })
//     })
//     }
// })

const { resolve, reject } = require('promise')
const Promise=require('promise')

function add(num1,num2){
    return new Promise((resolve,reject)=>{
        if(num1==0){
            reject('First number is zero');
        }
        resolve(num1+num2)
    })

    
}


function mutliply(num1,num2){
    return new Promise((resolve,reject)=>{
        if(num1==0){
            reject('First number is zero');
        }
        resolve(num1*num2)
    })

    
}

function div(num1,num2){
    return new Promise((resolve,reject)=>{
        if(num1==0){
            reject('First number is zero');
        }
        resolve(num1/num2)
    })

    
}

    



add(10,50).then((sum)=>{
    console.log(sum);
    return mutliply(sum,sum)
}).then((product)=>{
    console.log(product);
    return div(product,10)
}).then((result)=>{
    console.log(result)
})
.catch((err)=>{
    console.log(err);
})