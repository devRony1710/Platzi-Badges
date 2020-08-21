import React from 'react'

import './styles/BadgeNew.css'
import header from '../img/badge-header.svg'
import BadgeForm from '../component/BadgeForm'
import Badge from '../component/badge'


class BadgeNew extends React.Component {
    state = {form: {
        firstName: '',
        lastName: '',
        jobTitle: '',
        email: '',
        twitter: '',
    }}


    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    render () {
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header}/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                name = {this.state.form.firstName}
                                lastName = {this.state.form.lastName}
                                jobTitle = {this.state.form.jobTitle}
                                twitter = {this.state.form.twitter}
                                email = {this.state.form.email}
                                avatarUrl = "https://s.gravatar.com/avatar/6e3a297ae7a7ac39a3539ff4392d3afb?s=80"
                            />
                        </div>

                        <div className="col-6">
                            <BadgeForm
                                onChange={this.handleChange}
                                formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default BadgeNew