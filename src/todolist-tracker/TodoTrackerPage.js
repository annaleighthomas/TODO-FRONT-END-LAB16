import { Component } from 'react';
import { addTodo } from '../utils/todo-api.js';
import './TodoTrackerPage.css';

export default class TodoTrackerPage extends Component {
  state = {
    task: '',
    todos: []
  }

  handleAdd = async e => {
    e.preventDefault();
    const { task } = this.state;
    const addedTask = await addTodo({ name: task });  //?

    console.log('ADDED', addedTodo);
  }

  handleNewTask = ({ target }) => {
    this.setState({})
  }
}