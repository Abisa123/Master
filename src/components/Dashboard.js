import React from 'react'
import Sidebar from "./Sidebar.js"
import {Route} from 'react-router-dom'

function Dashboard() {
    return (
        <div>
        <Route path="/dashboard" exact component={Sidebar}/> 
        </div>
    )
}

export default Dashboard;
