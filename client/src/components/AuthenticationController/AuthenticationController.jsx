import React from 'react'
import {withRouter} from "react-router-dom"
import Axios from 'axios';
import {getJwt} from '../../helpers/jwt'
import "../../index.css"

class AuthenticationController extends React.Component {

    componentDidMount(){
        const jwt = getJwt();
        Axios.get("/getAuthedUser", {headers: { Authorization: `Bearer ${jwt}`}})
        .then(res => {
            this.props.setUserState({
                isLoggedIn: true,
                playerName: res.data.playerName,
                authLevel: res.data.userGroup
            })
        })
        .catch(err => {
            localStorage.removeItem('jwt')
            this.props.setUserState({isLoggedIn: false})
            this.props.history.push("/login")
        })
    }

    render(){
        if(this.props.userState.playerName === undefined){
            return(
                <div className="authController">
                    <h1>Loading</h1>
                </div>
            )
        }
        return(
            <div className="authController">
                {this.props.children}
            </div>
        )
    }
}

export default withRouter(AuthenticationController)