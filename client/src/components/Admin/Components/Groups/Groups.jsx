import React from "react"
import {Link, Route, withRouter} from 'react-router-dom'
import "./Groups.css"

class Groups extends React.Component {

    
    constructor(props){
        super(props)

        this.state = {
            groups: []
        }
    }

    componentDidMount() {
        fetch("/getGroups")
        .then(res => res.json())
        .then(res => {
            if(res.error)
                console.log(res.error)
            else
                this.setState({
                    groups: res
                })
        })
    }
    render(){
        //this.state.groups.forEach(el => console.log(el))
        return(
            <div className="GroupsMain">
                <div className="GroupsContent">
                    <div className="GroupsTodo">
                        <div className="GroupsSubHeader">      
                                {this.state.groups.map((el, i) => {
                                    return(
                                        <Link to={`/admin/groups/${i+1}`} className="headline">{el[0].GroupName}</Link>
                                    )
                                })}
                        </div>
                    </div>
                </div>
                    {this.state.groups.length > 0 ? <Route path="/admin/groups/:id" component={(props) => <SubView {...props} groups={this.state.groups}/>}/> : null}
                    {/* <Route path="/admin/groups/:id" component={(props) => <SubView {...props} groups={this.state.groups}/>}/> */}
            </div>
        )
    }
}

export default withRouter(Groups)

class SubView extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props)
        return(
            <div className="dashboardMain">
                <div className="dashboardContent">
                    <div className="dashboardTeams">
                        <div className="dashboardSubHeader"><h1>Gruppe{this.props.match.params.id}</h1></div>
                        <div className="dashboardTeamsContent">
                    <table>
                        <tbody>
                            <tr>
                                <th>#</th>
                                <th>Teamname</th>
                                <th>Wins</th>
                                <th>Cups</th>
                            </tr>
                            {this.props.groups.length > 0 ? 
                                this.props.groups[this.props.match.params.id-1].map((el,i) => 
                                    <tr>
                                        <td>{i+1}</td>
                                        <td>{el.TeamName}</td>
                                        <td>0</td>
                                        <td>0</td>
                                        {console.log(el)}
                                    </tr>
                            ) : null}
                                
                        </tbody>
                    </table>
                    <hr/>
                    <table>
                        <tbody>
                            <tr>
                                <th>Spiel</th>
                                <th>Sieger</th>
                                <th>Cups</th>
                            </tr>
                            <tr>
                                <td>1:2</td>
                                <td>asd</td>
                                <td>asd</td>
                            </tr>
                            <tr>
                                <td>1:3</td>
                                <td><input type="number"></input></td>
                                <td><input></input></td>
                            </tr>
                            <tr>
                                <td>1:4</td>
                                <td><input></input></td>
                                <td><input></input></td>
                            </tr>
                            <tr>
                                <td>1:5</td>
                                <td><input></input></td>
                                <td><input></input></td>
                            </tr>
                            <tr>
                                <td>1:6</td>
                                <td><input></input></td>
                                <td><input></input></td>
                            </tr>
                            <tr>
                                <td>2:3</td>
                                <td><input></input></td>
                                <td><input></input></td>
                            </tr>
                            <tr>
                                <td>2:4</td>
                                <td><input></input></td>
                                <td><input></input></td>
                            </tr>
                            <tr>
                                <td>2:5</td>
                                <td><input></input></td>
                                <td><input></input></td>
                            </tr>
                            <tr>
                                <td>2:6</td>
                                <td><input></input></td>
                                <td><input></input></td>
                            </tr>
                            <tr>
                                <td>3:4</td>
                                <td><input></input></td>
                                <td><input></input></td>
                            </tr>
                            <tr>
                                <td>3:5</td>
                                <td><input></input></td>
                                <td><input></input></td>
                            </tr>
                            <tr>
                                <td>3:6</td>
                                <td><input></input></td>
                                <td><input></input></td>
                            </tr>
                            <tr>
                                <td>4:5</td>
                                <td><input></input></td>
                                <td><input></input></td>
                            </tr>
                            <tr>
                                <td>4:6</td>
                                <td><input></input></td>
                                <td><input></input></td>
                            </tr>
                            <tr>
                                <td>5:6</td>
                                <td><input></input></td>
                                <td><input></input></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
            </div>
        )
    }
}
// = ({match}) => {
//     console.log(match)
//     return(
//         <div style={{textAlign: "center", height: "100%"}}>
//             <h1>{match.params.id}</h1>
//         </div>
//     )
// }