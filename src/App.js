import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const API_HOST = 'http://localhost:3001';
const API_ENDPOINT_PATH = `${API_HOST}/api/v1`;
const LOGIN_ENDPOINT = `${API_HOST}/v1/login`;

class App extends Component {
  onSubmit(e) {
    e.stopPropagation();
    e.preventDefault();

    const body = JSON.stringify({
      email:e.target.email.value,
      password:e.target.password.value
    });

    fetch(LOGIN_ENDPOINT,{
      method: 'POST',
      mode: 'cors',
      // credentials: 'include',
      cache: 'default',
      body: body
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log('RESPONSE', data);
      debugger
    });
  }

  onEmailChange(e) {
    const val = e.target.value;
  }

  onPasswordChange(e) {
    const val = e.target.value;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">React CORS From </p>
        <form
          onSubmit={this.onSubmit}
        >
          <input
            id="email"
            type="email"
            placeholder="Email"
            onChange={this.onEmailChange}
          />
          <input
            id="password"
            type="password"
            placeholder="PASSWORD"
            onChange={this.onEmailChange}
          />
          <button
            type="submit"
          >LOGIN</button>
        </form>
      </div>
    );
  }
}

export default App;
