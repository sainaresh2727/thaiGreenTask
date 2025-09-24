import React, { useContext, useEffect, useState } from 'react'
import Axios from 'axios'
import { My_Context } from '../ContextFile/Context'

function UserTable() {
  
 let {Users} =useContext(My_Context)

  return (
    <>
    <section className='container-fluid'>
    <div className="container">
    
    <div className="table-responsive">
    <table className='table table-primary'>
    
    <thead>
    <tr>
    <th style={{fontStyle:"italic"}}>NAME</th>
    <th style={{fontStyle:"italic"}}>EMAIL</th>
    <th style={{fontStyle:"italic"}}>PHONE NO:</th>
    <th style={{fontStyle:"italic"}}>COMPANY:</th>
    </tr>
    </thead>

    <tbody>
    {
    Users.map((x,y)=>{
    return(
    <>
    <tr key={y}>
    <td className='' style={{fontWeight:"bold",fontStyle:"italic"}}>{x.name}</td>
    <td className='' style={{fontWeight:"bold",fontStyle:"italic"}}>{x.email}</td>
    <td className='' style={{fontWeight:"bold",fontStyle:"italic"}}>{x.phone}</td>
    <td className='' style={{fontWeight:"bold",fontStyle:"italic"}}>{x.company.name}</td>
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

export default UserTable