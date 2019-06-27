export const ADD_QSTN = 'ADD_QSTN'
export const ADD_EXAM = 'ADD_EXAM'
export const addQuestion = (
    question,
    answer,
    option1,
    option2,
    option3,
    option4
) => ({
    type: 'ADD_QSTN',
    question,
    option1,
    option2,
    option3,
    option4,
    answer
})

export const addExam = (index, option, answer) => ({
    type: 'ADD_EXAM',
    index,
    option,
    answer
})
