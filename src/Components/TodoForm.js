import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Todo.css'

class TodoForm extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         task : ""
      }

    }

    handleChange = (event) => {

        this.setState({
            task : event.target.value
        })

    }

    handleSubmit = (e) => {
        e.preventDefault();

        // this.state contains task : "value from form"
        // id will store a random id from uuidv4() for each todo
        this.props.newTodo({...this.state , id : uuidv4()});

        // Reseting the form value after submit
        this.setState({
            task : ""
        })

    }
  render() {

    return (
        
      <div>
        <form onSubmit={this.handleSubmit} >
            <input type="text" value={this.state.task} onChange={this.handleChange}/>
            <input id='button' type="submit" value="Add" />
        </form>
      </div>

    )

  }
}

export default TodoForm