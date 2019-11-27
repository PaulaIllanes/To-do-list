import React from "react"
import DeleteBtn from "./DeleteBtn"


class TextField extends React.Component {
    state = {
        checked: false,
        line: false
    }
    handleChecked = () => {
        this.setState({
            checked: !this.state.checked,
            line: !this.state.line
        });
        console.log("Funciona")
    }


    render() {
        return (
           
                <div className="text-field" style={this.props.hideClass}>
                 <input type="checkbox"
                    checked={this.state.checked}
                    onChange={this.handleChecked}/>
                <p style={ 
                    {textDecoration: this.state.line ? "line-through" : "none" }
                }>
                    {this.props.commentary}</p>             
                <DeleteBtn handleDelete={this.props.handleDelete}/>
            </div>

        )
    }
}

// ({commentary, strikethrough, isChecked, setCheck}) => ()

export default TextField
