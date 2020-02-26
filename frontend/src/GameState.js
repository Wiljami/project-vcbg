import React from "react";

class GameState extends React.Component {
    render () {
        let data = []
        data.push(<h1>Your points: {this.props.points}</h1>)
        data.push(this.props.button)
        data.push(<h1>Your last win: {this.props.lastWin}</h1>)
        data.push(<h1>Clicks to next win: {this.props.clicksToNextWin}</h1>)
        return data
    }
}

export default GameState
