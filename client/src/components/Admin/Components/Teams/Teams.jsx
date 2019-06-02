import React from "react"
import "./Teams.css"
class Teams extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            loading: false,
            teamList: []
        }
    }
    componentDidMount() {
        fetch("/getTeams")
        .then(res => res.json())
        .then(res => {
            if(res.error)
                console.log(res.error)
            else
                this.setState({
                    teamList: res.teamList
                })
        })
    }

    render(){
        return(
            <div className="dashboardMain">
                <div className="dashboardContent">
                    <div className="dashboardTeams">
                        <div className="dashboardSubHeader"><h1>Teams</h1></div>
                        <div className="dashboardTeamsContent">
                            <table>
                                <tr>
                                    <th>#</th>
                                    <th>Teamname</th>
                                    <th>Spieler1</th>
                                    <th>Spieler2</th>
                                </tr>
                                {this.state.teamList.forEach(element => {
                                    console.log("player", element.Teamname)
                                })}
                                {this.state.teamList.map((element, i) => (
                                    <tr>
                                        <td>{i+1}</td>
                                        <td>{element.Teamname}</td>
                                        <td>{element.Player1}</td>
                                        <td>{element.Player2}</td>
                                    </tr>
                                ))}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Teams