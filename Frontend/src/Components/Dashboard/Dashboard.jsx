import React from 'react'
import Sidebar from '../Dashboard/Components/Sidebar Section/Sidebar'

const Dashboard = () => {
  return (
    <div className ='dashboard flex'>
        <div className="dashboardContainer flex">
            <Sidebar/>
            <body/>
           </div>
        </div> 
  )
}

export default Dashboard