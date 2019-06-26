import React from 'react'
import PropTypes from 'prop-types'

const FormNew = props => {
    console.log('props', props)
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
                                    value={props.data.name}
                                    onChange={props.handleChange(this)}
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
                                    value={props.data.email}
                                    onChange={props.handleChange(this)}
                                />
                            </label>
                        </div>
                        <div className="four wide field">
                            <label>Address</label>
                            <textarea
                                name="address"
                                value={props.data.address}
                                onChange={props.handleChange(this)}
                            />
                        </div>
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    checked={props.data.gender === 'female'}
                                    onChange={props.handleChange(this)}
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
                                    checked={props.data.gender === 'male'}
                                    onChange={props.handleChange(this)}
                                />
                                <label>Male</label>
                            </div>
                        </div>
                        <div className="ui checkbox">
                            <input
                                type="checkbox"
                                name="isChecked"
                                value={props.data.isChecked}
                                defaultChecked={props.data.isChecked}
                                onChange={props.toggleChange(this)}
                            />
                            <label>I agree to the Terms and Conditions</label>
                        </div>
                    </div>
                    <button
                        className="ui button"
                        type="button"
                        onClick={props.handleSubmit(this)}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default FormNew
