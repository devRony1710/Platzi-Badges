import React from 'react'

class BadgeForm extends React.Component {
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleClick = e => {
        console.log(`Button was click`)
    }

    // handleSubmit = e => {
    //     e.preventDefault()
    //     console.log(`form was submit`)
    //     console.log(this.state)
    // }


    render () {
        return(
            <div>

                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="">First Name</label>
                        <input
                        onChange={this.props.onChange} 
                        className="form-control"
                        type="text" 
                        name="firstName" 
                        value={this.props.formValues.firstName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input
                        onChange={this.props.onChange}
                        className="form-control"
                        type="text"
                        name="lastName"
                        value={this.props.formValues.lastName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                        onChange={this.props.onChange}
                        className="form-control"
                        type="email"
                        name="email"
                        value={this.props.formValues.email}
                        />
                    </div>

                    <div className="form-group">
                        <label>Job Title</label>
                        <input
                        onChange={this.props.onChange}
                        className="form-control"
                        type="text"
                        name="jobTitle"
                        value={this.props.formValues.jobTitle}
                        />
                    </div>

                    <div className="form-group">
                        <label>Twitter</label>
                        <input
                        onChange={this.props.onChange}
                        className="form-control"
                        type="text"
                        name="twitter"
                        value={this.props.formValues.twitter}
                        />
                    </div>

                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                    
                </form>
            </div>

        )
    }


}

export default BadgeForm