import React from "react"
import "./Tournaments.css"
import SingleTournament from "./SingleTournament/SingleTournament"
class Tournaments extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            loading: false,
            tournamentList: []
        }
    }

    componentDidMount() {
        fetch("/tournaments")
        .then(res => res.json())
        .then(res => {
            if(res.error)
                console.log(res.error)
            else
                this.setState({
                    tournamentList: res.tournaments
                })
        })
    }
    
    render(){
        return(
            <React.Fragment>
                <div className="tournaments_parallax"></div>
                <div className="tournament_content">
                    <h1>Anstehende Turniere</h1>
                    <div className="tournament_content_flex">
                        <div>
                            <span style={{fontStyle: "italic"}}>Name des Turniers</span>
                        </div>
                        <div>
                        <span style={{fontStyle: "italic"}}>Datum des Turniers</span>
                        </div>      
                    </div>
                    <hr />
                    {this.state.tournamentList.map(trnmt => (
                        <SingleTournament key={trnmt.id} name={trnmt.name} maxPlayerCount={trnmt.maxTeamCount} date={trnmt.date} entryfee={trnmt.entryFee} id={trnmt.id}/>
                    ))}
                </div>
                <div className="tournament_content" style={{paddingTop: "80px"}}>
                    <h1>Vergangene Turniere</h1>
                    <div className="tournament_content_flex">
                        <div >
                            <span style={{fontStyle: "italic"}}>Name des Turniers</span>
                        </div>
                        <div>
                            <span style={{fontStyle: "italic"}}>Datum des Turniers</span>
                        </div>      
                    </div>
                    <hr />
                </div>
            </React.Fragment>
        )
    }

}

export default Tournaments