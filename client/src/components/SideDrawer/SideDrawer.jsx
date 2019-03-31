import React from "react"
import "./SideDrawer.css"
import {NavLink} from "react-router-dom"

class SideDrawer extends React.Component {
    
    constructor(){
        super()

        this.state={
            loading: false,
            list: []
        }
    }

    componentDidMount(){
        this.setState({loading: true})
        fetch("/api/urls")
        .then(res => res.json())
        .then(res => this.setState({
            loading: false, 
            list: res.data}))
        .catch(error => console.log("Cannot Fetch Menu Items", error))


        //  this.lookupInterval = setInterval(() => {
        //     fetch("/api/urls")
        //     .then(res => res.json())
        //     .then(res => this.setState({
        //         loading: false, 
        //         list: res.data}))
        //  }, 5000)
    }

    componentWillUnmount(){
        // clearInterval(this.lookupInterval)
    }


    render(){
        const links = this.state.list.map((r, i) => (
            <li className="navBar__navigation-item" key={i}>
                <NavLink 
                to={r.url} 
                key={r.id} 
                exact
                className="navBar__navigation-item-normal"
                activeClassName="navBar__navigation-item-active"
                onClick={this.props.clickHandler}
                >
                    {r.name}
                </NavLink>
            </li>))
        let drawerClass = ["side-drawer"];
        if(this.props.show){
            drawerClass = ["side-drawer open"]
        }
        return(
        <nav className={drawerClass}>
            <ul>
                {this.state.loading ? "loading navigation" : links}
            </ul>
        </nav>
        )
    }
}

export default SideDrawer