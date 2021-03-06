import React from 'react'
import {Link, Route, withRouter} from 'react-router-dom'
import {CreateTournament} from "./Components/CreateTournament/CreateTournament"
import ManageTournament from "./Components/ManageTournament/ManageTournament"
import Dashboard from "./Components/Dashboard/Dashboard"
import Teams from "./Components/Teams/Teams"
import Groups from "./Components/Groups/Groups"
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
        let subNavState = ["subNav"]
        if(this.state.adminMenuOpen)
            subNavState = ["subNav open"]
        return (
            <div className="adminContent">
                <div className={subNavState}>
                    <div className="subNavItems">
                        <div>
                            <ul>
                                <li><Link to="/admin/create" className="subNavItem" onClick={this.menuToggleClickHandler}>Create</Link></li>
                                <li><Link to="/admin/dashboard" className="subNavItem" onClick={this.menuToggleClickHandler}>ToDo</Link></li>
                                <li><Link to ="/admin/teams" className="subNavItem" onClick={this.menuToggleClickHandler}>Teams</Link></li>
                                <li><Link to ="/admin/groups" className="subNavItem" onClick={this.menuToggleClickHandler}>Gruppen</Link></li>
                                {this.props.userState.authLevel === "Admin" ? <li><Link to="/admin/delete" className="subNavItem">Delete</Link></li>: null}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="subNavIndicator" onClick={this.menuToggleClickHandler}>
                    {this.state.adminMenuOpen ? <i className="fa fa-chevron-up" style={{fontSize: "26px", cursor: "pointer"}}></i> : <i className="fa fa-chevron-down" style={{fontSize: "26px", cursor: "pointer"}}></i>}
                </div>
                <Route path="/admin/create" component={CreateTournament}/>
                <Route path="/admin/manage" component={ManageTournament}/>
                <Route path="/admin/delete" component={SubView}/>
                <Route path="/admin/users" component={SubView}/>
                <Route path="/admin/dashboard" component={Dashboard}/>
                <Route path="/admin/teams" component={Teams}/>
                <Route path="/admin/groups" component={Groups}/>
            </div>
        )
    }
}

export default withRouter(Admin)

const SubView = ({match}) => {
    return(
        <div style={{textAlign: "center", height: "100%"}}>
            {/* <h1>{match.params.sectionName}</h1> */}
            <div className="dashboardMain">
                <div className="dashboardSubHeader">

                </div>
                <div className="dashboardSubContent">

                </div>
            </div>

        </div>
    )
}