import React from 'react'
import { useContext } from 'react'
import { My_Context } from '../ContextFile/Context'

function TaskApi() {
  let {Tasks,UpdateTask}=useContext(My_Context)
  return (
  <>
  <section className='container-fluid my-5'>
  <div className="container">
  <div className="table-responsive">
  <table className='table table-primary'>
  <thead>
  <tr>
  <th>TASK</th>
  <th>UPDATE</th>
  </tr>
  </thead>
  <tbody>
  {
    Tasks.map((x,y)=>{
    return(
    <>
    <tr>
    <td>{x.title}</td>
    <td><button className='btn btn-danger' onClick={()=>UpdateTask(x.id)}>UPDATE HERE</button></td>
    </tr>
    </>
        )
    })
  }
  </tbody>
  </table>
  </div>
  </div>
  </section>
  </>
  )
}

export default TaskApi