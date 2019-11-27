import React from "react"

const Form = ({onSubmit, textValue, onChangeText}) => (
    <div className="form-container">
      <form onSubmit={onSubmit}>
        <p>TodoApp</p>
        <input 
        name="ftitle" 
        type="text" 
        autoComplete="off" 
        placeholder="Add task"
        value={textValue} 
        onChange={onChangeText}></input>
    </form>  
    </div>
    
)

export default Form
