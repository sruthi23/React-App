import { ADD_QSTN, ADD_ANSWER } from '../actions'

const initialState = {
    answer: []
}

const questAns = (state = initialState, action) => {
    //  console.log('payload', action.id)
    switch (action.type) {
        case ADD_QSTN:
            return {
                ...state,
                //  question: [...state.question, action.payload],
                answer: [
                    ...state.answer,
                    {
                        question: action.question,
                        answer: action.answer
                    }
                ]
            }
        case ADD_ANSWER:
            return [
                ...state,
                { id: action.id, text: action.text, completed: false }
            ]
        default:
            return state
    }
}
export default questAns
