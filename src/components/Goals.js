import React from 'react'
import { connect } from 'react-redux'

import {
    handleAddGoal,
    handleDeleteGoal
} from '../actions/goals'
import List from './List'

class Goals extends React.Component {
    addItem = e => {
        e.preventDefault()

        this.props.dispatch(handleAddGoal(
            this.input.value,
            () => this.input.value = ''
        ))
    }

    removeItem = goal => this.props.dispatch(handleDeleteGoal(goal))

    render() {
        return <>
            <h2>Goals List</h2>

            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Add Goal" aria-label="Add Goal"
                    aria-describedby="goalBtn" ref={(input) => this.input = input} />
                <div className="input-group-append">
                    <button id="goalBtn" className="btn btn-outline-success" onClick={this.addItem}>Add</button>
                </div>
            </div>

            <List 
                items={this.props.goals} 
                remove={this.removeItem} 
            />
        </>
    }
}

export default connect((state) => ({
    goals: state.goals
}))(Goals)