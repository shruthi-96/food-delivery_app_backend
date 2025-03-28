//importing all required external modules after installation
const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const User=require('./models/User')

//middleware
const PORT=3000
const app=express()
app.use(express.json())

//connecting mongodb Atlas
mongoose.connect(process.env.MONGO_URL).then(
    ()=>console.log("DB connected successfully...")
).catch(
    (err)=>console.log(err)
)

//API landing page http://localhost:3000/register

app.get('/',async(req, res)=>{
    try{
       res.send("<h1 align=center>welcome to the backend and week 2</h1>")
    }
    catch(err)
    {
        console.log(err)
    }
})

//API registration page http://localhost:3000/register

app.post('/register',async(req, res)=>{
    const {user,email, password}=req.body
    try{
        const newUser=new User({user,email,password})
        await newUser.save()
        console.log("New user is registered successfully...")
        res.json({messafe:'User created....'})
        
    }
    catch(err)
    {
        console.log(err)
    }
})

//server running and testing
app.listen(PORT,(err)=>{
    if(err){
        console.log(err)
    }
    console.log("server is running on port | this sarwar : "+PORT)
})
