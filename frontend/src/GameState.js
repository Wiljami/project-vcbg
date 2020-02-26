import React from "react";

class GameState extends React.Component {
    render () {
        let data = []
        data.push(<p>Your points: {this.props.points}</p>)
        data.push(this.props.button)
        data.push(<p>Your last win: {this.props.lastWin}</p>)
        data.push(<p>Clicks to next win: {this.props.clicksToNextWin}</p>)
        return data
    }
}

export default GameState
