import React from 'react'
import './styles/BadgesList.css'
import logoList from '../img/unnamed.png'

class BadgesList extends React.Component {

    render () {
        return (
            <div className="BadgesList">
                <ul className="list-unstyled">
                    {this.props.badges.map( (badge) => {
                        return (
                            <li className="BadgesListItem" key= {badge.id}>
                                <img className="BadgesListItem__avatar" src={logoList} alt=""/>
                                <div className="listInfo">
                                    <p>{badge.firstName} {badge.lastName}</p>
                                    <p>{badge.jobTitle}</p>
                                    <p>{badge.twitter}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }


}

export default BadgesList