
//EXPRESS
let Express=require("express")

let App=Express()

//CORS 
let Cors=require("cors")

//AXIOS
let Axios=require("axios")

App.use(Cors())

//FETCHING USERS
App.get('/api/users',async (req,res) => {
try{
    let SendingUsers=await Axios.get('https://jsonplaceholder.typicode.com/users')
    res.status(200).json(SendingUsers.data.slice(0,5)
    )
}
catch(err){
    res.status(404).send(`ErrorName:${err.name} ErrorMessage:${err.message}`)
}
})

//FETCHING TASKS

App.get('/api/Tasks',async (req,res) => {
    try{
        let Taskss=await Axios.get('https://jsonplaceholder.typicode.com/todos')
        res.status(200).json(Taskss.data.slice(0,5))
    }
    catch(err){
        res.status(404).send(`ErrorName:${err.name} ErrorMessage:${err.message}`)
    }
})

App.listen(5000,()=>{
    console.log("SERVER RUNNING SUCCESSFULLY");
    
})