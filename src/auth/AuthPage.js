import { Component } from 'react';
import './AuthPage.css';

export default class AuthPage extends Component {
  state = {
    isSignUp: true,
    name: '',
    email: '',
    password: ''
  }

  handleSwitch = () => {
    this.setState({ isSignUp: !this.state.isSignUp });
  }

  handleSubmit = e => {
    e.preventDefault();
  }

  handleNameChange = ({ target }) => {
    this.setState({ email: target.value });
  }

  handleEmailChange = ({ target }) => {
    this.setState({ email: target.value });
  }

  handlePasswordChange = ({ target }) => {
    this.setState({ password: target.value });
  }

  render() {
    const { isSignUp, name, email, password } = this.state;

    return (
      <form className="AuthPage" onSubmit={this.handleSubmit}>
        {isSignUp && <p>
          <label>
            <span>Name</span>
            <input name="name" value={name} required={true} 
              onChange={this.handleNameChange}/>
          </label>
        </p>}

        <p>
          <label>
            <span>Email</span>
            <input name="email" required={true}
              onChange={this.handleEmailChange}/>
          </label>
        </p>

        <p>
          <label>
            <span>Password</span>
            <input name="password" type="password" required={true}
              value={password} onChange={this/this.handlePasswordChange}/>
          </label>
        </p>

        <p>
          <button type="submit">Sign {isSignUp ? 'Up' : 'In'}</button>
        </p>

        <p>
          <button type="button" className="swithc" onClick={this.handleSwitch}>
            {isSignUp
              ? 'Already have an account?'
              : 'Need to create an account?'
            }
          </button>
        </p>
      </form>
    );
  }
}