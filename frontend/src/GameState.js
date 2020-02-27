import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

class GameState extends React.Component {
    render () {
        return (
            <Box>
                <Typography color="textSecondary">
                    Your points: {this.props.points}
                </Typography>
                {this.props.button}
                <Typography color="textSecondary">
                    Your last win: {this.props.lastWin}
                </Typography>
                <Typography color="textSecondary">
                    Clicks to next win: {this.props.clicksToNextWin}
                </Typography>
            </Box>
        )
    }
}

export default GameState
