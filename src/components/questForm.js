import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { addQuestion, addExam } from '../actions'

class QuestForm extends Component {
    constructor(props) {
        super(props)
    }

    submit = result => {
        const { addQuestion, reset } = this.props
        console.log('result', result)
        addQuestion(
            result.question,
            result.answer,
            result.option1,
            result.option2,
            result.option3,
            result.option4
        )
        reset()
    }
    submitAnswer = (option, index, answer) => {
        const { addExam } = this.props
        addExam(index, option, answer)
    }

    renderField = ({ input, label, type, meta: { touched, error } }) => (
        <div className="field">
            <label>{label}</label>
            <div className="field">
                <input {...input} placeholder={label} type={type} />
                {touched && error && <span>{error}</span>}
            </div>
        </div>
    )

    renderOption = ({ input, label, type, meta: { touched, error } }) => (
        <div className="field">
            <label>{label}</label>
            <input {...input} placeholder={label} type={type} />
            {touched && error && <span>{error}</span>}
        </div>
    )

    render() {
        const {
            handleSubmit,
            pristine,
            reset,
            submitting,
            answer,
            exam
        } = this.props
        const maxqst = answer.length === 10 ? true : false
        console.log(exam)
        const res = answer.map((item, index) => (
            <div className="item" key={index}>
                <i className="help icon" />
                <div className="content">
                    <div className="header">{item.question}</div>
                </div>
                <div className="ui horizontal list">
                    <div className="item">
                        <div className="content">
                            <div className="description">
                                <button
                                    className={
                                        exam[index] &&
                                        exam[index].option === item.option1
                                            ? 'ui button primary'
                                            : exam[index] &&
                                              item.answer === item.option1
                                            ? 'ui button green'
                                            : 'ui button'
                                    }
                                    name={item.option1}
                                    onClick={() =>
                                        this.submitAnswer(
                                            item.option1,
                                            index,
                                            item.answer
                                        )
                                    }>
                                    {item.option1}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="content">
                            <div className="description">
                                <button
                                    className={
                                        exam[index] &&
                                        exam[index].option === item.option2
                                            ? 'ui button primary'
                                            : exam[index] &&
                                              item.answer === item.option2
                                            ? 'ui button green'
                                            : 'ui button'
                                    }
                                    name={item.option2}
                                    onClick={() =>
                                        this.submitAnswer(
                                            item.option2,
                                            index,
                                            item.answer
                                        )
                                    }>
                                    {item.option2}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="content">
                            <div className="description">
                                <button
                                    className={
                                        exam[index] &&
                                        exam[index].option === item.option3
                                            ? 'ui button primary'
                                            : exam[index] &&
                                              item.answer === item.option3
                                            ? 'ui button green'
                                            : 'ui button'
                                    }
                                    name={item.option3}
                                    onClick={() =>
                                        this.submitAnswer(
                                            item.option3,
                                            index,
                                            item.answer
                                        )
                                    }>
                                    {item.option3}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="content">
                            <div className="description">
                                <button
                                    className={
                                        exam[index] &&
                                        exam[index].option === item.option4
                                            ? 'ui button primary'
                                            : exam[index] &&
                                              item.answer === item.option4
                                            ? 'ui button green'
                                            : 'ui button'
                                    }
                                    name={item.option4}
                                    onClick={() =>
                                        this.submitAnswer(
                                            item.option4,
                                            index,
                                            item.answer
                                        )
                                    }>
                                    {item.option4}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))

        return (
            <>
                <div className="internally celled grid">
                    <div className="ui two column very relaxed stackable grid">
                        <div className="column">
                            <form
                                className="ui equal width form"
                                onSubmit={handleSubmit(this.submit)}>
                                <Field
                                    name="question"
                                    component={this.renderField}
                                    type="text"
                                    placeholder="Question"
                                    label="Question"
                                />
                                <div className="inline fields">
                                    <Field
                                        name="option1"
                                        component={this.renderOption}
                                        type="text"
                                        placeholder="option1"
                                        label="Option1"
                                    />
                                    <Field
                                        name="option2"
                                        component={this.renderOption}
                                        type="text"
                                        placeholder="option2"
                                        label="Option2"
                                    />
                                    <Field
                                        name="option3"
                                        component={this.renderOption}
                                        type="text"
                                        placeholder="option3"
                                        label="Option3"
                                    />
                                    <Field
                                        name="option4"
                                        component={this.renderOption}
                                        type="text"
                                        placeholder="option4"
                                        label="Option4"
                                    />
                                </div>
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
                                    disabled={pristine || submitting || maxqst}>
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
                        </div>
                        <div className="middle aligned column">
                            <div className="ui list">{res} </div>
                        </div>
                    </div>
                    <div className="ui vertical divider" />
                </div>
            </>
        )
    }
}
const mapStateToProps = state => ({
    answer: state.questAns.answer,
    exam: state.questAns.exam
})

const mapDispatchToProps = dispatch => ({
    addQuestion: (question, answer, option1, option2, option3, option4) => {
        dispatch(
            addQuestion(question, answer, option1, option2, option3, option4)
        )
    },
    addExam: (index, option, answer) => {
        dispatch(addExam(index, option, answer))
    }
})

QuestForm = reduxForm({
    form: 'simple'
})(QuestForm)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestForm)
