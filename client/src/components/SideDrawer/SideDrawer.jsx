import React from "react"
import "./SideDrawer.css"
import { getMenuEntries } from "../../helpers/populateMenus";

class SideDrawer extends React.Component {
    
    constructor(){
        super()

        this.state={
            loading: false,
        }
    }

    componentDidMount(){
    }

    componentWillUnmount(){
    }


    render(){
        const links = getMenuEntries(this.props)
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