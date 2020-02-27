import React from "react";
import Typography from "@material-ui/core/Typography";

class GameState extends React.Component {
    render () {
        return (
            <Typography color="textSecondary">
                <p>Your points: {this.props.points}</p>
                {this.props.button}
                <p>Your last win: {this.props.lastWin}</p>
                <p>Clicks to next win: {this.props.clicksToNextWin}</p>
            </Typography>
        )
    }
}

export default GameState
