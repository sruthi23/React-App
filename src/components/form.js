import React, { Component } from 'react'
const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
)
export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.data.name || '',
            email: this.props.data.email || '',
            address: this.props.data.address || '',
            gender: this.props.data.gender || '',
            isChecked: this.props.data.isChecked,
            errors: {
                name: '',
                email: '',
                address: '',
                isChecked: ''
            }
        }
        this.handleChange.bind(this)
        this.handleSubmit.bind(this)
    }

    handleChange(event) {
        //event.preventDefault()
        const { name, value } = event.target
        let errors = this.state.errors

        switch (name) {
            case 'name':
                errors.name = value.length === 0 ? 'Reuired field' : ''
                break
            case 'email':
                errors.email = validEmailRegex.test(value)
                    ? ''
                    : 'Email is not valid!'
                break
            case 'address':
                errors.address = value.length === 0 ? 'Required' : ''
                break
            case 'isChecked':
                errors.isChecked = value === false ? 'check this box' : ''
                break
            default:
                break
        }
        this.setState({
            [event.target.name]: event.target.value
        })
        this.setState({ errors, [name]: value }, () => {
            console.log(errors)
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('data', this.state)
    }
    render() {
        return (
            <div className="ui container">
                <div className="field">
                    <form className="ui form">
                        <div className="ui form">
                            <div className="two wide field">
                                <label>
                                    Name:
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        name="name"
                                        value={this.state.name}
                                        onChange={e => this.handleChange(e)}
                                    />
                                </label>
                            </div>
                            <div className="two wide field">
                                <label>
                                    Email:
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        name="email"
                                        value={this.state.email}
                                        onChange={e => this.handleChange(e)}
                                    />
                                </label>
                            </div>
                            <div className="four wide field">
                                <label>Address</label>
                                <textarea
                                    name="address"
                                    value={this.state.address}
                                    onChange={e => this.handleChange(e)}
                                />
                            </div>
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="female"
                                        checked={this.state.gender === 'female'}
                                        onChange={e => this.handleChange(e)}
                                    />
                                    <label>Female</label>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="male"
                                        checked={this.state.gender === 'male'}
                                        onChange={e => this.handleChange(e)}
                                    />
                                    <label>Male</label>
                                </div>
                            </div>
                            <div className="ui checkbox">
                                <input
                                    type="checkbox"
                                    defaultChecked={this.state.isChecked}
                                    onChange={e =>
                                        this.setState({
                                            isChecked: !this.state.isChecked
                                        })
                                    }
                                />
                                <label>
                                    I agree to the Terms and Conditions
                                </label>
                            </div>
                        </div>
                        <button
                            className="ui button"
                            type="submit"
                            onClick={e => this.handleSubmit(e)}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
