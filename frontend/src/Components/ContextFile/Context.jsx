import React, { createContext, useEffect, useState } from 'react'
import Axios from 'axios'


export let My_Context=createContext()
function Context({children}) {

  //GETTING USERS FROM BACKEND
    
   let [Users,setUsers]=useState([])
    
    async function GettingUsers() {
      try{
          let User=await Axios.get('http://localhost:5000/api/users')
          setUsers(User.data)
          
      }
      catch(err){
          console.log(`ErrorName:${err.name} ErrorMessage:${err.message}`);
          
      }
    }
  
    useEffect(()=>{
      GettingUsers()
    },[])

   
  //  TOTAL USERS
  
 

  //FETCHING TASKS
  let [Tasks,setTasks]=useState([])
  async function FetchTask() {
    try{
        let FTasks=await Axios.get('http://localhost:5000/api/Tasks')
        setTasks(FTasks.data)
    }
    catch(err){

    }
  }

  useEffect(()=>{
    FetchTask()
  },[])

   let CompletedTask=Tasks.filter((x,y)=>{
    return x.completed
   })
   let CompletedTaskLength=CompletedTask.length
   
   let PendingTask=Tasks.filter((x,y)=>{
    return !x.completed
  })

  let PendingTaskLength=PendingTask.length


  function UpdateTask(id){
   let CompletedTasks= Tasks.map((x,y)=>{
        return x.id===id ? {...x,completed:!x.completed}: x
    })
    setTasks(CompletedTasks)
  }
  return (
   <>
   <My_Context.Provider value={{Users,CompletedTask,PendingTask,Tasks,UpdateTask,CompletedTaskLength,PendingTaskLength}}>
    {children}
   </My_Context.Provider>
   </>
  )
}

export default Context