import React from 'react'

import './styles/BadgeNew.css'
import header from '../img/badge-header.svg'
import BadgeForm from '../component/BadgeForm'
import Badge from '../component/badge'
import PageLoading from '../component/PageLoading'
import api from '../api'


class BadgeNew extends React.Component {


    state = {

        loading: false,
        error:null,

        form: {
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

    handleSubmit = async e => {
        e.preventDefault()
        this.setState({ loading: true, error: null})


        try{
            await api.badges.create(this.state.form)
            this.setState({loading: false})
        }catch (error) {
            this.setState({loading: false, error:error})
        }

    }

    render () {

        if(this.state.loading){
            return(
                <PageLoading />
            )
        }

        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="img header"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                name = {this.state.form.firstName || 'First Name'} 
                                lastName = {this.state.form.lastName || 'Last_Name'} 
                                jobTitle = {this.state.form.jobTitle || 'Job_title'}
                                twitter = {this.state.form.twitter || 'twitter'}
                                email = {this.state.form.email || 'Email'}
                                avatarUrl = "https://s.gravatar.com/avatar/6e3a297ae7a7ac39a3539ff4392d3afb?s=80"
                            />
                        </div>

                        <div className="col-6">
                            <BadgeForm
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
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