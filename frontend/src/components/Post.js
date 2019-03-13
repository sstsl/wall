// App.js
import React, { Component } from 'react';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', username: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
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

  handleChange(event) {
    this.setState({value: event.target.value});
  }



  handleSubmit(event) {
    alert('You created a post: ' + this.state.value);
    event.preventDefault();
    fetch('http://localhost:8000/api/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `JWT ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
        "title": this.state.username,
        "description": this.state.value})
      })
      this.setState({
        value: '',
      });

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Create Post:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }

}

export default Post;
