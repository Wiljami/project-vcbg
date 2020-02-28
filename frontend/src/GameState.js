import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function GameState(props) {
    let data = []
    if (props.lastWin === -1) {
        data.push(
            <Typography color="textSecondary">
                Welcome to the amazing button game!
            </Typography>
        )
        data.push(
            <Typography color="textSecondary">
                Click above to play!
            </Typography>
        )
    } else {
        if (props.lastWin === 0) {
            data.push(
                <Typography color="textSecondary">
                    No win on your last click.
                </Typography>
            )
        } else {
            data.push(
                <Typography color="textSecondary">
                    You win {props.lastWin} points!
                </Typography>
            )
        }
        data.push(
            <Typography color="textSecondary">
                Clicks to next win: {props.clicksToNextWin}
            </Typography>
        )
    }
    return (
        <Box style={{textAlign : 'center'}}>
            <Typography color="textSecondary">
                Your points: {props.points}
            </Typography>
            {props.button}
            {data}
        </Box>
    )
}
