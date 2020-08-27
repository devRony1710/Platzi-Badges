import React from 'react'

import "./styles/badge.css"
import confLogo from '../img/badge-header.svg'
import Gravatar from './Gravatar'


class Badge extends React.Component {
    render() {
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="" />
                </div>

                <div className="Badge__section-name">
                    <Gravatar
                    className="Badge__avatar" 
                    email={this.props.email}
                    alt="avatar" 
                    />

                    <h3> {this.props.name} <br/> {this.props.lastName} </h3>
                </div>

                <div className="Badge__section-info">
                    <p>{this.props.jobTitle}</p>
                    <div>{this.props.twitter}</div>
                </div>

                <div className="Badge__footer">
                    #platziconf
                </div>
            </div>
        )
    }



}

export default Badge
