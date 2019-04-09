import React from "react"
import "./SingleTournament.css"

class SingleTournament extends React.Component{

    constructor(){
        super()

        this.state = {
            visible: false,
            playerCount: 0
        }
    }
    clickHandler(e) {
        this.setState(prevState => (
            prevState.visible = !prevState.visible
        ))
    }

    componentDidMount(){
        fetch(`/tournaments/${this.props.id}`)
        .then(res => res.json())
        .then(res => {
            if(res.count)
                this.setState({
                    playerCount: res.count
                })
        })
    }

    render(){
        let visible = this.state.visible ? "150px" : "0px"
        return(
            <div>
                <div className="tournamentList" >
                    <div className="tournamentInfo" onClick={(e) => {this.clickHandler(e)}}>
                        <div className="tournamentName">
                        {this.props.name}
                        </div>
                        <div className="tournamentDate">
                        {new Date(this.props.date).toLocaleDateString()}
                        </div>
                    </div>
                    <div className="clear" />
                    <div className="tournamentContent" style={{maxHeight: visible, paddingTop: "10px"}}>
                        {/* TODO: Fetch this from a database via /tournament/:id API Call */}
                        <table>
                            <tbody>
                                <tr>
                                    <td>Anmeldung:</td>
                                    <td>Offen</td>
                                </tr>
                                <tr>
                                    <td>Wochentag:</td>
                                    <td>{new Date(this.props.date).toLocaleDateString("de-DE", {weekday: 'long'})}</td>
                                </tr>
    
                                <tr>
                                    <td>Teilnehmer:</td>
                                    <td>{this.state.playerCount}/{this.props.maxPlayerCount}</td>
                                </tr>
                                <tr>
                                    <td>Eintritt:</td>
                                    <td>5€</td>
                                </tr>
                            </tbody>
                        </table>
                        <button>Jetzt anmelden</button>
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}

export default SingleTournament