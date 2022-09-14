import React, { Component } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'
import './Todo.css'

class TodoList extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         todo : []
      }

    }

    create = (newTodo) => {

        // newTodo will be stored in form of tasl : "Form's value"
        // ...this.state.todo will hold all prev todos.
        this.setState({
            todo : [...this.state.todo , newTodo]
        })

    }

    remove = (id) => {

        this.setState({
            
          //- 'todo.id !== id' will not return current element because condtion will come false, in this way toda 
          //   gets removed.
          todo :  this.state.todo.filter(todo => todo.id !== id)

        })

    }

    update = (id , updatedTask) => {

        // updatedTask is the value which sme from edit form
        this.setState({
            todo :  this.state.todo.map(todo => {
            if (todo.id === id) {
                return {...todo , task : updatedTask}
            }
            else{
                return todo;
            }
            })

        })

    }

  render() {

    return (

        <>
            <h1>Your TODO List!!</h1>
            <TodoForm newTodo={this.create}/>
            <ul>
            {/* 
                Map will run for every todo(which consists of tasks ; "todo/value") 
                todo.id- has value as e=when a todo is created , it is given a id from uuid
                todo.task- (tasks ; "todo/value")
            */}
            
                {this.state.todo.map(todo => {
                    return <Todo 
                    key={todo.id} 
                    task={todo.task} 
                    id={todo.id} 
                    removeTodo={this.remove} 
                    updateTodo={this.update}
                    />
                })}

            </ul>
        </>

    )

  }
}

export default TodoList