var person={name:"dani",place:"chengannur",age:"30",display: function() {
    console.log(this.name)
}}

for(x in person){
    console.log(person[x])
}


person.dob='09-06-2001'
person.displaydob=function(){
    console.log(this.dob)
}


console.log(person.displaydob)