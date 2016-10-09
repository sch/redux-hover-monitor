import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/TodoActions';

class TodoApp extends Component {
  static propTypes = {
    todos: PropTypes.array,
    actions: PropTypes.object
  };

  render() {
    const { todos, actions } = this.props;

    return (
      <div className='Page'>
        <div className='todoapp'>
          <Header addTodo={actions.addTodo} />
          <MainSection todos={todos} actions={actions} />
        </div>
      </div>
    );
  }
}

function mapState(state) {
  return {
    todos: state.todos
  };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(mapState, mapDispatch)(TodoApp);
