import { Component } from 'react';
import { addTask, getTodos } from '../utils/todo-api.js';
import './TodoTrackerPage.css';

export default class TodoTrackerPage extends Component {
  state = {
    newTask: '',
    todos: []
  }

  async componentDidMount() {
    try {
      const todoResponse = await getTodos();
      console.log(todoResponse);
      if (todoResponse === null) {
        this.setState({ todos: [] });
      } else {
        this.setState({ todos: todoResponse });
      }
      

      console.log('todos: ', todoResponse);
    }
    catch (err) {
      console.log('err: ', err);
    }
  }

  handleAdd = async e => {
    e.preventDefault();
    const { newTask, todos } = this.state;
    
    try {
      const addedTask = await addTask({ task: newTask, completed: false });
      const updatedTodos = [...todos, addedTask];
      this.setState({
        todos: updatedTodos,
        newTask: ''
      });
    }
    catch (err){
      console.log(err.message);
    }
  }

  handleNewTask = ({ target }) => {
    this.setState({ newTask: target.value });
  }

handleDelete = async id => {
  console.log('you want to delete', id);
}

render() {
  const { newTask, todos } = this.state;

  return (
    <div className="TodoTrackerPage">
      <form onSubmit={this.handleAdd}>
        Add New Task:
        <input value={newTask} onChange={this.handleNewTask}/>
      </form>

      <ul>
        {todos.map(task => (
          <li key={task.id}>
            <h2>{task.task}</h2>
            <button>X</button>
          </li>
        ))}
      </ul>

    </div>
  );
}
}