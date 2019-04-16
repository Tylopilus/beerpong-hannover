import React from "react"
import "./Dashboard.css"

class Dashboard extends React.Component {
    render(){
        return(
            <div className="dashboardMain">
                <div className="dashboardSubHeader">
                    <h1>Anstehende Turniere</h1>
                </div>
                <div className="dashboardSubContent">
                    <p>The Content</p>
                    <p>The Content</p>
                    <p>The Content</p>
                </div>
            </div>
        )
    }
}

export default Dashboard