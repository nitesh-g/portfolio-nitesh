import React, { Component } from 'react';
import './NavigationBar.css'
import { Link } from 'react-router'

export default class NavigationBar extends Component {
    render() {
        return(
           <div className="nav-bar-wrapper">
               <Link className="nav-bar" to="/" >Home</Link>
               <Link className="nav-bar" to="/projects" >Projects</Link>
               <Link className="nav-bar" to="/aboutMe">About Me</Link>               
           </div> 
        );
    }
}