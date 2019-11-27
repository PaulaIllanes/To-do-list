import React from "react"
import DeleteBtn from "./DeleteBtn"


class TextField extends React.Component {
    // state = {
    //     checked: false,
    //     line: false
    // }

    // handleChecked = () => {
    //     // console.log("Funciona")
    //     this.setState({
    //         checked: !this.state.checked,
    //         line: !this.state.line
    //     });
    // }

    render() {
        return (

            <div className="text-field" style={this.props.hideClass}>
                <input type="checkbox"
                    checked={this.props.checked}
                    onChange={this.props.handleChecked} />
                <p style={this.props.style}>
                    {this.props.commentary}</p>
                <DeleteBtn handleDelete={this.props.handleDelete} />
            </div>

        )
    }
}

// ({commentary, strikethrough, isChecked, setCheck}) => ()

export default TextField
