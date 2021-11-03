import React, { Component } from 'react'
import Nav from './Nav'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
                 <Nav/>
            </div>
        )
    }
}

export default Header
