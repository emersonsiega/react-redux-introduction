import React, { Component } from 'react'
import { connect } from 'react-redux'

import ConnectedTodos from './Todos'
import ConnectedGoals from './Goals'
import { handleInitialData } from '../actions/shared'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(handleInitialData())
  }

  render() {
    if (this.props.loading === true) {
      return (<h3>Loading...</h3>)
    }

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm">
            <ConnectedTodos />
          </div>

          <div className="col-sm">
            <ConnectedGoals />
          </div>
        </div>
      </div>
    )
  }
}

export default connect((state) => ({
  loading: state.loading
}))(App)