import React from 'react'
import {withRouter} from "react-router-dom"
import axios from 'axios'
import {getJwt} from '../../helpers/jwt'

class Login extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
            errormsg: ''
        }
    }

    componentDidMount(){
        const jwt = getJwt()
        if(jwt)
            this.props.history.push('/admin')
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        axios.post('/login', {
            email: this.state.email,
            password: this.state.password
        })
        .then(res => {
            localStorage.setItem('jwt', res.data.token)
            this.props.history.push("/admin")
            //window.location.reload()
            this.props.isLoggedIn(true)
            })
        .catch(err => this.setState({errormsg: err.response.data.error}))
    }

    render(){
        return(
            <div style={{marginTop: "56px", height: "100vh"}}>
                <form onSubmit={this.submitHandler}>
                <input type="text" name="email" value={this.state.email} placeholder="email" onChange={this.changeHandler}/>
                <br/>
                <input type="password" name="password" value={this.state.password} placeholder="password" onChange={this.changeHandler}/>
                <button>Submit!</button>
                <br />
                <h1>{this.state.errormsg}</h1>
                </form>
            </div>
        )
    }
}
export default withRouter(Login)