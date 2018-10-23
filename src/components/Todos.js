import React from 'react'
import { connect } from 'react-redux'

import { 
    handleAddTodo,
    handleDeleteTodo,
    handleToggleTodo 
} from "../actions/todos";
import List from './List'

class Todos extends React.Component {
    addItem = e => {
        e.preventDefault()

        this.props.dispatch(handleAddTodo(
            this.input.value,
            () => this.input.value = ''
        ))
    }

    removeItem = todo => this.props.dispatch(handleDeleteTodo((todo)))

    toggleItem = todo => this.props.dispatch(handleToggleTodo(todo.id))

    render() {
        return <>
            <h2>Todo List</h2>

            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Add Todo" aria-label="Add Todo"
                    aria-describedby="todoBtn" ref={(input) => this.input = input} />
                <div className="input-group-append">
                    <button id="todoBtn" className="btn btn-outline-success" onClick={this.addItem}>Add</button>
                </div>
            </div>

            <List
                items={this.props.todos}
                toggle={this.toggleItem}
                remove={this.removeItem}
            />
        </>
    }
}

export default connect((state) => ({
    todos: state.todos
}))(Todos)