import React from "react"
import "./SideDrawer.css"
import {NavLink} from "react-router-dom"

class SideDrawer extends React.Component {
    
    constructor(){
        super()

        this.state={
            // lazy stuff since I dont have a server for my API yet. If so, uncomment componendDidMount()
            // loading: false,
            // list: []
            loading: false,
            list: [
               {id: 1, name: "Home", url: "/", edit: false},
               {id: 2, name: "Turniere", url: "/turniere", edit: false},
               {id: 3, name: "Regelwerk", url: "/regelwerk", edit: false},
               {id: 4, name: "Verein", url: "/verein", edit: false},
               {id: 5, name: "Kontakt", url: "/kontakt", edit: false},
               {id: 6, name: "Login", url: "/login", edit: false}
           ]
        }
    }

    componentDidMount(){
        // this.setState({loading: true})
        // fetch("/api/urls")
        // .then(res => res.json())
        // .then(res => this.setState({
        //     loading: false, 
        //     list: res.data}))
        // .catch(error => console.log("Cannot Fetch Menu Items", error))


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