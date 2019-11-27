import React from "react"
import Form from "./Components/Form"
import TextField from "./Components/TextField"

class TodoApp extends React.Component {
    state = {
        tasks: [],
        text: "",
        isDeleted: false
    };

    setText = e => {
        this.setState({ text: e.target.value })
    };

    uploadTask = e => {
        e.preventDefault();
        if(this.state.text !== "") {
            const newTodoArrey = {
            text: this.state.text,
            isDeleted: this.state.isDeleted
        }
        const newTodo = [
            ...this.state.tasks,
            newTodoArrey
        ]
        this.setState({ tasks: newTodo, text: ""},
            () => {
                localStorage.setItem(
                    "todoApp",
                    JSON.stringify(this.state.tasks)
                );
            })
        }
    }
    handleDelete = (task) => {
        // Funciona pero borra directamente los elementos del localStorage
        // const deletedItem = this.state.tasks.filter(element => element !== task)
        // localStorage.setItem("todoApp", JSON.stringify(deletedItem))
        // this.setState({
        //     tasks: deletedItem
        // })

        this.state.tasks.map(val => {
            if(val.text === task.text) {
                val.isDeleted = true;
                
                localStorage.setItem("todoApp", JSON.stringify(this.state.tasks))    
            }
        })

        this.setState({...this.state.tasks})
        
    }

    componentDidMount() {
        let tasksFromStorage = JSON.parse(localStorage.getItem("todoApp"));
        if (tasksFromStorage && !this.state.isDeleted) {
            this.setState({
                tasks: tasksFromStorage
            });
        }

    }

    renderTask = () => {
        if (this.state.tasks.length > 0) {
          return this.state.tasks.map((element, key) => {
              if(!element.isDeleted) {
                return <TextField 
                key={key}
                commentary={element.text} 
                handleDelete={() => this.handleDelete(element)}
                hideClass={{display: !element.isDeleted ? "flex" : "none"}}/>
              }
          })  
        }
        
    }

    render() {
        return (
            <div className="full-container">
                <Form onSubmit={this.uploadTask}
                    textValue={this.state.text}
                    onChangeText={this.setText} />
            
                    {this.renderTask()}
                </div>
        )
    }
}
export default TodoApp
