// import express
const express = require('express')

// import cors
const cors=require('cors')

// import logic
const logic =require('./services/logic')

// create an application using express
const contServer=express()

// using cors to connect frontend port
contServer.use(cors({
    origin:'http://localhost:3000'
}))

// create a middleware for passing json data
contServer.use(express.json())

// define port number
contServer.listen(8000,()=>{
    console.log("contact server listening on the port 8000");       
})

// api call for get all users details - loalhost:8000/get-all-users
contServer.get('/get-all-users',(req,res)=>{
   logic.getAllUsers().then((response)=>{
    res.status(response.statusCode).json(response)
   })
})

// api call for add an user details - loalhost:8000/add-user
contServer.post('/add-contact',(req,res)=>{
    logic.addContact(req.body.id,req.body.name,req.body.username,req.body.phone,req.body.email,req.body.address,req.body.pincode).then((response)=>{
        res.status(response.statusCode).json(response)
    })
   
})

// api call for delete an user details -loalhost:8000/delete-user
contServer.delete('/delete-contact/:id',(req,res)=>{
    logic.deleteContact(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response) 
    })
})

// api call for get an users details - loalhost:8000/get-an-users
contServer.get('/get-all-user/:id',(req,res)=>{
    logic.getAnUsers(req.params.id).then((response)=>{
     res.status(response.statusCode).json(response)
    })
 })

// api call for update an users details - loalhost:8000/get-an-users
contServer.post('/update-an-user/:id',(req,res)=>{
    logic.updateUser(req.params.id,req.body.name,req.body.username,req.body.address,req.body.phone,req.body.email,req.body.pincode).then((response)=>{
     res.status(response.statusCode).json(response)
    })
 })

