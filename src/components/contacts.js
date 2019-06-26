import React, { Component } from 'react'
import FormNew from './formNew'
const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
)
export default class Contacts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'jai' || '',
            email: 'jai@gmail.com' || '',
            address: 'ggkhouse,pnagar' || '',
            gender: 'male' || '',
            isChecked: false,
            errors: {
                name: '',
                email: '',
                address: '',
                isChecked: ''
            }
        }
    }
    toggleChange = event => {
        let value = event.target.value
        value = value === 'false' ? true : false
        this.setState({
            [event.target.name]: value
        })
    }
    handleChange = event => {
        //event.preventDefault()
        console.log('eve', event.target)
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

    handleSubmit = event => {
        event.preventDefault()
        if (this.state.isChecked === false) {
            this.state.errors.isChecked = 'check the box'
        }
        console.log('data', this.state)
    }
    render() {
        // const data = {
        //     name: 'jai',
        //     email: 'jai@gmail.com',
        //     address: 'ggkhouse,pnagar',
        //     gender: 'male',
        //     isChecked: true
        // }
        return (
            <div className="ui text container">
                <h1>First App</h1>
                <div class="ui vertical stripe segment">
                    <div class="ui middle aligned stackable grid container">
                        <div class="row">
                            <div class="twenty wide column">
                                <h3 class="ui header">Lorem ipsum</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, cras sit amet,
                                    vel neque rhoncus enim egestas nam,
                                    suspendisse cursus. Mauris porttitor eu
                                    mauris, lectus varius gravida ut porttitor
                                    montes, tempus pharetra quis quis duis quam,
                                    donec integer sit nec justo vitae. Est dolor
                                    consequat, tempor pede vel turpis mauris, ac
                                    sagittis mollis proin lorem gravida
                                    condimentum, et congue ullamcorper mi.
                                </p>
                                <h3 class="ui header">Lorem ipsum</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, cras sit amet,
                                    vel neque rhoncus enim egestas nam,
                                    suspendisse cursus. Mauris porttitor eu
                                    mauris, lectus varius gravida ut porttitor
                                    montes, tempus pharetra quis quis duis quam,
                                    donec integer sit nec justo vitae. Est dolor
                                    consequat, tempor pede vel turpis mauris, ac
                                    sagittis mollis proin lorem gravida
                                    condimentum, et congue ullamcorper mi.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3> Contact </h3>
                    <div className="ui stacked segment">
                        <FormNew
                            data={this.state}
                            handleSubmit={() => this.handleSubmit}
                            handleChange={() => this.handleChange}
                            toggleChange={() => this.toggleChange}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
