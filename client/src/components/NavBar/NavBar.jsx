import React from "react"
import {Link} from "react-router-dom"
import "./NavBar.css"
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton"
import {getMenuEntries} from '../../helpers/populateMenus'

class NavBar extends React.Component {
    constructor(){
        super()

        this.state={
            // lazy stuff since I dont have a server for my API yet. If so, uncomment componendDidMount()
            // loading: false,
            // list: []
             loading: false,
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
        //     .catch(console.log("Cannot Fetch Menu Items"))
        //  }, 5000)
    }

    componentWillUnmount(){
        // clearInterval(this.lookupInterval)
    }

    render(){
        //const myArray = [{ id: 1, name: "app" }, { id: 2, name: "info"}]
        //const links = myArray.map(e =>  <Link to={e.name} key={e.id}>{e.name}</Link>)
        // const links = this.state.list.map((r, i) => {
        //     if(r.name === 'Login' && jwt){
        //         return(
        //             <li className="navBar__navigation-item" key={i}>
        //                 <NavLink 
        //                 to={"/admin"} 
        //                 key={r.id} 
        //                 exact
        //                 className="navBar__navigation-item-normal"
        //                 activeClassName="navBar__navigation-item-active"
        //                 >
        //                     {"Admin"}
        //                 </NavLink>
        //             </li>
        //         )
        //     }
        //     return(
        //         <li className="navBar__navigation-item" key={i}>
        //             <NavLink 
        //             to={r.url} 
        //             key={r.id} 
        //             exact
        //             className="navBar__navigation-item-normal"
        //             activeClassName="navBar__navigation-item-active"
        //             >
        //                 {r.name}
        //             </NavLink>
        //         </li>
        //     )
        //     })
        const links = getMenuEntries(this.props)
        return(
            <div className="navBar">
                <nav className="navBar__navigation">
                    <div className="navBar__control">
                        <div className="navBar__button"><DrawerToggleButton click={this.props.clickHandler}/></div>
                        <div className="navBar__logo"><Link to="/">Beer Pong Hannover</Link></div>
                    </div>
                    <div className="navBar__navigation-items">
                        <ul>
                            {this.state.loading ? "loading navigation" : links}
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar