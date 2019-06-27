import { ADD_QSTN, ADD_EXAM } from '../actions'

const initialState = {
    answer: [],
    exam: {}
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
                        answer: action.answer,
                        option1: action.option1,
                        option2: action.option2,
                        option3: action.option3,
                        option4: action.option4
                    }
                ]
            }

        case ADD_EXAM:
            return {
                ...state,
                exam: {
                    ...state.exam,
                    [action.index]: {
                        option: action.option,
                        answer: action.answer
                    }
                }
            }
        default:
            return state
    }
}
export default questAns
