
import logo from './logo.svg';

import React, { Component } from 'react';
import Nav from './components/Nav';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Wall from './components/Wall';
import Post from './components/Post';
import './App.css';
import * as emailjs from 'emailjs-com';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed_form: '',
      logged_in: localStorage.getItem('token') ? true : false,
      username: ''
    };
  }

  componentDidMount() {
    if (this.state.logged_in) {
      fetch('http://localhost:8000/core/current_user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ username: json.username });
        });
    }
  }

  handle_login = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.user.username
        });
      });
  };

  handle_signup = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/core/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        emailjs.send('default_service', 'template_vJqyko22', {email : data.email} , 'user_wJMMEjpLsOxs5uDRznhqL');
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.username
        });
      });
  };

  handle_logout = () => {
    localStorage.removeItem('token');
    this.setState({ logged_in: false, username: '' });
  };

  display_form = form => {
    this.setState({
      displayed_form: form
    });
  };

  render() {
    let form;
    switch (this.state.displayed_form) {
      case 'login':
        form = <LoginForm handle_login={this.handle_login} />;
        break;
      case 'signup':
        form = <SignupForm handle_signup={this.handle_signup} />;
        break;
      case 'wall':
          form = < Wall />;
          break;
      case 'post':
          form = <Post />;
          break;
      default:
        form = null;
    }

    return (
      <div style={{'background-color': 'skyblue' }}className="App">
        <Nav
          logged_in={this.state.logged_in}
          display_form={this.display_form}
          handle_logout={this.handle_logout}
        />
        <h3 >
        <br/>
        <br/>
        <br/>
        <br/>
          <div style={{'color': 'white', 'font-family': 'Copperplate'}}>WALL APP</div>
        <br/>
        <br/>
          {this.state.logged_in
            ? `Hello, ${this.state.username}`
            : 'sign up or log in to make a post'}
        </h3>
        <div style={{'background-color': 'white' }}>
        <br/>

        {form}
        </div>

      </div>
    );
  }
}

export default App;
