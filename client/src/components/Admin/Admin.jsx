import React from 'react'
import {Link, Route, withRouter} from 'react-router-dom'
import {CreateTournament} from "./Components/CreateTournament/CreateTournament"
import "./Admin.css"


class Admin extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            adminMenuOpen: false
        }
    }

    menuToggleClickHandler = () => {
        this.setState(prev => {
            return prev.adminMenuOpen = !prev.adminMenuOpen
        })
    }

    componentDidMount(){
        this.props.history.push("/admin/dashboard")
    }

    render(){
        console.log(this.state.adminMenuOpen)
        let subNavState = ["subNav"]
        if(this.state.adminMenuOpen)
            subNavState = ["subNav open"]
        return (
            <div>
                <div className={subNavState}>
                    <div className="subNavItems">
                        <div>
                            <ul>
                                <li><Link to="/admin/dashboard" className="subNavItem" onClick={this.menuToggleClickHandler}>Dashboard</Link></li>
                                <li><Link to="/admin/create" className="subNavItem" onClick={this.menuToggleClickHandler}>Create</Link></li>
                                <li><Link to="/admin/manage" className="subNavItem" onClick={this.menuToggleClickHandler}>Manage</Link></li>
                                <li><Link to="/admin/delete" className="subNavItem" onClick={this.menuToggleClickHandler}>Delete</Link></li>
                                {this.props.userState.authLevel === "admin" ? <li><Link to="/admin/users" className="subNavItem">Users</Link></li>: null}
                            </ul>
                        </div>
                        <div className="subNavIndicator" onClick={this.menuToggleClickHandler}>
                            {this.state.adminMenuOpen ? <i className="fa fa-chevron-up" style={{fontSize: "26px", cursor: "pointer"}}></i> : <i className="fa fa-chevron-down" style={{fontSize: "26px", cursor: "pointer"}}></i>}
                        </div>
                    </div>
                </div>
                <Route path="/admin/create" component={CreateTournament}/>
                <Route path="/admin/manage" component={SubView}/>
                <Route path="/admin/delete" component={SubView}/>
                <Route path="/admin/users" component={SubView}/>
                <Route path="/admin/dashboard" component={SubView}/>
            </div>
        )
    }
}

export default withRouter(Admin)

const SubView = ({match}) => {
    return(
        <div style={{textAlign: "center", height: "100%"}}>
            {/* <h1>{match.params.sectionName}</h1> */}
            <h1>DASHBOARD</h1>
        </div>
    )
}