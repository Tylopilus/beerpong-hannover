import React from 'react'
import {Link, Route} from 'react-router-dom'
import {CreateTournament} from "./Components/CreateTournament/CreateTournament"
import "./Admin.css"


export const Admin = () => {
    return (
        <div style={{boxSizing: "border-box"}}>
            <div className="subNav">
                <div className="subNavItems">
                    <ul>
                        <li><Link to="/admin/create" className="subNavItem">Create</Link></li>
                        <li><Link to="/admin/manage" className="subNavItem">Manage</Link></li>
                        <li><Link to="/admin/delete" className="subNavItem">Delete</Link></li>
                    </ul>
                </div>
            </div>
            <Route path="/admin/create" component={CreateTournament}/>
            <Route path="/admin/manage" component={SubView}/>
            <Route path="/admin/delete" component={SubView}/>
        </div>
    )
}

const SubView = ({match}) => {
    console.log(match.params.sectionName)
    return(
        <div>
            {/* <h1>{match.params.sectionName}</h1> */}
            <h1>HI</h1>
            <h1>HI</h1>
            <h1>HI</h1>
        </div>
    )
}