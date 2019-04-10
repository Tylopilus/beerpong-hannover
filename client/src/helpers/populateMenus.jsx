import React from 'react'
import {NavLink} from 'react-router-dom'
import {getJwt} from './jwt'

export const getMenuEntries = (props) => {
    const list = [
            {id: 1, name: "Home", url: "/", edit: false},
            {id: 2, name: "Turniere", url: "/turniere", edit: false},
            {id: 3, name: "Regelwerk", url: "/regelwerk", edit: false},
            {id: 4, name: "Verein", url: "/verein", edit: false},
            {id: 5, name: "Kontakt", url: "/kontakt", edit: false},
            {id: 6, name: "Login", url: "/login", edit: false}
        ]
    
    const links = list.map((r, i) => {
        if(r.name === 'Login' && props.isLoggedIn){
            return(
                <li className="navBar__navigation-item" key={i}>
                    <NavLink 
                    to={"/admin"} 
                    key={r.id} 
                    exact
                    className="navBar__navigation-item-normal"
                    activeClassName="navBar__navigation-item-active"
                    onClick={!props.navBar ? props.clickHandler : undefined}
                    >
                        {"Admin"}
                    </NavLink>
                </li>
            )
        }
        return(
            <li className="navBar__navigation-item" key={i}>
                <NavLink 
                to={r.url} 
                key={r.id} 
                exact
                className="navBar__navigation-item-normal"
                activeClassName="navBar__navigation-item-active"
                onClick={!props.navBar ? props.clickHandler : undefined}
                >
                    {r.name}
                </NavLink>
            </li>
        )
    })
    return links
}