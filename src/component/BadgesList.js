import React from 'react'
import './styles/BadgesList.css'
import logoList from '../img/unnamed.png'
import {Link} from 'react-router-dom'
import Gravatar from './Gravatar'

class BadgesList extends React.Component {


    render () {
        if(this.props.badges.length === 0) {
            return(
                <div>
                    <h3>No Badges Were Found</h3>
                    <Link className="btn btn-primary" to="/badges/new">Create New Badge</Link>
                </div>
            )
        }
        return (
            <div className="BadgesList">
                <ul className="list-unstyled">
                    {this.props.badges.map( (badge) => {
                        return (
                            <li className="BadgesListItem" key= {badge.id}>
                                <Gravatar
                                className="BadgesListItem__avatar"
                                email={badge.email}
                                alt="avatar"
                                />
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