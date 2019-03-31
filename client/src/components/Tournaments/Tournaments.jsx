import React from "react"
import "./Tournaments.css"
import SingleTournament from "./SingleTournament/SingleTournament"
const Tournaments = props => (
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
            <SingleTournament />
            <SingleTournament />
            <SingleTournament />
            <SingleTournament />
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

export default Tournaments