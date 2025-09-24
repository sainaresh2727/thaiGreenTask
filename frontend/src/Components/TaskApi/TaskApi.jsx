import React from 'react'
import { useContext } from 'react'
import { My_Context } from '../ContextFile/Context'

function TaskApi() {
  let {Tasks,UpdateTask,ConfirmModel}=useContext(My_Context)
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

  {/* MODAL FOR POPUP */}
  <div className="modal fade"  ref={ConfirmModel}>
  <div className="modal-dialog">
  <div className="modal-content">
  <div className="modal-header">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div className="modal-body">
<p>UPDATED SUCCESSFULLY.</p>
</div>
<div className="modal-footer">
<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

</div>
 </div>
</div>
</div>
  </>
  )
}

export default TaskApi