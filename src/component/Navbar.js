import React from 'react'
import logo from  '../img/logo.svg'
import "./styles/Navbar.css"


class Navbar extends React.Component {
    render () {
        return (
            <div className="Navbar">
            <div className="container-fluid">
                <a className="Navbar__brand" href="/">
                    <img src={logo} className="Navbar__brand-logo" alt="img" />
                    <span className="font-weight-light">Platzi</span>
                    <span className="font-weight-bold">Conf</span>
                </a>
            </div>
            </div>
        )
    }
}


export default Navbar