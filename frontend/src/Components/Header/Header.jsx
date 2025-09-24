import React from 'react'

function Header() {
  let Todaydate=new Date()
  let TodayDate=Todaydate.toLocaleDateString()
  return (
    <>
    <section className='container-fluid'>
    <div className="container p-2" id='HeaderContainer'>
     
    <div>
    <h3>MY DASHBOARD</h3>
    </div>
    <div>
    <h4>{TodayDate}</h4>
    </div>

    </div>
    </section>
    </>
  )
}

export default Header