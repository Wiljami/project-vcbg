import React from "react";
import Button from "@material-ui/core/Button";

export default function GameButton(props) {
    return <Button onClick={props.click} color={props.color} >{props.text}</Button>
}
