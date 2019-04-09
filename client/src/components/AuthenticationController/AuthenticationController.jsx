import React from 'react'
import {withRouter} from "react-router-dom"
import Axios from 'axios';
import {getJwt} from '../../helpers/jwt'

class AuthenticationController extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            user: undefined,
        }
    }

    componentDidMount(){
        const jwt = getJwt();
        Axios.get("/getAuthedUser", {headers: { Authorization: `Bearer ${jwt}`}})
        .then(res => {
            this.setState({
                user: res.data.playerName
            })
        })
        .catch(err => {
            localStorage.removeItem('jwt')
            this.props.history.push("/login")
        })
    }

    render(){
        if(this.state.user === undefined){
            return(
                <div style={{marginTop: "56px"}}>
                    <h1>Loading</h1>
                </div>
            )
        }
        return(
            <div style={{marginTop: "56px"}}>
                {this.props.children}
            </div>
        )
    }
}

export default withRouter(AuthenticationController)