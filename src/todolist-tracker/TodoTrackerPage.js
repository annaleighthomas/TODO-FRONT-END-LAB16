import { Component } from 'react';
import { addTask, getTodos, deleteTodos, todoCompleted } from '../utils/todo-api.js';
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
  const { todos } = this.state;

  try {
    await deleteTodos(id);

    const updatedTodos = todos.filter(todo => todo.id !== id);
    this.setState({ todos: updatedTodos });

  }
  catch (err) {
    console.log(err);
  }
}

handleCompletedTask = async todo => {
  const { todos } = this.state;
  try {
    const completedTodo = await todoCompleted(todo, { task: todo.task, completed: true });

    const todoArray = todos.map(task => task.id === todo.id ? completedTodo : task);
    this.setState({ todos: todoArray });
    console.log(this.state.completed);
  }
  catch (err) {
    console.log(err);
  }
}


render() {
  const { newTask, todos } = this.state;
  console.log(todos);
  return (
    <div className="TodoTrackerPage">
      <form onSubmit={this.handleAdd}>
        
        <input value={newTask} className="input-box" placeholder="ADD A TASK..." onChange={this.handleNewTask}/>
      </form>

      <ul>
        {todos.map(task => (
          <li key={task.id}>
            <h2 style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.task}</h2>
            <input type="checkbox" value={task.completed}
              onChange={() => this.handleCompletedTask(task)}/>
            <button onClick={() =>
              this.handleDelete(task.id)}>X</button>
          </li>
        ))}
      </ul>

    </div>
  );
}
}