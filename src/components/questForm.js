import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { addQuestion } from '../actions'

class QuestForm extends Component {
    submit = result => {
        const { addQuestion, reset } = this.props
        console.log('result', result)
        addQuestion(result.question, result.answer)
        reset()
    }
    renderField = ({ input, label, type, meta: { touched, error } }) => (
        <div className="six wide field">
            <div className="field">
                <label>{label}</label>
                <div className="field">
                    <input {...input} placeholder={label} type={type} />
                    {touched && error && <span>{error}</span>}
                </div>
            </div>
        </div>
    )

    render() {
        const { handleSubmit, pristine, reset, submitting, answer } = this.props
        console.log('***', answer)

        const res = answer.map(item => (
            <div className="item">
                <i className="help icon" />
                <div className="content">
                    <div className="header">{item.question}</div>
                    <div className="description">{item.answer}</div>
                </div>
            </div>
        ))

        return (
            <>
                <div className="ui container">
                    <form
                        className="ui form"
                        onSubmit={handleSubmit(this.submit)}>
                        <Field
                            name="question"
                            component={this.renderField}
                            type="text"
                            placeholder="Question"
                            label="Question"
                        />

                        <Field
                            name="answer"
                            component={this.renderField}
                            type="text"
                            placeholder="Answer"
                            label="Answer"
                        />

                        <button
                            name="submit"
                            type="submit"
                            className="ui button"
                            disabled={pristine || submitting}>
                            Submit
                        </button>
                        <button
                            name="clear"
                            className="ui button"
                            type="button"
                            disabled={pristine || submitting}
                            onClick={reset}>
                            Clear Values
                        </button>
                    </form>
                    <div className="ui list">{res} </div>
                </div>
            </>
        )
    }
}
const mapStateToProps = state => ({
    question: state.questAns.question,
    answer: state.questAns.answer
})

const mapDispatchToProps = dispatch => ({
    addQuestion: (question, answer) => {
        dispatch(addQuestion(question, answer))
    }
})

QuestForm = reduxForm({
    form: 'simple'
})(QuestForm)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestForm)
