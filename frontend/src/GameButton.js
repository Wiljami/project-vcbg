import React from "react";
import Button from "@material-ui/core/Button";

class GameButton extends React.Component {
    constructor(props) {
        super(props)
        this.click = props.click
        this.text = props.text
    }

    render() {
        return <Button onClick={this.props.click} color={this.props.color} >{this.props.text}</Button>
    }
}

export default GameButton
