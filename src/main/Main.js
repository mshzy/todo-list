import React, { Component } from 'react';
import "../App.css";
import TodoInput from './TodoInput';
import TodoItem from './TodoItem'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newTodo: '',
      todoList: [
        { id: 1, title: '第一个待办' },
        { id: 2, title: '第二个待办' }
      ]
    }
  }
  render() {
    let todos = this.state.todoList.map((item, index) => {
      return (
        <li>
          <TodoItem todo={item} />
        </li>
      )
    })
    return (
      <div className="main">
        <div><h1>我的待办</h1>
          <div className="inputWrapper">
            <TodoInput content={this.state.newTodo} />
          </div>
          <ol>
            {todos}
          </ol>
        </div>
      </div >
    )
  }
}
export default Main;