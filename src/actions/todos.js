import API from "goals-todos-api"

const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'

const addTodo = todo => {
    return {
        type: ADD_TODO,
        todo
    }
}

const removeTodo = id => {
    return {
        type: REMOVE_TODO,
        id
    }
}

const toggleTodo = id => {
    return {
        type: TOGGLE_TODO,
        id
    }
}

const handleAddTodo = (name, cb) => {
    return dispatch => {
        return API.saveTodo(name)
            .then(todo => {
                dispatch(addTodo(todo))
                cb()
            })
            .catch(() => alert('There was an error. Try again!'))
    }
}

const handleDeleteTodo = todo => {
    return (dispatch) => {
        dispatch(removeTodo((todo.id)))

        return API.deleteTodo(todo.id)
            .catch(() => {
                dispatch(addTodo(todo))
                alert('An error ocurred! Try again.')
            })
    }
}

const handleToggleTodo = id => {
    return dispatch => {
        dispatch(toggleTodo(id))

        return API.saveTodoToggle(id)
            .catch(() => {
                dispatch(toggleTodo(id))
                alert('An error ocurred! Try again.')
            })
    }
}

export {
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_TODO,
    handleAddTodo,
    handleDeleteTodo,
    handleToggleTodo
}