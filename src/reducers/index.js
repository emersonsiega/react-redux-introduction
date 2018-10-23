import { combineReducers } from "redux"
import todos from "../reducers/todos"
import goals from "../reducers/goals"
import loading from "../reducers/loading"

export default combineReducers({
    todos,
    loading,
    goals
})