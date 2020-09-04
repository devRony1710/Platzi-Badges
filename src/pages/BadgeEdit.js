import React from 'react'

import './styles/BadgeEdit.css'
import header from '../img/badge-header.svg'
import BadgeForm from '../component/BadgeForm'
import Badge from '../component/badge'
import PageLoading from '../component/PageLoading'
import api from '../api'


class BadgeEdit extends React.Component {


    state = {

        loading: true,
        error:null,

        form: {
        firstName: '',
        lastName: '',
        jobTitle: '',
        email: '',
        twitter: '',
    }}


    componentDidMount() {
        this.fetchData()
    }


    fetchData = async e => {
        this.setState ({ loading: true, error: null})

        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            ) 

            this.setState({loading: false, form: data})

        } catch (error) {
            this.setState({loading: false, error: error})
        }
    }

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
            await api.badges.update(this.props.match.params.badgeId, this.state.form)
            this.setState({loading: false})

            this.props.history.push('/badges')
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
                <div className="BadgeEdit__hero">
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
                            <h1>Edit Attendant</h1>
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


export default BadgeEdit