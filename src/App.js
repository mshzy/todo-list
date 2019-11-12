import React, { Component } from 'react';
import TodoInput from './component/TodoInput';
import TodoItem from './component/TodoItem';
import './style/App.scss';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTodo: '',
      todoList: [

      ]
    }
  }
  addTodo() {
    console.log('我得添加一个 todo 了')
  }
  render() {
    let todos = this.state.todoList.map((item, index) => {
      return (
        <li key={index} >
          <TodoItem todo={item} />
        </li>
      )
    })
    console.log(todos)
    return (
      <div className="main">
        <div><h1>我的待办</h1>
          <div className="inputWrapper">
            <TodoInput content={this.state.newTodo} addTodo={this.addTodo} />
          </div>
          <ol>
            {todos}
          </ol>
        </div>
      </div >
    )
  }
}
export default App;