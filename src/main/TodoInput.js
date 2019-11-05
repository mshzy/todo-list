import React, { Component } from 'react';

export default class TodoInput extends Component {
  submit(e) {
    if (e.key === 'Enter')
      console.log(2)
  }
  render() {
    return (
      <input type="text" defaultValue={this.props.content}
        onKeyPress={this.submit} />
    )
  }
}