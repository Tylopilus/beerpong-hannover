import React from "react"
import "./SingleTournament.css"

class SingleTournament extends React.Component{

    constructor(){
        super()

        this.state = {
            visible: false
        }
    }
    clickHandler(e) {
        this.setState(prevState => (
            prevState.visible = !prevState.visible
        ))
    }

    render(){
        let visible = this.state.visible ? "150px" : "0px"
        return(
            <div>
                <div className="tournamentList" >
                    <div className="tournamentInfo" onClick={(e) => {this.clickHandler(e)}}>
                        <div className="tournamentName">
                        Hanomacken Tournier 2019 #5
                        </div>
                        <div className="tournamentDate">
                        29.03.2019
                        </div>
                    </div>
                    <div className="clear" />
                    <div className="tournamentContent" style={{maxHeight: visible, paddingTop: "10px"}}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Anmeldung:</td>
                                    <td>Offen</td>
                                </tr>
                                <tr>
                                    <td>Wochentag:</td>
                                    <td>Freitag</td>
                                </tr>
    
                                <tr>
                                    <td>Teilnehmer:</td>
                                    <td>20/48</td>
                                </tr>
                                <tr>
                                    <td>Eintritt:</td>
                                    <td>5€</td>
                                </tr>
                            </tbody>
                        </table>
                        <button onClick={console.log("anmelden")}>Jetzt anmelden</button>
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}

export default SingleTournament