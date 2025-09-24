import React from 'react'
import Header from '../Components/Header/Header'
import UserTable from '../Components/UserTable/UserTable'
import UserTask from '../Components/UserTask/UserTask'
import TaskApi from '../Components/TaskApi/TaskApi'

function Home() {
  return (
    <>
    <Header/>
    <UserTask/>
    <UserTable/>
    <TaskApi/>
    </>
  )
}

export default Home