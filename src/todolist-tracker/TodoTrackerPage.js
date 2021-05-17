import { Component } from 'react';
import { addTodo } from '../utils/todo-api.js';
import './TodoTrackerPage.css';

export default class TodoTrackerPage extends Component {
  state = {
    newTask: '',
    todos: []
  }

  handleAdd = async e => {
    e.preventDefault();
    const { newTask } = this.state;
    const addedTask = await addTodo({ task: newTask });

    console.log('ADDED', addedTask);
  }

  handleNewTask = ({ target }) => {
    this.setState({ newTask: target.value });
  }

  render() {
    const { newTask } = this.state;

    return (
      <div className="TodoTrackerPage">
        <form onSubmit={this.handleAdd}>
          Add New Task:
          <input value={newTask} onChange={this.handleNewTask}/>
        </form>

      </div>
    );
  }
}