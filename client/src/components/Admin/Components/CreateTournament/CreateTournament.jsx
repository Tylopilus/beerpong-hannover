import React from 'react'
import axios from "axios"
import {getJwt} from "../../../../helpers/jwt"
import "./CreateTournament.css"


export class CreateTournament extends React.Component {
    constructor(){
        super()
        this.state = {
            tournamentName: "",
            maxTeams: "",
            date: "",
            entryFee: "",
            error: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        if(!this.state.tournamentName)
            this.setState({error: "Please enter a name"})
        else if (!this.state.maxTeams)
            this.setState({error: "Please enter maximum teams"})
        else if (!this.state.date)
            this.setState({error: "Please enter a date"})
        else if (new Date(this.state.date).getTime() < new Date(Date.now()).getTime())
            this.setState({error: "Tournament date must be in the future"})
        else if (!this.state.entryFee)
            this.setState({error: "Please enter an entry fee"})
        else{
            axios({
                method:'POST',
                url: "http://localhost:5001/tournaments",
                headers: {
                    authorization: getJwt()
                },
                data: {
                    name: this.state.tournamentName,
                    maxTeamCount: this.state.maxTeams,
                    date: this.state.date,
                    entryFee: this.state.entryFee
                }
            })
            .then(() => {this.setState({error: "Tournament successfully added!"})})
            .catch(err => this.setState({ error: err.response.data.msg.errors[0].message}))
        }
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
                        <label>
                            Enter Entry Fee:
                            <input type="number" placeholder="entry fee" className="createTypeForm" value={this.state.entryFee} onChange={this.handleChange} name="entryFee"/>
                        </label>
                        <button>Submit</button>
                        <h3>{this.state.error}</h3>
                    </form>
                </div>
            </div>
        )    
    }
}