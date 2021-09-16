var r = require('readline-sync')
console.log('Enter 2 no:')
var num1=r.question('')
var num2=r.question('')

if(num1>num2){
    console.log('larger is '+num1)
}else{
   console.log('larger is '+num2)
}