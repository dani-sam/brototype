const { resolve, reject } = require('promise')

Promise=require('promise')

function getName(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('Dani Sam')
        }, 3000);
    })
}

function getMobile(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('98745612230')
        }, 2000);
    })
}

// Promise.all([getName(),getMobile()]).then((result)=>{
//     console.log(result)
// })


async function getUser(){
      let name=await getName()
      console.log(name);
}

getUser()