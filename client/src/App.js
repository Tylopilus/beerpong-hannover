import React from 'react';
// import Header from "./components/MemeGenerator/Header"
// import MemeGenerator from "./components/MemeGenerator/MemeGenerator"
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import AddPost from "./components/Admin/AddPost"
import "./index.css"
import SideDrawer from "./components/SideDrawer/SideDrawer"
import Backdrop from "./components/Backdrop/Backdrop"
import Tournament from "./components/Tournaments/Tournaments"
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer"

// function App2() {
//   return(
//     <div className="content" style={{marginTop: "64px"}}>
//       <Header />
//       <MemeGenerator />
//     </div>
//   )
// }

class App extends React.Component{
    state = {
      sideDrawerOpen: false
    }
    
    DrawerToggleClickHandler = () => {
      this.setState(prevState => {
        return prevState.sideDrawerOpen = !prevState.sideDrawerOpen
      })
    }

    render(){
      let backdrop

      if(this.state.sideDrawerOpen){
        backdrop = <Backdrop clickHandler={this.DrawerToggleClickHandler}/>
      }

      return(
        <React.Fragment>
          <BrowserRouter>
            <NavBar clickHandler={this.DrawerToggleClickHandler}/>
            <SideDrawer show={this.state.sideDrawerOpen} clickHandler={this.DrawerToggleClickHandler}/>
            {backdrop}
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/turniere" component={Tournament} />
                <Route path="/admin" component={AddPost} />
                <Route component={() => <Redirect to="/" />} />  
            </Switch>
            <Footer />
          </BrowserRouter>
        </React.Fragment>
        )
      }
}


export default App;
