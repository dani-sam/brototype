function person(name,age,place,dob){
    this.name=name
    this.age=age
    this.place=place
    this.dob=dob
    this.display=function(){
    console.log("Name: " +this.name+ " Age: " +this.age+ " Place: " +this.place+ " DOB: " +this.dob )
    }
}

var dan=new person('dani',20,'chengannur')
var don=new person('dona',18,'chengannur')

dan.display()
don.display()

 dan.dob='09-06-2001'
