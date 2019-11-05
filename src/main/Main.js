import React, { Component } from 'react';
import "../App.css";
import TodoInput from './TodoInput';

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newTodo: '2222',
      todoList: [
        { id: 1, title: '第一个待办' },
        { id: 2, title: '第二个待办' }
      ]
    }
  }
  render() {
    return (
      <div className="main">
        <div><h1>我的待办</h1>
          <div className="inputWrapper">
          <TodoInput content={this.state.newTodo}/>
          </div>
          <ol>
            {(this.state.todoList).map((item, index) => {
              return <li>{item.title}</li>
            })}
          </ol>
        </div>
      </div >
    )
  }
}
export default Main;