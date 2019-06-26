export const ADD_QSTN = 'ADD_QSTN'
export const ADD_ANSWER = 'ADD_ANSWER'
export const addQuestion = (question, answer) => ({
    type: 'ADD_QSTN',
    question,
    answer
})

export const addAnswer = text => ({
    type: 'ADD_ANSWER',
    text
})
