import React, { Component } from 'react';

export default class TodoInput extends Component {
  submit() {
    this.props.addTodo()
  }
  render() {
    return (
      <input type="text" defaultValue={this.props.content}
        onKeyPress={() => this.submit()}
      />
    )
  }
}