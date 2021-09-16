
function longtask(millsecondtime){
    dt=new Date()
    while((new Date-dt) <=millsecondtime){

    }
}

function showend(){
    console.log('end')
}


console.log('start')
setTimeout(showend,2000)

console.log('start')
setTimeout(showend,2000)

console.log('start')
setTimeout(showend,2000)



