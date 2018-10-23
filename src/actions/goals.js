import API from "goals-todos-api"

const ADD_GOAL = 'ADD_GOAL'
const REMOVE_GOAL = 'REMOVE_GOAL'

const addGoal = goal => {
    return {
        type: ADD_GOAL,
        goal
    }
}

const removeGoal = id => {
    return {
        type: REMOVE_GOAL,
        id
    }
}

const handleAddGoal = (name, cb) => {
    return (dispatch) => {
        return API.saveGoal(name)
            .then(goal => {
                dispatch(addGoal(goal))
                cb()
            })
            .catch(() => alert('There was an error. Try again!'))
    }
}

const handleDeleteGoal = goal => {
    return dispatch => {
        dispatch(removeGoal((goal.id)))
        return API.deleteGoal(goal.id)
            .catch(() => {
                dispatch(addGoal(goal))
                alert('An error ocurred! Try again.')
            })
    }
}

export {
    ADD_GOAL,
    REMOVE_GOAL,
    handleAddGoal,
    handleDeleteGoal
}