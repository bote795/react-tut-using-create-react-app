import React from "react";
import { connect } from 'react-redux'
import List from './List'

import { 
    handleDeleteTodo, 
    handleAddTodo, 
    handleToggleTodo
} from '../actions/todos'
class Todos extends React.Component {
    addItem = (e) => {
        e.preventDefault();
        const name = this.input.value;
        this.props.dispatch(handleAddTodo(
            name,
            () => this.input.value = ''
        ))

    }
    removeItem = (todo) => {
        this.props.dispatch(handleDeleteTodo(todo));
    }
    toggleItem = (todo) => {
        this.props.dispatch(handleToggleTodo(todo));
    }
    render() {
        const { todos } = this.props;
        return (
            <div>
                <h1>Todo List</h1>
                <input
                    type="text"
                    placeholder="Add Todo"
                    ref={(input) => this.input = input}
                />
                <button onClick={this.addItem}>add todo</button>
                <List
                    items={todos}
                    remove={this.removeItem}
                    toggle={this.toggleItem}
                />
            </div>
        );
    }
}
export default connect((state) => ({
    todos: state.todos
}))(Todos)