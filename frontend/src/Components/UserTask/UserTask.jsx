import React, { useContext } from 'react'
import { My_Context } from '../ContextFile/Context'

function UserTask() {
  let {Users,PendingTaskLength,CompletedTaskLength}=useContext(My_Context)
  return (
<>
<section className='container-fluid my-5'>
<div className="container">
<div className="row">
<div className="col-lg-3 mx-auto">
<div className="card" id='UserTaskCard'>
<div className="card-body text-center" id='UserTaskCardBody'>
<h5>TOTAL USERS: <span>{Users.length}</span></h5>
<h5>COMPLETED TASK: <span>{CompletedTaskLength}</span></h5>
<h5>PENDING TASK: <span>{PendingTaskLength}</span></h5>
</div>
</div>
</div>
</div>
</div>
</section>
</>
  )
}

export default UserTask