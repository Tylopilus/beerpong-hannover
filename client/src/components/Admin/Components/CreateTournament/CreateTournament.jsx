import React from 'react'
import "./CreateTournament.css"

export class CreateTournament extends React.Component {
    constructor(){
        super()
        this.state = {
            tournamentName: "",
            maxTeams: "",
            date: "",
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    render(){
        return(
            <div className="createContent">
                <h1>Create new Tournament</h1>
                <div >
                    <form className="createForm" onSubmit={this.handleSubmit}>
                        <label>
                            <div>Enter Tournament Name:</div>
                            <input type="text" placeholder="Tournament Name" className="createTypeForm" value={this.state.tournamentName} onChange={this.handleChange} name="tournamentName"/>
                        </label>
                        <label>
                            Enter maximum Teams:
                            <input type="number" placeholder="max teams" className="createTypeForm"value={this.state.maxTeams} onChange={this.handleChange} name="maxTeams"/>
                        </label>
                        <label>
                            Enter Tournament Date:
                            <input type="date" placeholder="date" className="createTypeForm" value={this.state.date} onChange={this.handleChange} name="date"/>
                        </label>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}