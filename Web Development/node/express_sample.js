const express=require('express')
const path=require('path')


const app=express()




app.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname,'signup.html'))
})

app.post('/signup',(req,res)=>{
    res.send('account created')
    console.log('end')
   
})

app.get('/about',(req,res)=>res.send('about'))


app.listen(3000,()=>{
    console.log(__dirname)
    console.log('server started')})