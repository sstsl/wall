// App.js
import React, { Component } from 'react';

class Wall extends Component {
  state = {
    todos: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://localhost:8000/api/', {

      });
      const todos = await res.json();
      this.setState({
        todos
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div >

      <div style={{}}> {'THE WALL:'} </div>
      <br/>
      <br/>

        {this.state.todos.map(item => (
          <div key={item.id}>
            <span><div style={{}}>{item.description}</div></span>
            <h1 style={{'font-size': 12, 'font-style': 'italic'}}>By: {item.title}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default Wall;
