import React from 'react'

import "./styles/badge.css"
import confLogo from '../img/badge-header.svg'


class Badge extends React.Component {
    render() {
        const name = 'Rony'
        const lastName = 'Antolinez'

        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="" />
                </div>

                <div className="Badge__section-name">
                    <img  className="Badge__avatar" src={this.props.avatarUrl} alt="" />
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
