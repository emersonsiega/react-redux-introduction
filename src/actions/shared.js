import API from "goals-todos-api"

const RECEIVE_DATA = 'RECEIVE_DATA'

const receiveData = (todos, goals) => {
    return {
        type: RECEIVE_DATA,
        todos,
        goals
    }
}

const handleInitialData = () => {
    return dispatch => {
        return Promise.all([
            API.fetchTodos(),
            API.fetchGoals()
        ]).then(([todos, goals]) => {
            dispatch(receiveData(todos, goals))
        })
    }
}

export {
    RECEIVE_DATA,
    handleInitialData
}