import React, { Component } from 'react';
import "../App.css";

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newTodo: '',
      todoList: [
        { id: 1, title: '第一个待办' }
      ]
    }
  }
  render() {
    return (
      <div className="main">
        <h1>我的待办</h1>
        <div className="inputWrapper">
          <input type="text" value={this.state.newTodo} />
        </div>
      <ol>
        {(this.state.todoList).map((item, index) => {
          return <li>{item.title}</li>
        })}
      </ol>
      </div >
    )
  }
}
export default Main;