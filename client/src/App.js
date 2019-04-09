import React from 'react';
// import Header from "./components/MemeGenerator/Header"
// import MemeGenerator from "./components/MemeGenerator/MemeGenerator"
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import {Admin} from "./components/Admin/Admin"
import "./index.css"
import SideDrawer from "./components/SideDrawer/SideDrawer"
import Backdrop from "./components/Backdrop/Backdrop"
import Tournament from "./components/Tournaments/Tournaments"
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer"
import Login from "./components/Login/Login"
import AuthenticationController from './components/AuthenticationController/AuthenticationController';

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
                <Route path="/regelwerk" component={Home} />
                <Route path="/verein" component={Home} />
                <Route path="/kontakt" component={Home} />
                <Route path="/login" component={Login} />
                <AuthenticationController>
                  <Route path="/admin" component={Admin} />
                </AuthenticationController>
                <Route component={() => <Redirect to="/404" />} />
            </Switch>
            <Footer />
          </BrowserRouter>
        </React.Fragment>
      )
    }
}


export default App;
