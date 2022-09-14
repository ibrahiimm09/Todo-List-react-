import React, { Component } from 'react'
import './Todo.css'
class Todo extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isEditing : false,
         task : this.props.task,
         isCompleted : false,
      }

    }

    removeHandler = () => {
        // the todo of which id gets matched gets removed
        this.props.removeTodo(this.props.id)
    }

    updateHandler = () => {
        this.setState({
            isEditing : true
        })
    }

    changeHandler = (evt) => {
        this.setState({
            task : evt.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.updateTodo(this.props.id , this.state.task)
        this.setState({
            isEditing : false
        })
    }

    toggleHnadler = () => {
        this.setState({
            isCompleted : !this.state.isCompleted
        })
    }

  render() {

    let result;
    if (this.state.isEditing) {
        result = (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.task} onChange={this.changeHandler}/>
                <input type="submit" id='button' value="Save" />
            </form>
        )
    }

    else{
        result = (
            <>
        <li className={this.state.isCompleted ? "completed" : ""} onClick={this.toggleHnadler}>{this.props.task}</li>
        <button onClick={this.updateHandler}>Edit</button>
        <button onClick={this.removeHandler}>Delete</button>
            </>

        )
    }

    return (
        <div className="box">

        {result}
        </div>
    )

  }
}

export default Todo