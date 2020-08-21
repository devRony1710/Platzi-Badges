import React from 'react'
import astronauts from '../img/astronauts.svg'
import './styles/Home.css'
import { Link } from 'react-router-dom'

function Home () {
    return (
        <div className="Home__container">
            <img className="Home__img" src={astronauts} alt=""/>
            <div className="Home__link">
                <Link to="/badges/new" className="btn btn-primary">
                    Go To PlatziConf
                </Link>
            </div>
        </div>
    )
}

export default Home
